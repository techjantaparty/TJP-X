"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import { useAuth } from "./context/AuthContext";

export default function AuroraBackgroundDemo() {
  const router = useRouter();
  const { user, signIn, deleteUser } = useAuth();

  const handleAuthButtonClick = () => {
    if (user) {
      deleteUser(); // Log out if the user is logged in
    } else {
      signIn(); // Log in if the user is not logged in
    }
  };

  const navigateToProfile = () => {
    router.push("/profile"); // Navigate to Topics page
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-6xl font-bold dark:text-white capitalize text-center">
          We are{" "}
          <span className="bg-gradient-to-r from-blue-700 to-gray-300 bg-clip-text text-transparent">
            TJP-X
          </span>
          , A tech community without fake community guidelines
        </div>
        <div className="flex space-x-4 mt-4">
          {/* Auth Button */}
          <button onClick={handleAuthButtonClick} className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] capitalize font-extrabold relative group transition duration-500 text-white hover:bg-transparent hover:text-black">
              {user ? "Leave Us" : "Join Us"}
            </div>
          </button>

          {/* Topics Button - Show only if user is logged in */}
          {user && (
            <button onClick={navigateToProfile} className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] capitalize font-extrabold relative group transition duration-500 text-white hover:bg-transparent hover:text-black">
                Profile
              </div>
            </button>
          )}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
