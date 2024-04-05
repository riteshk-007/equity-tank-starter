import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Equity Tank - Share Market Classes in Delhi",
  },
  description:
    "share market classes in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
