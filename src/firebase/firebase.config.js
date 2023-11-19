// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};
// apiKey: "AIzaSyBz4lYm_HhXuoEeXdAv4pFimXWnqclogjo",
// authDomain: "bistro-boss-mod12.firebaseapp.com",
// projectId: "bistro-boss-mod12",
// storageBucket: "bistro-boss-mod12.appspot.com",
// messagingSenderId: "428923081679",
// appId: "1:428923081679:web:e017e3eb476afeb483b8ba"

// Initialize Firebase
export const app = initializeApp(firebaseConfig);