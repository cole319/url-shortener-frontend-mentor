# URL Shortener – Frontend Mentor Challenge

A sleek and responsive URL shortener app built with Next.js (App Router), TypeScript, and Tailwind CSS. Users can shorten URLs using the Clean URI API, copy them to clipboard with a click, and revisit their list of shortened URLs even after refreshing the page.

## Features

- Shorten any valid URL using [Clean URI API](https://cleanuri.com/docs)
- Persistent URL list saved in localStorage
- One-click copy to clipboard with feedback (Copy ➜ Copied!)
- Error message if input is empty or API fails
- Fully responsive layout optimized for all screen sizes
- Accessible focus and hover states for all interactive elements

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Unique ID**: `uuid` for generating unique keys
- **Clipboard API**: For fast copy-to-clipboard action

## Architecture & Design Decisions

- **Context API** is used to manage global state of the shortened URLs to avoid prop drilling across components like `URLForm`, `ShortenedUrlList`, and `ShortenedUrlListItem`.
- **localStorage** is used to persist data across sessions. When the list reaches 10 items, the oldest one is automatically removed before adding a new one.
- **Clipboard Copy Button** updates its label to `"Copied!"` and changes color for clear feedback.
- **Custom Button Component** was created to maintain design consistency across the app.

## 📦 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```
