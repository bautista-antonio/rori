import type { Metadata } from "next";
import "./globals.css";
import hostGrotesk from "@/fonts/host-grotesk";

export const metadata: Metadata = {
  title: "Rori",
  description: "Food diary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-ivory text-charcoal ${hostGrotesk.className}`}
    >
      <body className="mt-14">{children}</body>
    </html>
  );
}
