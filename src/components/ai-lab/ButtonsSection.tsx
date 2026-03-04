import Link from "next/link";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";

export default function ButtonsAI() {
  return (
    <div className="flex justify-center gap-4">

      {/* Explore Experiments */}
      <Button asChild className="bg-secondary hover:bg-secondary/80 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
        <a href="#experiments">
          Explore Experiments ↓
        </a>
      </Button>

      {/* GitHub Button */}
      <Button asChild variant="secondary"className="bg-secondary hover:bg-secondary/80 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
        <Link
          href="https://github.com/sayan-dey12"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          View GitHub
          <FaGithub />
        </Link>
      </Button>

    </div>
  );
}