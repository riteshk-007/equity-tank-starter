"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              {isMounted &&
                (resolvedTheme === "dark" ? (
                  <Image
                    width={100}
                    height={90}
                    src="/light-logo.png"
                    alt="Logo"
                  />
                ) : (
                  <Image
                    width={100}
                    height={90}
                    src="/dark-logo.png"
                    alt="Logo"
                  />
                ))}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Important Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                <li className="my-2">
                  <Link href="/" className="hover:underline ">
                    Home
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/online-course" className="hover:underline">
                    Courses
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/terms-&-conditions" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Explore
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                <li className="mb-4">
                  <Link href="/resources" className="hover:underline">
                    Resources
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/contact" className="hover:underline">
                    Contact us
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/" className="hover:underline">
                    ET Foundation
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/testimonials" className="hover:underline">
                    Testimonials
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/faq" className="hover:underline">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link href="/" className="hover:underline">
              Equity Tank™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
