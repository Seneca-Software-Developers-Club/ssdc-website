"use client"; /* executed as client component */

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline"; // Import Heroicons

/**
 * Navbar Component
 * A responsive navigation bar that supports a dropdown menu for smaller screens.
 */
export default function Navbar() {
  const pathname = usePathname(); // Get the current route pathname
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu

  // Navigation items for the navbar
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Club Leaders", href: "/club-leaders" },
    { label: "News and Events", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    // Close the menu when navigating to a new page
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav style={{ backgroundColor: "#1e1e1e" }} className="text-white">
      <div className="container mx-auto flex justify-end items-center py-4 px-4 md:px-6">
        {/* Hamburger menu button for mobile screens */}
        <button
          className="block md:hidden text-white text-2xl mr-4"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Bars3Icon className="h-8 w-8" />
        </button>

        {/* Desktop navigation menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} legacyBehavior>
                <a
                  className={`transition-colors duration-300 ${
                    pathname === item.href
                      ? "text-red-600 font-bold" // Active link styling
                      : "text-white hover:text-[#ff0000]" // Hover effect styling
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      <div
        style={{ backgroundColor: "#1c1c1c" }}
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-screen py-4 px-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 pl-inherit">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} legacyBehavior>
                <a
                  className={`block transition-colors duration-300 ${
                    pathname === item.href
                      ? "text-red-600 font-bold" // Active link styling
                      : "text-white hover:text-[#ff0000]" // Hover effect styling
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
