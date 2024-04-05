"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { ModeToggle } from "./Mode";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 250) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <nav
        className={`bg-white dark:bg-black z-[100] start-0 border-b border-gray-200 dark:border-gray-700 shadow md:inset-x-0 md:border-t ${
          isSticky
            ? "sticky top-0 md:translate-y-3 md:w-4/5 mx-auto md:rounded-3xl md:shadow-md z-[100] transition-all duration-300"
            : "w-full z-[100] "
        }  dark:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_3px_#00c2cb,0_0_10px_#00c2cb,0_0_15px_#00c2cb]`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-3">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            onClick={() => setIsOpen(false)}
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
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="mx-2">
              <ModeToggle />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 dark:bg-gray-800 outline-none ring-2 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:ring-gray-600"
            >
              {isOpen ? (
                <CgClose className="w-6 h-6" />
              ) : (
                <RiMenu3Fill className="w-6 h-6" />
              )}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } items-center justify-between  w-full md:flex md:w-auto md:order-1 bg-gray-50 dark:bg-gray-800 md:bg-white md:dark:bg-black`}
          >
            <ul className="flex flex-col items-start p-4 md:p-0 mt-4 font-medium border border-gray-100  rounded-lg bg-gray-50  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 dark:hover:text-gray-500  rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white"
                >
                  Home
                </Link>
              </li>
              <li className="my-2 md:my-0">
                <div className="relative">
                  <button
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                  >
                    About
                    <FaAngleDown
                      className={`inline-block w-4 h-4 ml-1  text-gray-500 dark:text-gray-400 ${
                        isAboutDropdownOpen
                          ? "transform rotate-180 transition-all duration-150"
                          : ""
                      }`}
                    />
                  </button>

                  {isAboutDropdownOpen && (
                    <div
                      onMouseEnter={() => setIsAboutDropdownOpen(true)}
                      onMouseLeave={() => setIsAboutDropdownOpen(false)}
                      className="z-50 absolute md:left-1/2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <Link
                            href="/about"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/et-foundation"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            ET Foundation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/testimonials"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Tesimonials
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li className="my-2 md:my-0">
                <div className="relative">
                  <button
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Courses
                    <FaAngleDown
                      className={`inline-block w-4 h-4 ml-1  text-gray-500 dark:text-gray-400 ${
                        isDropdownOpen
                          ? "transform rotate-180 transition-all duration-150"
                          : ""
                      }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                      className="z-50 absolute md:left-1/2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li className="relative group">
                          <span className="flex items-center gap-2  cursor-pointer justify-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Offline Courses
                            <FaAngleDown className="-rotate-90" />
                          </span>
                          <ul className="absolute -right-full top-0 mt-2 space-y-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible">
                            <li>
                              <Link
                                href="/foundation"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-sm"
                              >
                                Stock Foundation Programme - Basic
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/smart-traders"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-sm"
                              >
                                Smart Trader Course -Advance
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/futures-options"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-sm"
                              >
                                ET- Futures & Options
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link
                            href="/online-course"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Online Courses
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>

              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block py-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:dark:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className="block py-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:dark:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
