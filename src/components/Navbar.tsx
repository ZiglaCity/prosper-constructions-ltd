"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Building2 className={`h-8 w-8 text-orange-600`} />
            <div>
              <h1
                className={`
                  text-lg sm:text-xl font-bold transition-colors
                  ${scrolled ? "text-gray-900" : "text-white"}
                `}
              >
                Prosper Constructions Limited
              </h1>
              <p
                className={`
                  text-xs sm:text-sm transition-colors
                  ${scrolled ? "text-gray-600" : "text-white/80"}
                `}
              >
                Building Ghana&apos;s Future
              </p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    transition-colors
                    ${
                      isActive
                        ? "text-orange-500 font-semibold"
                        : scrolled
                        ? "text-gray-800 hover:text-orange-600"
                        : "text-white hover:text-orange-400"
                    }
                  `}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              md:hidden p-2 transition-colors 
              ${scrolled ? "text-gray-800" : "text-white"}
            `}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-t shadow-sm">
          <div className="px-4 py-3 space-y-2">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md ${
                    isActive
                      ? "text-orange-600 font-semibold bg-orange-50"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
