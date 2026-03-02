import { FaGithub , FaInstagram , FaLinkedin , FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer(){
    return(
        <>
            <footer
                className="
                    mt-6 border-t border-border
                    bg-background/95 text-muted-foreground
                    py-10"
            >
                <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
                    {/* social icons */}
                    <div className="flex justify-center space-x-6 text-2xl">
                        <Link
                            href="https://github.com/sayan-dey12"
                            target="_blank"
                            className="hover:text-foreground transition-colors"
                        >
                            <FaGithub />
                        </Link>
                        <Link
                            href="https://www.instagram.com/sayan_.dey_"
                            target="_blank"
                            className="hover:text-pink-500 transition-colors"
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            href="https://x.com/sayan_dey12"
                            target="_blank"
                            className="hover:text-blue-400 transition-colors"
                        >
                            <FaXTwitter />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/sayan-dey-b37843378/"
                            target="_blank"
                            className="hover:text-blue-600 transition-colors"
                        >
                            <FaLinkedin />
                        </Link>
                    </div>

                    {/* bottom navigation */}
                    <div className="flex justify-center gap-8 text-sm">
                        <Link href="/about" className="hover:text-accent transition-colors">About</Link>
                        <Link href="/blogs" className="hover:text-accent transition-colors">Blogs</Link>
                        <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
                    </div>

                    {/* copyright */}
                    <p className="text-xs text-muted-foreground">
                        © 2026 Sayan Dey . All rights reserved.
                    </p>

                </div>


            </footer>
        </>
    )
}