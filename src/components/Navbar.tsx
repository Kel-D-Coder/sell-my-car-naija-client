"use client";

import Link from "next/link";
import { useState } from "react";
import "animate.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="w-full bg-white shadow-md left-0 z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-green-700">Sellmycarnaija</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {["Home", "Verify", "About", "Contact", "Blog"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase() === "home" ? "" : label.toLowerCase()}`}
                className="text-gray-700 hover:text-green-700 font-medium transition"
              >
                {label}
              </Link>
            ))}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu: Slide in from right */}
      {open && (
        <div className="md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 animate__animated animate__slideInRight animate__faster">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-green-700 focus:outline-none"
            >
              ✕
            </button>
          </div>
          <div className="px-6 py-4 space-y-4">
            {["Home", "Verify", "About", "Contact"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase() === "home" ? "" : label.toLowerCase()}`}
                onClick={handleLinkClick}
                className="block text-gray-700 font-medium hover:text-green-700 transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
