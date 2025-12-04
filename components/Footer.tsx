"use client"; // optional, but safe if you plan to add state later

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-blue-400">Short Stay ROI</span>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/cookies" className="hover:text-blue-400 transition">
              Cookies Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-400 transition">
              Terms of Use
            </Link>
            <Link href="/privacy" className="hover:text-blue-400 transition">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          Short Stay ROI © {new Date().getFullYear()} | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
