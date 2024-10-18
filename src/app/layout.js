import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samuel Ajala - Machine Learning Engineer & Software Developer",
  description: "Expert in Embedded Systems, Machine Learning, AI, Robotics, and Full-Stack Development. Crafting intelligent software solutions for automation and innovation.",
  keywords: "Samuel Ajala, Ajala, Software Developer, Machine Learning Engineer, Embedded Systems, AI, Robotics, Full-Stack Development, Automation, Artificial Intelligence, Developer Portfolio, ML, ML Engineer, Electronics and Computer Engineering, Python, Computer Vision "
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}