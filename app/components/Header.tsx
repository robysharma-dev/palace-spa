'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-16 py-4 bg-[#0b0b0b]/90 backdrop-blur-md border-b border-white/10 shadow-sm transition-all">
      <div className="flex items-center">
        <Link href="/">
          <img 
            src="/Palace-spa-logo.png" 
            alt="Palace Spa Logo" 
            className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 font-medium text-sm tracking-wide text-white drop-shadow">
        <Link href="/" className="hover:text-[#c5a880] transition">HOME</Link>
        <Link href="/about" className="hover:text-[#c5a880] transition">ABOUT</Link>
        <Link href="/services" className="hover:text-[#c5a880] transition">SERVICES</Link>
        <Link href="/contact" className="hover:text-[#c5a880] transition">CONTACT</Link>
      </nav>

      <div className="hidden md:flex items-center">
        <Link href="/contact" className="bg-[#c5a880] hover:bg-[#b0936b] text-black px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition shadow-md">
          Book Session
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden text-white focus:outline-none p-2"
        aria-label="Toggle Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0b0b0b]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-5 px-6 flex flex-col gap-4 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-white font-medium hover:text-[#c5a880]">HOME</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-white font-medium hover:text-[#c5a880]">ABOUT</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-white font-medium hover:text-[#c5a880]">SERVICES</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-white font-medium hover:text-[#c5a880]">CONTACT</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-[#c5a880] text-black text-center py-3 text-xs font-bold tracking-widest uppercase mt-2">
            Book Session
          </Link>
        </div>
      )}
    </header>
  );
}