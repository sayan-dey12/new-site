"use client";

import { Toaster } from "react-hot-toast";
import { useTheme } from "next-themes";

export default function ToastProvider() {
  const { theme } = useTheme();

  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          background: theme === "dark" ? "#1f2937" : "#ffffff",
          color: theme === "dark" ? "#ffffff" : "#000000",
        },
      }}
    />
  );
}