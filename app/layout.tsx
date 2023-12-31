import "./globals.css";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";

import { ThemeProvider } from "@/app/components/providers";

const inter = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
