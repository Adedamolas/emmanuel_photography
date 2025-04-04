"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { generalSansLight } from "../../../styles/fonts";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = format(dateTime, "yyyy-MM-dd HH:mm:ss zzzz");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/collection", label: "COLLECTIONS" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-sm sm:text-lg md:text-xl ${
            isScrolled ? "bg-black text-white" : "bg-black/80 text-white"
          } p-2 sm:p-3 transform transition-all duration-300 ${
            generalSansLight.className
          }`}
        >
          {formattedDateTime}
        </h1>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute block h-0.5 bg-black rounded-full transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 top-3 w-6" : "w-6 top-1"
                }`}
              />
              <span
                className={`absolute block h-0.5 bg-black rounded-full transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0 w-6" : "w-4 opacity-100 top-3"
                }`}
              />
              <span
                className={`absolute block h-0.5 bg-black rounded-full transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 top-3 w-6" : "w-5 top-5"
                }`}
              />
            </div>
          </button>
        </div>

        <nav className="hidden md:block">
          <ul className="flex flex-row space-x-8 text-xl justify-center align-middle h-min">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-1 py-2 transition-all duration-300 group ${
                    pathname === link.href
                      ? "text-black font-medium"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300 ease-out ${
                      pathname === link.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Overlay with slide animation */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-20 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex-1">
            <ul className="space-y-6 text-2xl">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="transform transition-all duration-300 hover:translate-x-2"
                >
                  <Link
                    href={link.href}
                    className={`block py-2 ${
                      pathname === link.href
                        ? "text-black font-bold"
                        : "text-gray-700"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mb-8 pb-8 text-sm text-gray-500">
            <p className="mb-2">{format(dateTime, "EEEE, MMMM d, yyyy")}</p>
            <p>© {dateTime.getFullYear()} Emmanuel Adewuyi Photography</p>
          </div>
        </div>
      </div>
    </header>
  );
}
