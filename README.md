# 🎨 21 Shades of Color

A modern, responsive React web application built with **Vite** and **Tailwind CSS** that generates a carefully balanced palette of **21 distinct color shades** from any given base HEX or RGB color. 

Designed to solve common color theory issues (such as extreme tints washing out to pure white or deep shades collapsing into indistinguishable pitch black), this tool uses custom interpolation logic to keep every single card visually distinct, accessible, and readable.

![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-purple?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css)

---

### Live Demo
https://21-shades-of-color.netlify.app

---

## ✨ Features

* **Balanced 21-Card Grid:** Displays a precise spectrum of 21 color steps split around your base color (10 lighter tints, exact anchor base, 10 deeper shades).
* **Smart Visual Bounds:** Constrains lightness between safe boundaries (`15%` to `88%`) to prevent cards from becoming invisible white or solid black.
* **Dynamic Color Recognition:** Automatically names your color family (e.g., Red, Blue, Emerald) and adapts card text color for optimal contrast.
* **One-Click Copy:** Built-in copy-to-clipboard functionality powered by **Lucide React** icons with instant "Copied" feedback.
* **Random Color Generator:** Instantly generate fresh, harmonious random palettes with a single click.
* **Modular Architecture:** Clean separation of concerns with utility functions separated into dedicated modules (`gennerateShade.js` and `colorName.js`).

---

## 📐 How the Math Works

Instead of arbitrary loops, the generator uses **linear step interpolation** centered around index `10` (the 11th card):

1. **Lighter Tints (Indexes 0–9):** Steps smoothly from a maximum safety lightness limit (`88%`) down to your base color's exact lightness.
2. **Anchor Base (Index 10):** Locks in your precise base color or random input.
3. **Deeper Shades (Indexes 11–20):** Steps smoothly from your base color down to a dark safety floor (`15%`), ensuring steps 19, 20, and 21 remain distinguishable.

---

## 🛠️ Tech Stack

* **Framework:** React 19 (Functional Components & Hooks)
* **Bundler:** Vite
* **Styling:** Tailwind CSS
* **Color Processing:** [Colord](https://github.com/omgovich/colord) (lightweight alternative to Chroma.js)
* **Icons:** [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started Locally

Follow these steps to run the project locally on your machine or in an online environment like StackBlitz:

### 1. Clone the repository
```bash
git clone https://github.com/my-username/color-shade-generator.git
cd color-shade-generator
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## 📁 Project Structure

```text
color-shade-generator/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.jsx
│   ├── ColorGenerator.jsx
│   ├── colorName.js
│   ├── generateShade.js
│   └── main.jsx
├── _oxlintrc.json
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/my-username/color-shade-generator/issues).

---
