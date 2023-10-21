---
title: 'How to Generate Acronym from any Text using Javascript'
excerpt: 'The code provided is a JavaScript function called getAcronym that takes a string of words as input and returns the acronym formed from the first letter of each word.'
tags: 
 - javascript
 - snippet
coverImage: '/assets/blog/generate-acronym-using-javascript.jpg'
date: '2023-10-01T05:35:07.322Z'
author:
  name: 'Jack Sync'
  handle: 'jacksync'
  bio: 'Experienced Web Developer Specializing In Creating Dynamic And User-Friendly Websites And Applications. Proficient In React, NextJS And More.'
  picture: '/assets/authors/jacksync.jpg'
  wallet: '0xbc4958e7d4986E08A3370AD3Ee4977cc001Ad55d'
ogImage: '/assets/blog/generate-acronym-using-javascript.jpg'
---

## What is Acronymn?

An acronym is a word formed from the initial letters of a phrase or a series of words. It is used as a shorter way to represent a longer phrase or name.

```Javascrypt
const getAcronym = (words) => {
  const acronym = words
  .split(" ")
  .map(word => word.charAt(0).toUpperCase())
  .join(" ");

  return acronym;
};

// Example Usage

  const userInput = "Fear of missing out";
  const acronym = getAcronym(userInput);

  console.log(acronym) // Output: "FOMO"

```

### Here’s a step-by-step explanation to generate Acronym:

1. The **getAcronym** function is defined using the arrow function syntax `const getAcronym = (words) => { ... }`.

2. The input string words is split into an array of words using the split method and the space delimiter `words.split(" ")`. This creates an array where each element represents a word in the input string.

3. The **map** method is used to iterate over each word in the array. For each word, a callback function is executed, which extracts the first character of the word using the `charAt(0)` method and converts it to uppercase using the **toUpperCase** method `word.charAt(0).toUpperCase()`. This creates an array of uppercase letters representing the first letters of each word.

4. The **join** method is used to combine all the elements of the array into a single string. The empty string "" is used as the separator `array.join("")`. This results in a string that represents the acronym formed by concatenating the uppercase letters.

5. The acronym string is returned as the output of the **getAcronym** function.

In the example usage, the **getAcronym** function is called with the input string **“Fear of missing out”**. The resulting acronym **“FOMO”** is then logged to the console using `console.log(acronym)`.