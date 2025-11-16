import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polymarket Agent - Automated Trading on Base",
  description: "Automated Prediction Market Strategy & Social Trading on Base",
  openGraph: {
    title: "Polymarket Agent",
    description: "Automated Prediction Market Strategy & Social Trading on Base",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
