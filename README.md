
# Tijar

## Overview

Tijar is a React project that provides a platform for managing product categories and products. This README provides instructions on how to set up the development environment, run the project locally, and deploy it to Firebase.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
  - [Firebase Setup](#firebase-setup)
  - [Deploying to Firebase](#deploying-to-firebase)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or above)
- npm (version 6 or above)
- Firebase CLI

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/tijar.git
   cd tijar
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Running Locally

1. Start the development server:
   ```sh
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

- `REACT_APP_FIREBASE_API_KEY`
- `REACT_APP_FIREBASE_AUTH_DOMAIN`
- `REACT_APP_FIREBASE_PROJECT_ID`
- `REACT_APP_FIREBASE_STORAGE_BUCKET`
- `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
- `REACT_APP_FIREBASE_APP_ID`
- `REACT_APP_FIREBASE_MEASUREMENT_ID`

## Deployment

### Firebase Setup

1. Install Firebase CLI if you haven't already:
   ```sh
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```sh
   firebase login
   ```

3. Initialize Firebase in your project directory:
   ```sh
   firebase init
   ```

### Deploying to Firebase

1. Build the project:
   ```sh
   npm run build
   ```

2. Deploy to Firebase:
   ```sh
   firebase deploy
   ```

## Project Structure

The project has the following structure:

\`\`\`plaintext
tijar/
├── .firebaserc
├── .gitignore
├── db.json
├── firebase.json
├── package-lock.json
├── package.json
├── README.md
├── build/
│   └── index.html
├── public/
│   ├── db.json
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── images/
│       ├── hero-image-updated.png
│       ├── product1.jpg
│       ├── product2.jpg
│       ├── product3.jpg
│       ├── product4.jpg
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── firebase.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── assets/
│   │   ├── featured-categories-bg.png
│   │   ├── footer-bg.png
│   │   ├── hero-image-updated.png
│   │   ├── product-list-bg.png
│   ├── components/
│   │   ├── ContactButton.js
│   │   ├── Filter.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── ProductCard.js
│   │   ├── ProductDetails.js
│   │   ├── ProductList.js
│   │   ├── SearchBar.js
│   ├── context/
│   │   └── ProductContext.js
│   ├── pages/
│   │   ├── AuthPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── PasswordResetPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── ProductPage.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── SignupPage.jsx
│   ├── services/
│   │   └── api.js
│   ├── styles/
│       ├── ContactButton.css
│       ├── Footer.css
│       ├── HomePage.css
│       ├── ProductCard.css
│       ├── ProductDetailPage.css
│       ├── ProductList.css
\`\`\`

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature-branch\`).
3. Make your changes.
4. Commit your changes (\`git commit -m 'Add some feature'\`).
5. Push to the branch (\`git push origin feature-branch\`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
