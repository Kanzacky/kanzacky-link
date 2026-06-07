import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaki Adi Nugroho",
  description: "Portfolio of Zaki Adi Nugroho, berfokus pada Platform Web, AI & Data, dan Sistem Backend.",
  keywords: ["Zaki Adi Nugroho", "Portfolio", "Web Developer", "Backend Developer", "AI Enthusiast", "Software Engineer"],
  openGraph: {
    title: "Zaki Adi Nugroho",
    description: "Portfolio of Zaki Adi Nugroho, berfokus pada Platform Web, AI & Data, dan Sistem Backend.",
    siteName: "Zaki Adi Nugroho Portfolio",
    images: [
      {
        url: "/iii.jpeg",
        width: 800,
        height: 800,
        alt: "Zaki Adi Nugroho Profile",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaki Adi Nugroho",
    description: "Portfolio of Zaki Adi Nugroho, berfokus pada Platform Web, AI & Data, dan Sistem Backend.",
    images: ["/iii.jpeg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#09090b",
};

import LoadingScreen from "@/components/LoadingScreen";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased dark" suppressHydrationWarning>
      <body
        className={`min-h-[100svh] bg-theme-bg text-foreground ${plusJakarta.className} selection:bg-theme-selection-bg selection:text-theme-selection-text flex flex-col overscroll-none relative transition-colors duration-500`}
      >
        <ThemeProvider>
          {/* Global Noise Background */}
          <div
            className="pointer-events-none fixed inset-0 z-[-2] h-full w-full transition-opacity duration-500"
            style={{
              opacity: "var(--theme-noise-opacity)",
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
            }}
          ></div>

          {/* Ambient Subtle Glows */}
          <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden transition-colors duration-500">
            <div className="absolute -top-[25%] -left-[10%] w-[50%] h-[50%] rounded-full bg-theme-glow-a blur-[120px]"></div>
            <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-theme-glow-b blur-[120px]"></div>
          </div>

          <LoadingScreen />
          <CustomCursor />
          <ThemeToggle />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
