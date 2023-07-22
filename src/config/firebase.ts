// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCz4R0F3s47PQkUQ-qTqgh2hZgrro8riZg",
  authDomain: "coryde-e281b.firebaseapp.com",
  projectId: "coryde-e281b",
  storageBucket: "coryde-e281b.appspot.com",
  messagingSenderId: "685787544044",
  appId: "1:685787544044:web:3604350c61456d624e28c9",
  measurementId: "G-S0NKR9LVB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    
    return result;
  } catch (error) {
    console.log(error);
    throw error;
    
  }
};
const analytics = getAnalytics(app);



