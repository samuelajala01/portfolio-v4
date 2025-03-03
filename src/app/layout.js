import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samuel Ajala - Software Developer(ML) & Embedded Systems Enthusiast",
  description:
    " Hi, I'm Sam, currently a computer engineering student, and I'm always about building intelligent systems",
  keywords:
    "Samuel Ajala, Ajala, Software Developer, Machine Learning Engineer, Embedded Systems, AI, Robotics, Full-Stack Development, Automation, Artificial Intelligence, Developer Portfolio, ML, ML Engineer, Electronics and Computer Engineering, Python, Computer Vision",

  // OpenGraph metadata
  openGraph: {
    title: "Samuel Ajala - Machine Learning Engineer & Software Developer",
    description:
      "Expert in Embedded Systems, Machine Learning, AI, Robotics. Crafting intelligent software solutions for automation and innovation.",
    url: "https://cy63rx.vercel.app",
    siteName: "Samuel Ajala Portfolio",
    images: [
      {
        url: "/public/avatar.png",
        width: 800,
        height: 600,
        alt: "Samuel Ajala - Software Developer (ML)",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Samuel Ajala - Machine Learning Engineer & Software Developer",
    description:
      "Expert in Embedded Systems, Machine Learning, AI, Robotics, and Full-Stack Development. Crafting intelligent software solutions for automation and innovation.",
    creator: "@samuelajala01",
    images: ["https://cy63rx.vercel.app/avatar.png"],
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

  verification: {
    google: "",
  },

  alternates: {
    canonical: "https://cy63rx.vercel.app",
  },
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
