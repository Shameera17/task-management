# Task Management App

A modern **Task Management App** built with **Next.js 14** and **React 18**. This application helps users manage their tasks effectively, with features like persistent state using **Zustand** and an intuitive drag-and-drop interface powered by **React DnD**.

---

## Features

- **Task Management**: Add, edit, delete, and reorder tasks effortlessly.
- **Drag and Drop**: Rearrange tasks using an intuitive drag-and-drop interface built with **React DnD**.
- **State Management**: Persistent state management using **Zustand**.
- **Production Ready**: Optimized for performance and scalability with Next.js 14.

---

## Prerequisites

Before you can run the app locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (latest version recommended)

---

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone <repository_url>
cd <repository_folder>
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

### 3. Run the Development Server

Using npm:

```bash
npm run dev
```

Using yarn:

```bash
yarn dev
```

### 4. Project Structure

```bash

├── public/         # Static assets
├── src/            # Main source files
│   ├── components/ # Reusable components
│   ├── pages/      # Next.js pages
│   ├── state/      # Zustand store for task management
│   ├── styles/     # Global and modular CSS files
│   └── utils/      # Utility functions
├── .env.local      # Environment variables
├── next.config.js  # Next.js configuration
└── package.json    # Project metadata and dependencies
```
