// pages/api/subscribe.ts
import axios from 'axios';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  if (!email.endsWith('@gmail.com')) {
    return res.status(400).json({ message: 'Please provide a valid Gmail email address' });
  }

  try {
    const response = await axios.get(
      `https://${process.env.NEXT_PUBLIC_MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${process.env.NEXT_PUBLIC_AUDIENCE_ID}/members/${encodeURIComponent(email)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        },
      }
    );

    if (response.status === 200) {
      // Email is already subscribed
      return res.status(200).json({ message: 'Email is already subscribed' });
    }
  } catch (error: any) {
    if (error.response?.status === 404) {
      // Email is not subscribed, proceed with subscription
      try {
        const subscribeResponse = await axios.post(
          `https://${process.env.NEXT_PUBLIC_MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${process.env.NEXT_PUBLIC_AUDIENCE_ID}/members`,
          {
            email_address: email,
            status: 'subscribed',
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
            },
          }
        );

        if (subscribeResponse.status === 200) {
          return res.status(200).json({ message: 'Email subscribed successfully' });
        } else {
          return res.status(500).json({ message: 'Email subscription failed' });
        }
      } catch (subscribeError) {
        console.error(subscribeError);
        return res.status(500).json({ message: 'Email subscription failed' });
      }
    } else {
      console.error(error);
      return res.status(500).json({ message: 'Error checking subscription' });
    }
  }
}