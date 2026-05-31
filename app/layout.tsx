import type { Metadata } from "next";
import "./globals.css";
import { inter, poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Yafi's Portofolio Hub",
  description: "A showcase of my projects and skills as a web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="bg-background min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
