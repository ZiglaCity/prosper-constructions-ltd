"use client";

import { useState } from "react";
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

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-orange-600" />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                Prosper Constructions Limited
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Building Ghana&apos;s Future
              </p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${
                  pathname === href
                    ? "text-orange-600 font-semibold"
                    : "text-gray-700 hover:text-orange-600"
                } transition-colors`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-orange-600"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-t shadow-sm">
          <div className="px-4 py-3 space-y-2">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md ${
                  pathname === href
                    ? "text-orange-600 font-semibold bg-orange-50"
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
