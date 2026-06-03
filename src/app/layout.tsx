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
    images: [portfolioConfig.seo.ogImage], // Fixed: absolute URL already
    siteName: portfolioConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    images: [portfolioConfig.seo.ogImage],
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
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex relative break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_0.4px,transparent_.9px)] [background-size:14px_14px]",
            // Removed broken dynamic class { "bg-white": "#E6E7EB" }
          )}
        >
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
