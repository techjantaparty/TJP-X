"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  deleteUser,
} from "firebase/auth";
import { auth } from "../../../firebase/firebaseInit";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update user state when auth state changes
    });
    return () => unsubscribe(); // Cleanup the subscription
  }, []);

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null); // Clear user state after sign out
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }

  const deleteUser = async () => {
    if (auth.currentUser) {
      try {
        // Delete the user
        await deleteUser(auth.currentUser);
        setUser(null); // Clear user state after deletion
      } catch (error) {
        console.error("Error deleting user:", error);
        if (error.code === "auth/requires-recent-login") {
          alert("Please reauthenticate to delete your account.");
        }
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, deleteUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
