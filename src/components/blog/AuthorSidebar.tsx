import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function AuthorSidebar() {
  return (
    <div
      className="
        p-6
        bg-transparent
        flex flex-col
        items-start
        text-left
        gap-4
        max-w-sm
      "
    >
      {/* Profile */}
      <Image
        src="/me-photo.jpg"
        alt="Sayan Dey"
        width={96}
        height={96}
        className="rounded-2xl object-cover"
      />

      {/* Bio */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        Builder, problem solver, and someone who loves turning ideas into fast, real-world products.
        <br />
        I explore full-stack engineering , AI , systems , and everything that helps me become a better developer.
      </p>

      

      {/* Socials */}
      <div className="flex gap-3 pt-2">
        <a
          href="https://x.com/sayan_dey12"
          target="_blank"
          className="p-2 rounded-md border border-border hover:bg-muted transition"
        >
          <FaXTwitter size={16} />
        </a>

        <a
          href="https://www.linkedin.com/in/sayan-dey-b37843378/"
          target="_blank"
          className="p-2 rounded-md border border-border hover:bg-muted transition"
        >
          <FaLinkedin size={16} />
        </a>

        <a
          href="https://github.com/sayan-dey12"
          target="_blank"
          className="p-2 rounded-md border border-border hover:bg-muted transition"
        >
          <FaGithub size={16} />
        </a>
      </div>
    </div>
  );
}