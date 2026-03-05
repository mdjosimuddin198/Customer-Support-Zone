## Customer-Support-Zone

## L2 Team(PH) Assignment Project

## 📌 Project Overview

This project is a React-based Customer Support Zone designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using React-Toastify.

## 🚀 Technologies Used

- React.js
- Tailwind CSS
- DaisyUI
- Toastify React
- React Icons

## 🛠 Author

Md Josim Uddin
MERN Stack Developer

## Questions Asked in This Assignment

## What is JSX, and why is it used?

JSX (JavaScript XML) হলো JavaScript-এর একটি syntax extension যা React এ ব্যবহার করা হয়।

## কেন ব্যবহার করা হয়:

- UI সহজভাবে লিখতে সাহায্য করে
- HTML-এর মতো syntax হওয়ায় কোড readable হয়
- JavaScript ও UI একসাথে লিখতে সুবিধা হয়
- React element তৈরি করা সহজ হয়
  (JSX শেষ পর্যন্ত React.createElement() এ compile হয়ে যায়)

## What is the difference between State and Props?

## Props

- Parent component থেকে child component এ data পাঠাতে ব্যবহার হয়
- Read-only (change করা যায় না)
- Component এর বাইরে থেকে আসে

## State

- Component এর ভিতরের data
- Change করা যায় (setState / useState)
- Component নিজেই manage করে

## What is the useState hook, and how does it work?

useState Hook React-এ component এর state manage করার জন্য ব্যবহার করা হয়।

## কিভাবে কাজ করে:

- useState() একটি state variable এবং একটি function return করে
- State change করার জন্য সেই function ব্যবহার করতে হয়
- State change হলে component re-render হয়

## How can you share state between components in React?

React এ components এর মধ্যে state share করার কয়েকটি উপায় আছে:

- Lifting State Up – common parent component এ state রাখা এবং props দিয়ে child এ পাঠানো
- Props – parent থেকে child component এ data pass করা
- Context API – অনেক deep component এ state share করার জন্য
- State Management Library – যেমন Redux, Zustand ইত্যাদি

## How is event handling done in React?

React এ event handling JavaScript-এর মতোই হয়, তবে কিছু ভিন্নতা আছে

- CamelCase syntax ব্যবহার হয়
- Function reference দিতে হয়, string নয়
- Synthetic Events – React একটি wrapper ব্যবহার করে যা সব browser এ consistent behavior দেয়
- Event object access করতে চাইলে function parameter হিসেবে নিতে হয়
