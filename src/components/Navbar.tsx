"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-green-700">Sellmycarnaija</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-700 font-medium">
              Home
            </Link>
            <Link href="/verify" className="text-gray-700 hover:text-green-700 font-medium">
              Verify
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-700 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-700 font-medium">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 hover:text-green-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute left-0 top-16 w-full z-50 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 text-center space-y-1">
            <Link href="/" onClick={handleLinkClick} className="block px-3 py-2 rounded text-gray-700 hover:bg-green-100">
              Home
            </Link>
            <Link href="/verify" onClick={handleLinkClick} className="block px-3 py-2 rounded text-gray-700 hover:bg-green-100">
              Verify
            </Link>
            <Link href="/about" onClick={handleLinkClick} className="block px-3 py-2 rounded text-gray-700 hover:bg-green-100">
              About
            </Link>
            <Link href="/contact" onClick={handleLinkClick} className="block px-3 py-2 rounded text-gray-700 hover:bg-green-100">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
