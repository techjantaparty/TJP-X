"use client";

import React from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
    const router = useRouter();
    const { user, deleteUser, logOut } = useAuth();
    const navigateToHome = () => {
        router.push("/"); // Navigate to Topics page
    };

    const signOut = async() => {
        await logOut()
    }

    const handleDeleteAccount = async () => {
        try {
            await deleteUser(); // Deletes the account
            alert("Your account has been successfully deleted.");
        } catch (error) {
            console.error("Error deleting account:", error);
            if (error.code === "auth/requires-recent-login") {
                alert("Please reauthenticate to delete your account.");
            }
        }
    };

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
                <h1 className="text-2xl capitalize font-bold">You are not logged in</h1>
                <button onClick={navigateToHome} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Log In</button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
            <div className="max-w-md w-full bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                <img
                    src={user.photoURL || "https://res.cloudinary.com/dfdbvvapa/image/upload/v1735114055/TJP_upywl5.jpg"} // Fallback to a default image
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-lg font-medium">{user.displayName || "No Name"}</h2>
                <p className="text-sm text-gray-400">{user.email || "No Email"}</p>

                <div className="flex flex-col space-y-4 mt-6">
                    {/* Delete Account Button */}
                    <button
                        onClick={handleDeleteAccount}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        Delete Account
                    </button>

                    {/* Log Out Button */}
                    <button
                        onClick={signOut}
                        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
