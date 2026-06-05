import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { portfolioConfig } from "@/config/portfolio.config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  // Next.js automatically combines this base URL with relative asset paths below
  metadataBase: new URL(portfolioConfig.seo.url),
  title: {
    default: portfolioConfig.name,
    template: `%s - ${portfolioConfig.title}`,
  },
  description: portfolioConfig.description,
  keywords: portfolioConfig.seo.keywords,
  authors: portfolioConfig.seo.authors,
  creator: portfolioConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioConfig.seo.url,
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    // Files in /public are served from the root. If your file is /public/og-image.jpg, use '/og-image.jpg'
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${portfolioConfig.name} Portfolio Preview`,
      },
    ],
    siteName: portfolioConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    images: ["/og-image.png"], // Next.js resolves this to an absolute URL via metadataBase
    creator: portfolioConfig.seo.twitterHandle,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${rubik.variable}`}
        suppressHydrationWarning
      >
        <main
          className={cn(
            "flex relative min-h-screen items-center justify-between",
            "pt-14 pb-4",
            "px-6 md:px-10 lg:px-16 xl:px-24",
            "bg-[url('/89787.jpg')]",
            "bg-cover bg-center bg-no-repeat",
            "before:absolute before:inset-0 before:z-0",
            "relative z-10",
          )}
        >
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
