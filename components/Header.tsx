"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/calculators";
import { Menu, X } from "lucide-react"; // built-in icon library in Next projects

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Short Stay ROI
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Calculators
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border rounded shadow-lg flex flex-col">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/calculators/${cat.slug}`}
                    className="px-4 py-2 text-gray-700 hover:bg-blue-100 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col p-4 space-y-2">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 text-left font-medium hover:text-blue-600 transition"
            >
              Calculators
            </button>

            {isDropdownOpen && (
              <div className="ml-4 flex flex-col border-l border-gray-100 pl-4">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/calculators/${cat.slug}`}
                    className="py-1 text-gray-700 hover:text-blue-600 transition"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
