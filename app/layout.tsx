import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aliu Sunday Adukwu - Data Analyst & Full-Stack Developer Portfolio",
  description:
    "Data analyst & Full-Stack Developer portfolio website of Aliu Sunday Adukwu, focus on data analytics using SQL, Python, Spreadsheet, Tableau, Power BI to deliver insights and solutions also skilled as .Net Developer.",
  keywords: [
    "Data Analyst",
    "Portfolio",
    "SQL",
    "Python",
    "Power BI",
    "Excel",
    "Tableau",
    "Google Looker",
    "Data Analytics",
    ".NET",
    "Full-Stack Developer",
    "C#",
    "ASP.NET",
    "JavaScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#050420]`}>
        {children}
      </body>
    </html>
  );
}
