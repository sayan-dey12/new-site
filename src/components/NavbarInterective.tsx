"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Moon, Sun, X, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/projects", label: "Projects" },
  { href: "/ai-lab", label: "AI Lab" },
  { href: "/about", label: "About" },
];

export default function NavbarInteractive() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-x-12 text-md">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive(link.href) ? "page" : undefined}
            className={
              isActive(link.href)
                ? "text-accent font-semibold"
                : "text-foreground"
            }
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop theme */}
      <div className="hidden md:flex items-center">
        <ThemeToggle
          theme={theme}
          setTheme={setTheme}
        />
      </div>

      {/* Mobile actions */}
      <div className="flex items-center gap-4 md:hidden">
        <ThemeToggle
          theme={theme}
          setTheme={setTheme}
        />

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden"
        >
          {menuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="
            md:hidden
            fixed inset-x-0 top-16 z-40
            px-5 py-5
            space-y-5
            bg-background/90
            shadow-lg
            backdrop-blur-xl
            border-b border-border
            text-foreground
          "
        >
          {links
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={
                  isActive(link.href)
                    ? "block text-sm font-medium text-accent"
                    : "block text-sm font-medium hover:text-accent transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
        </div>
      )}
    </>
  );
}

function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}) {
  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="rounded-full"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 dark:hidden" />
      <Moon className="h-5 w-5 hidden dark:block" />
    </Button>
  );
}