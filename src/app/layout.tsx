import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Mirna Sockets",
  description: "The Sockets as a Service Platform",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="p-0 m-0">
      <Script
        src="//cdn.mouseflow.com/projects/a79132e9-5b27-42fa-9a8f-f966527e1cc5.js"
        strategy="afterInteractive"
        async
      />
      <body className="p-0 m-0">
        {children} <GoogleTagManager gtmId="G-VZ626SLDTR" />
      </body>
    </html>
  );
}
