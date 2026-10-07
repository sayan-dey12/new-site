"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const email = String(formData.get("email") ?? "").trim();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: window.location.pathname,
        }),
      });

      const data = await res.json();

      if (res.status === 429) {
        toast.error("Too many requests. Please try again later.");
        return;
      }

      if (!res.ok) {
        toast.error(data.message || "Something went wrong");
        return;
      }

      toast.success("You're in! 🚀 I’ll reach out soon.");

      form.reset();
    } catch {
      toast.error("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 flex-col sm:flex-row"
    >
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        autoComplete="email"
        required
        disabled={loading}
      />

      <Button
        type="submit"
        disabled={loading}
        className="bg-purple-600 text-white hover:bg-purple-700 hover:text-white focus-visible:ring-purple-500"
      >
        {loading ? "Sending..." : "Connect"}
      </Button>
    </form>
  );
}