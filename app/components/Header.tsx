'use client';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <div className="text-2xl font-serif font-bold text-[#2c3e50] tracking-widest">
        PALACE <span className="text-[#c5a880]">SPA</span>
      </div>
      <nav className="hidden md:flex gap-8 font-medium text-sm tracking-wide text-neutral-700">
        <a href="/" className="hover:text-[#c5a880] transition">HOME</a>
        <a href="/about" className="hover:text-[#c5a880] transition">ABOUT</a>
        <a href="/services" className="hover:text-[#c5a880] transition">SERVICES</a>
        <a href="/contact" className="hover:text-[#c5a880] transition">CONTACT</a>
      </nav>
      <a href="/contact" className="bg-[#c5a880] hover:bg-[#b0936b] text-white px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition shadow-md">
        Book Session
      </a>
    </header>
  );
}