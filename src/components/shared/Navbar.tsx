'use client';

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2b2d42]/95 backdrop-blur-sm border-b-2 border-[#ef233c]">
      <div className="container-vintage">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-[#ef233c] rounded-full flex items-center justify-center border-2 border-[#d4af37] group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-black text-lg">CS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-[#edf2f4] font-black text-xl tracking-wider">
                THE CHOP SHOP
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-[#edf2f4] hover:text-[#ef233c] font-bold transition-colors duration-300 tracking-wider"
            >
              HOME
            </Link>
            <Link 
              href="/booking" 
              className="vintage-btn px-6 py-2 text-sm"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#edf2f4] hover:text-[#ef233c] transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#2b2d42] border-t border-[#8d99ae]/30">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block text-[#edf2f4] hover:text-[#ef233c] font-bold transition-colors duration-300 tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/booking" 
                className="vintage-btn inline-block px-6 py-2 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 