import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AdSenseScript from "@/components/AdSenseScript";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://convertanything.example"),
  title: {
    default: "Unit Converter - Convert Anything Online",
    template: "%s | ConvertAnything",
  },
  description:
    "Free online unit converter for kg to lbs, cm to inches, Celsius to Fahrenheit, MB to GB, meters to feet, miles to km, and thousands of other conversions.",
  keywords: [
    "unit converter",
    "online unit converter",
    "conversion calculator",
    "kg to lbs",
    "lbs to kg",
    "cm to inches",
    "celsius to fahrenheit",
    "meters to feet",
    "mb to gb",
  ],
  alternates: {
    canonical: "/",
  },
  applicationName: "ConvertAnything",
  authors: [{ name: "ConvertAnything" }],
  creator: "ConvertAnything",
  publisher: "ConvertAnything",
  category: "reference",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Unit Converter - Convert Anything Online",
    description: "Convert length, weight, temperature, area, volume, speed, time, storage, pressure, energy, power, and angles.",
    url: "/",
    siteName: "ConvertAnything",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Unit Converter - Convert Anything Online",
    description: "Fast unit conversions with formulas, tables, reverse converters, and SEO-friendly value pages.",
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#0f766e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <AdSenseScript />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
