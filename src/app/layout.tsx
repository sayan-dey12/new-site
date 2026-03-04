import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ToastProvider from "@/components/toast-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Sayan Dey | TechWithStrider | Developer Portfolio',
  description:
    'Official website of Sayan Dey aka Strider — a full-stack developer and student exploring AI, web dev, and blogging at TechWithStrider.',
  metadataBase: new URL("https://sayanbuilds.online"),
  openGraph: {
    title: 'Sayan Dey | TechWithStrider | Developer Portfolio',
    description:
      'Official website of Sayan Dey aka Strider — a full-stack developer and student exploring AI, web dev, and blogging at TechWithStrider.',
    url: 'https://sayanbuilds.online',
    siteName: 'TechWithStrider',
    images: [
      {
        url: '/og-image.png', // put this image inside the /public folder
        width: 1200,
        height: 630,
        alt: 'TechWithStrider – Sayan Dey',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sayan Dey | TechWithStrider',
    description:
      'Official portfolio and blog of Sayan Dey aka Strider – full-stack development, AI, open source, and more.',
    images: ['/og-image.png'],
    creator: '@sayan_dey12', // Optional: Your Twitter handle
  },
};

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
          <Navbar/>
        {children}
          <Footer/>

          <ToastProvider/>
        </ThemeProvider>
      </body>
    </html>
  );
}
