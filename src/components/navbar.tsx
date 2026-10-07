import Link from "next/link";
import NavbarInteractive from "./NavbarInterective";

export default function Navbar() {
  return (
    <nav
      className="
        w-full
        sticky top-0 z-50
        border-b border-border
        bg-card/50
        rounded-b-2xl
        shadow-sm
        backdrop-blur-2xl
      "
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="
            text-2xl
            font-bold
            text-foreground
            hover:text-accent
            transition-colors
          "
        >
          Sayan Dey
        </Link>

        <NavbarInteractive />
      </div>
    </nav>
  );
}