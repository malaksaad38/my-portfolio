import type {Metadata} from "next";
import {Geist, Geist_Mono, Roboto,Orbitron} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"]
})
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"]
})



export const metadata: Metadata = {
  title: "Malak Saad | My Portfolio",
  description: "I'm Malak Saad, a passionate  software developer dedicated to building high-performance, user-friendly web applications. From concept to deployment, we turn ideas into digital solutions that drive growth and innovation.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head><title></title></head>
    <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      className={`${orbitron.variable} font-orbitron antialiased`}
    >
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
    </body>
    </html>
  );
}
