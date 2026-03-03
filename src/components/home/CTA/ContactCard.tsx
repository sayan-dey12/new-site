"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactCard() {
  return (
    <div
      className="
        max-w-2xl
        mx-auto
        rounded-3xl
        bg-card
        border border-border
        p-8
        text-center
        space-y-6
      "
    >
      <h3 className="text-2xl font-semibold">
        Let’s Build Something Impactful
      </h3>

      <p className="text-muted-foreground">
        Open to collaborations, projects and
        exciting opportunities.
      </p>

      <div className="flex gap-3 flex-col sm:flex-row">
        <Input placeholder="Enter your email" />

        <Button className="bg-accent text-accent-foreground">
          Connect
        </Button>
      </div>
    </div>
  );
}