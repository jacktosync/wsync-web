// hooks/useEmailSubscription.ts
import { useState } from 'react';
import axios from 'axios';

export function useEmailSubscription() {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!email.endsWith('@gmail.com')) {
      setSubscriptionStatus('Please provide a valid Gmail email address');
      return;
    }

    try {
      const response = await axios.post(
        '/api/subscribe',
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        if (response.data.message === 'Email is already subscribed') {
          setSubscriptionStatus('Email is already subscribed');
        } else {
          setSubscriptionStatus('Email subscribed successfully');
          window.location.reload();
        }
      } else {
        setSubscriptionStatus('Email subscription failed');
      }
    } catch (error) {
      console.error(error);
      setSubscriptionStatus('Email subscription failed');
    }
  };

  return {
    email,
    handleEmailChange,
    handleSubmit,
    subscriptionStatus,
  };
}