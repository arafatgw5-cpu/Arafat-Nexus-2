import MobileBottomNav from "@/components/MobileBottomNav";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/context/ThemeContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Easin Arafat | Developer Portfolio",
  description:
    "Explore the portfolio of Easin Arafat, an aspiring Frontend & Full Stack Developer from Bangladesh. View projects, services, and contact details.",
  keywords:
    "developer portfolio, web developer, Easin Arafat, Frontend Developer, Full Stack, React, Next.js, Tailwind CSS, Bangladesh",
  authors: [{ name: "Easin Arafat" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://easin-arafat-portfolio.vercel.app/",
    title: "Easin Arafat | Developer Portfolio",
    description:
      "Discover Easin Arafat's portfolio showcasing expertise in Frontend & Full Stack web development. Contact for services or collaboration.",
    images: [
      {
        url: "https://easin-arafat-portfolio.vercel.app/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Easin Arafat Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easin Arafat | Developer Portfolio",
    description:
      "Check out Easin Arafat's portfolio for web development projects.",
    images: ["https://easin-arafat-portfolio.vercel.app/assets/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
          <Toaster />
          <MobileBottomNav />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}