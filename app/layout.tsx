import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

//internal imports
import { ShortenedUrlProvider } from "./context/ShortenedUrlContext";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "URL Shortener | Frontend Mentor",
  description: "Frontend Mentor challenge for URL Shortener",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <ShortenedUrlProvider>{children}</ShortenedUrlProvider>
      </body>
    </html>
  );
}
