import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully");
      navigate("/dashboard"); // Redirect to the dashboard
    } catch (error) {
      console.error("Error during sign-up:", error.code, error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard"); // Redirect to the dashboard
    } catch (err) {
      console.error("Error during sign-in with Google:", err.code, err.message);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (err) {
      console.error("Error during sign-out:", err.code, err.message);
    }
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input 
              type="email" 
              id="email" 
              onChange={(e) => setEmail(e.target.value)} 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
              placeholder="name@company.com" 
              required 
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              onChange={(e) => setPassword(e.target.value)} 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
              required 
            />
          </div>
        </div>
        <button
          type="button"
          className="w-full bg-blue-700 text-white py-2.5 rounded-lg font-medium hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
          onClick={signIn}
        >
          Sign In
        </button>
        <button
          type="button"
          className="w-full bg-red-700 text-white py-2.5 rounded-lg font-medium hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mb-4"
          onClick={signInWithGoogle}
        >
          Sign In with Google
        </button>
        <button
          type="button"
          className="w-full bg-gray-700 text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          onClick={logOut}
        >
          Log Out
        </button>
      </form>
    </div>
  );
};

