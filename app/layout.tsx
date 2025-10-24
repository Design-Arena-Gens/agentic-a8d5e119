import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divinoft Developers - Full Stack Web Development Services in Salem, Tamil Nadu | India",
  description: "Leading web development company in Salem, Tamil Nadu offering full-stack development with Python, Django, MERN stack, SEO services, web hosting, design to code conversion, and complete A-Z website solutions across India.",
  keywords: "web development Salem, full stack development Tamil Nadu, Python Django development India, MERN stack developers, web design Salem, SEO services India, web hosting Tamil Nadu, website redesign, responsive web development, e-commerce development India",
  authors: [{ name: "Divinoft Developers" }],
  openGraph: {
    title: "Divinoft Developers - Professional Web Development Services",
    description: "Transform your digital presence with expert full-stack web development, SEO, and hosting solutions from Salem, Tamil Nadu",
    type: "website",
    locale: "en_IN",
    siteName: "Divinoft Developers",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://agentic-a8d5e119.vercel.app" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Salem" />
        <meta name="geo.position" content="11.6643;78.1460" />
      </head>
      <body className={`${inter.className} bg-gray-950 text-white overflow-x-hidden`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
