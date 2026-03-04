import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function AuthorSidebar() {
  return (
    <div
      className="
      rounded-xl p-5 
      bg-secondary
      border border-border
      shadow-sm 
      flex flex-col items-center text-center
      gap-3
    "
    >
      {/* Profile */}
      <Image
        src="/me-photo.jpg"
        alt="Sayan Dey"
        width={72}
        height={72}
        className="rounded-full object-cover shadow-md"
      />

      {/* Name */}
      <h3 className="text-base font-semibold text-foreground">
        Sayan Dey
      </h3>

      {/* Tagline */}
      <p className="text-xs text-secondary-foreground leading-snug 
                    max-w-full md:max-w-55">
        Builder, problem solver, and someone who loves turning ideas into fast, real-world products.
      </p>

      {/* Short Bio */}
      <p className="text-[11px] text-secondary-foreground mt-1 leading-snug 
                    max-w-full md:max-w-60">
        I explore full-stack engineering, AI, systems, and everything that helps me become a better developer every day.
      </p>

      {/* Socials */}
      <div className="flex gap-3 mt-2">
        <a
          href="https://github.com/sayan-dey12"
          target="_blank"
          className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 
                     hover:bg-gray-200 dark:hover:bg-slate-700 transition"
        >
          <FaGithub size={16} className="text-gray-700 dark:text-gray-300" />
        </a>

        <a
          href="https://www.linkedin.com/in/sayan-dey-b37843378/"
          target="_blank"
          className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 
                     hover:bg-gray-200 dark:hover:bg-slate-700 transition"
        >
          <FaLinkedin size={16} className="text-gray-700 dark:text-gray-300" />
        </a>

        <a
          href="https://x.com/sayan_dey12"
          target="_blank"
          className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 
                     hover:bg-gray-200 dark:hover:bg-slate-700 transition"
        >
          <FaXTwitter size={16} className="text-gray-700 dark:text-gray-300" />
        </a>
      </div>

    </div>
  );
}
