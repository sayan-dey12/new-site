"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

export default function ContactCard() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault(); // ✅ prevents page reload

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

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
        body: JSON.stringify({ email }),
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
      setEmail("");
    } catch {
      toast.error("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto rounded-3xl bg-card border border-border p-8 text-center space-y-6 shadow-sm">
      
     <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
      Let’s Connect 👋
    </h3>

    <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
      Whether you have an idea, an opportunity, or just want to network and chat — drop your email and let’s connect.
    </p>

      {/* ✅ FORM WRAPPER */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 flex-col sm:flex-row"
      >
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />

        <Button
          type="submit" // ✅ important
          disabled={loading}
          className="bg-accent text-accent-foreground"
        >
          {loading ? "Sending..." : "Connect"}
        </Button>
      </form>
    </div>
  );
}