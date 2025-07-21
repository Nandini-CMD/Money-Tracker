import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Money Tracker",
  description: "Track your money efficiently",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              © 2023 Money Tracker. All rights reserved.
            </p>
          </div>
          </footer>
          
      </body>
    </html>
    </ClerkProvider>
  );
}
