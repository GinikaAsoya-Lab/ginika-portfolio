import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ginikachukwu Asoya | Data Analyst & FinTech Specialist",
  description: "Portfolio of Ginikachukwu Asoya. Showcasing data-driven decisions, operational optimization, machine learning forecasts, and financial technology architecture.",
  keywords: [
    "Ginikachukwu Asoya",
    "Ginika",
    "Data Analyst",
    "FinTech",
    "Business Analytics",
    "Python",
    "Machine Learning",
    "Power BI",
    "SQL",
    "Portfolio",
  ],
  authors: [{ name: "Ginikachukwu Asoya" }],
  creator: "Ginikachukwu Asoya",
  publisher: "Ginikachukwu Asoya",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    title: "Ginikachukwu Asoya | Data Analyst & FinTech Specialist",
    description: "Portfolio of Ginikachukwu Asoya. Showcasing data-driven decisions, operational optimization, and machine learning forecasts.",
    siteName: "Ginikachukwu Asoya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ginikachukwu Asoya | Data Analyst & FinTech Specialist",
    description: "Portfolio of Ginikachukwu Asoya. Showcasing data-driven decisions and operational optimization.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}