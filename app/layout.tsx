import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaurav Datt Bhatt - Full Stack Developer Portfolio",
  description:
    "Explore Gaurav Datt Bhatt's Full Stack Developer portfolio. Specializing in TypeScript, React, Node.js, and scalable web applications. Discover my projects including A+ Pathshala, microservices-based applications, and real-time collaborative systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
