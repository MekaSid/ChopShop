'use client';

import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#2b2d42] to-[#1a1b2e]">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            #8d99ae 2px,
            #8d99ae 4px
          )`
        }}></div>
      </div>

      {/* Vintage Corner Flourishes */}
      <div className="absolute top-8 left-8 text-[#ef233c] opacity-40 text-4xl">⚔</div>
      <div className="absolute top-8 right-8 text-[#ef233c] opacity-40 text-4xl">⚔</div>
      <div className="absolute bottom-8 left-8 text-[#ef233c] opacity-40 text-4xl">⚔</div>
      <div className="absolute bottom-8 right-8 text-[#ef233c] opacity-40 text-4xl">⚔</div>

      {/* Main Content */}
      <div className="relative z-10 text-center container-vintage">
        {/* Gold Border Frame */}
        <div className="gold-border p-8 md:p-12 bg-[#2b2d42]/80 backdrop-blur-sm">
          {/* Ornamental Top Border */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            <div className="mx-4 text-[#d4af37] text-2xl">⚔</div>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
          </div>

          {/* Logo Area */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-[#ef233c] rounded-full mb-4 shadow-lg border-4 border-[#d4af37]">
              <div className="text-white text-3xl font-bold">CS</div>
            </div>
            {/* Barber Tools Icon */}
            <div className="w-32 h-16 mx-auto mb-4 bg-[#8d99ae]/20 rounded-lg flex items-center justify-center border border-[#8d99ae]/30">
              <div className="text-[#8d99ae] text-sm font-medium">✂️</div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#edf2f4] leading-tight mb-4 tracking-wider vintage-text">
            THE CHOP SHOP
          </h1>

          {/* Subheading */}
          <p className="text-2xl sm:text-3xl md:text-4xl text-[#8d99ae] mb-8 opacity-90 font-medium">
            Clean Cuts. Sharp Looks.
          </p>

          {/* Decorative Line */}
          <div className="flex justify-center items-center mb-8">
            <div className="w-16 h-px bg-[#8d99ae]"></div>
            <div className="mx-4 text-[#8d99ae] text-lg">⚔</div>
            <div className="w-16 h-px bg-[#8d99ae]"></div>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <Link
              href="/booking"
              className="vintage-btn inline-flex items-center px-8 py-4 text-xl font-bold text-white"
            >
              BOOK NOW
              <svg
                className="ml-3 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          {/* Bottom Ornamental Border */}
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            <div className="mx-4 text-[#d4af37] text-2xl">⚔</div>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
          </div>
        </div>

        {/* Halftone Shadow */}
        <div className="halftone-shadow"></div>
      </div>
    </section>
  );
} 