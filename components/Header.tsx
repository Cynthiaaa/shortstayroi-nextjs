"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/calculators";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">Short Stay ROI</Link>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Calculators
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white border rounded shadow-lg flex flex-col">
              {categories.map(cat => (
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
      </div>
    </nav>
  );
}
