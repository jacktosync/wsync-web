---
title: 'Translate any language in ReactJS Using Google Translate Api'
excerpt: 'This is how to create a translation feature on any ReactJS application Using Google Translate Api.'
tags:
 - react-js
 - google-cloud-api
 - javascript
coverImage: '/assets/blog/reactjs-google-translate-api.png'
date: '2023-10-02T05:35:07.322Z'
author:
  name: 'Jack Sync'
  handle: 'jacksync'
  bio: 'Experienced Web Developer Specializing In Creating Dynamic And User-Friendly Websites And Applications. Proficient In React, NextJS And More.'
  picture: '/assets/authors/jacksync.jpg'
  wallet: '0xbc4958e7d4986E08A3370AD3Ee4977cc001Ad55d'
ogImage: '/assets/blog/reactjs-google-translate-api.png'
--- 

Google Translate API in a React.js application to translate text between languages, you can follow these steps:

### Set Up Google Cloud Project

- Go to the Google Cloud Console (https://console.cloud.google.com/).
- Create a new project or use an existing one.
- Enable the "Cloud Translation API" for your project.

### Obtain API Key

- In the Cloud Console, navigate to "APIs & Services" > "Credentials."
- Create a new API Key.
- Keep this API Key handy as you'll need it to make API requests.

### Install Dependencies

- Open your React.js project's terminal and install the necessary packages:

```
npm install axios
```

### Create API Request

- Create a new file, e.g., GoogleTranslate.js, to handle API requests.
- Inside this file, you can use Axios to send requests to the Google Translate API:

```JS
import axios from 'axios';

const API_KEY = 'YOUR_GOOGLE_TRANSLATE_API_KEY';
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

const translateText = async (text, targetLanguage) => {
  const response = await axios.post(
    `${API_URL}?key=${API_KEY}`,
    {
      q: text,
      target: targetLanguage,
    }
  );

  return response.data.data.translations[0].translatedText;
};

export default translateText;
```

### Integrate into React Component

Now you can use the translateText function in your React components. Let's assume you have an input field for the text and a dropdown to select the target language.

When the user enters text and selects a language, you can trigger the translation:

```JS
import React, { useState } from 'react';
import translateText from './GoogleTranslate';

function App() {
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es'); // Default: Spanish

  const handleTranslate = async () => {
    if (inputText) {
      const translatedText = await translateText(inputText, targetLanguage);
      // Do something with the translatedText, e.g., display it on the page.
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        {/* Add more language options */}
      </select>
      <button onClick={handleTranslate}>Translate</button>
    </div>
  );
}

export default App;
```

Remember to replace 'YOUR_GOOGLE_TRANSLATE_API_KEY' with your actual API Key in the GoogleTranslate.js file.