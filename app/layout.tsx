import type { Metadata } from "next";

import "./globals.css";
import "./cursor.css";
import "./background.css";
import { inter, poppins } from "@/lib/fonts";
import CursorFollower from "@/components/my/CursorFollower";

export const metadata: Metadata = {
  title: "Yafi's Portofolio Hub",
  description: "I don't know what is it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${poppins.variable} ${inter.variable} antialiased`}
    >
      <body className="grid-bg">
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
