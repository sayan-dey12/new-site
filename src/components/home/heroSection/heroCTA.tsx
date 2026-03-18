"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import handleComingSoon from "@/lib/handleCommingSoon";

export default function HeroCTA() {
  return (
    <div className="flex flex-wrap gap-4 pt-2">

      {/* Projects */}
      <Button
        asChild
        className="rounded-full border border-border bg-accent text-foreground hover:opacity-90"
      >
        <Link href="/projects">
          🚀 View Projects
        </Link>
      </Button>

      {/* Blogs */}
      <Button
        asChild
        className="rounded-full bg-card border border-border text-card-foreground px-6 py-2.5 text-sm sm:text-base font-semibold hover:bg-accent"
      >
        <Link href="/blogs">
          ✍️ Read Blogs
        </Link>
      </Button>

      {/* AI Lab - Coming Soon */}
      <Button
        onClick={handleComingSoon}
        className="rounded-full border border-border bg-accent text-foreground hover:opacity-90 transition-colors"
      >
        <Link href="/ai-lab">
          🤖 AI Lab
        </Link>
        
      </Button>

      {/* Connect */}
      <Button
        asChild
        variant="outline"
        className="rounded-full border border-amber-300 dark:border-amber-400/60 bg-amber-200/20 dark:bg-amber-400/10 hover:bg-amber-200/40 dark:hover:bg-amber-400/20 text-amber-800 dark:text-amber-100 px-6 py-2.5 text-sm sm:text-base font-semibold"

      >
        <Link href="/connect">
          🤝 Connect With Me
        </Link>
      </Button>

    </div>
  );
}