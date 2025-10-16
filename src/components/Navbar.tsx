"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2 } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left - Logo + Title */}
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-orange-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Prosper Constructions Limited
              </h1>
              <p className="text-sm text-gray-600">
                Building Ghana&apos;s Future
              </p>
            </div>
          </div>

          {/* Right - Navigation */}
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
        </div>
      </div>
    </header>
  );
}
