import Link from "next/link";
import { useEffect , useState} from "react";
import { toast} from "react-hot-toast";
import { usePathname} from "next/navigation";
import { Sun , Moon , X , Loader2 , Menu} from "lucide-react";
import { useTheme } from "next-themes";
import {Button} from "@/components/ui/button";



export default function Navbar() {
    const {theme , setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    const [menuOpen , setMenuOpen] = useState(false);


    useEffect(() => {
    setMounted(true);
    }, []);

    if (!mounted) return null;

    const pathname = usePathname();
    
    const isActive = (path: string) => {
        return pathname === path ? "text-accent font-semibold" : "text-foreground"
    }

    const handleComingSoon = () => {
        toast("🚧 Coming Soon!")
    }


    return(
        <>
        <nav
            className = "w-full sticky top-0 z-50 border-b border-border bg-background/70 shadow-sm backdrop-blur-2xl"
        >
            <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* main name */}
                <Link href="/" 
                    className="text-xl font-bold text-foreground hover:text-accent transition-colors"
                >
                     Sayan Dey
                </Link>

                {/*menu for desktop*/}
                <div className="hidden md:flex items-center space-x-6 text-sm">

                    <Link href="/blogs"
                        className={`hover:text-accent transition-colors ${isActive("/blogs")}`}
                    > 
                        Blogs
                    </Link>
                    <button
                        onClick={handleComingSoon}
                        className={`hover:text-accent transition-colors ${isActive("/projects")}`}
                        >
                        Projects
                    </button>
                    <button
                        onClick={handleComingSoon}
                        className={`hover:text-accent transition-colors ${isActive("/ai-lab")}`}
                        >
                        AI Lab
                    </button>
                    <Link href="/about"
                        className={`hover:text-accent transition-colors ${isActive("/about")}`}
                    > 
                        About
                    </Link>  

                </div>
                <div className="flex items-center space-x-6 text-sm">
                    {/* toggle button for theme */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                        { theme === "light" ? ( <Moon className="h-5 w-5"/>)
                        :( <Sun className="h-5 w-5"/>)
                    }    
                    </Button>
                </div>
                {/* X for mobile */}
                <button className="md:hidden" 
                    onClick={() => setMenuOpen(!menuOpen)}>
                        {!menuOpen ? <Menu className="w-6 h-6"/> : <X className="w-6 h-6"/>}
                    </button>
            </div>
        </nav>

        {/* mobile dropdown menu */}
        {menuOpen && (
            <div 
                className="md:hidden 
                fixed inset-x-0 top-16 z-40 
                px-5 py-5 space-y-5 bg-background/80 
                shadow-lg backdrop-blur-xl 
                border-b border-border 
                text-foreground"
            >
                <Link href="/blogs" 
                    onClick={()=>{setMenuOpen(false)}}
                    className={`block text-sm font-medium hover:text-accent transition-colors ${isActive("/blogs")}`}>
                        Blogs
                </Link>

                <button 
                    onClick={()=>{
                        handleComingSoon();
                        setMenuOpen(false);
                        }}
                        className={`block text-sm font-medium hover:text-accent transition-colors ${isActive("/projects")}`}>
                            Projects
                </button>
                <button 
                    onClick={()=>{
                        handleComingSoon();
                        setMenuOpen(false);
                        }}
                        className={`block text-sm font-medium hover:text-accent transition-colors ${isActive("/ai-lab")}`}>
                            AI Lab
                </button>
                <button 
                    onClick={()=>{
                        handleComingSoon();
                        setMenuOpen(false);
                        }}
                        className={`block text-sm font-medium hover:text-accent transition-colors ${isActive("/about")}`}>
                            About
                </button>
            </div>
        )}


        </>
    );
}