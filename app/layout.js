import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Equity Tank",
  description: "A platform for equity research and analysis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/sm-logo.svg" sizes="any" />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
