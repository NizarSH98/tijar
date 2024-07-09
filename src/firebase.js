// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics'; // Uncomment if you are using analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx6UAVkQoAJ3SmwotJcYDwqSmhdZECyzA",
  authDomain: "tijar-7822a.firebaseapp.com",
  projectId: "tijar-7822a",
  storageBucket: "tijar-7822a.appspot.com",
  messagingSenderId: "236038037660",
  appId: "1:236038037660:web:2235a1934a19b423fc0d59",
  measurementId: "G-YRENSVK6GY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Uncomment if you are using analytics
// const analytics = getAnalytics(app);

export { auth };
