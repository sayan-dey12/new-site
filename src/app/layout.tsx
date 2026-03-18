import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ToastProvider from "@/components/toast-provider";
import GridBackgroundDemo from "@/components/grid-background-demo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Sayan Builds | Full Stack Developer & AI Engineer",
    template: "%s | Sayan Builds",
  },

  description:
    "Sayan Builds — portfolio of Sayan Dey, showcasing full-stack development, AI tools, backend systems, and scalable projects.",

  keywords: [
    "Sayan Dey",
    "Full Stack Developer",
    "Next.js Developer",
    "AI Engineer",
    "Backend Developer",
    "Developer Portfolio",
  ],

  authors: [{ name: "Sayan Dey" }],
  creator: "Sayan Dey",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Sayan Builds | Full Stack Developer & AI Engineer",
    description:
      "Portfolio of Sayan Dey — full-stack developer building AI tools, backend systems, and scalable applications.",
    url: baseUrl,
    siteName: "Sayan Builds",
    images: [
      {
        url: `${baseUrl}/default.jpg`,
        width: 1200,
        height: 630,
        alt: "Sayan Builds",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sayan Builds",
    description:
      "Full-stack developer portfolio with AI tools, blogs, and projects.",
    images: [`${baseUrl}/default.jpg`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen overflow-x-hidden`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <GridBackgroundDemo>
            <Navbar/>
              {children}
            <Footer/>
          </GridBackgroundDemo>
          

          <ToastProvider/>
        </ThemeProvider>
      </body>
    </html>
  );
}
