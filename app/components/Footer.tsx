'use client';

export default function Footer() {
  return (
    <footer className="bg-[#1a232a] text-neutral-300 pt-20 pb-10 px-8 md:px-16 border-t border-neutral-800 w-full">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: About */}
        <div>
          <h3 className="font-serif text-xl font-bold text-white mb-6 tracking-wide border-l-2 border-[#c5a880] pl-3">
            About Palace Spa
          </h3>
          <p className="text-sm leading-relaxed text-neutral-400 mb-6 font-light">
            Providing premium wellness and beauty services in Singapore. We are dedicated to your relaxation, health, and rejuvenation through expert care and traditional techniques.
          </p>
          <div className="text-xs text-[#c5a880] font-semibold tracking-widest uppercase">
            
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="font-serif text-xl font-bold text-white mb-6 tracking-wide border-l-2 border-[#c5a880] pl-3">
            Services
          </h3>
          <ul className="space-y-3 text-sm font-light text-neutral-400">
            <li><a href="/services" className="hover:text-[#c5a880] transition">Traditional Chinese Massage</a></li>
            <li><a href="/services" className="hover:text-[#c5a880] transition">Turkish Bubble Massage</a></li>
            <li><a href="/services" className="hover:text-[#c5a880] transition">Relaxing Soul Massage</a></li>
            <li><a href="/services" className="hover:text-[#c5a880] transition">Professional Manicure & Varnish</a></li>
            <li><a href="/services" className="hover:text-[#c5a880] transition">Facial Treatment Essence</a></li>
            <li><a href="/services" className="hover:text-[#c5a880] transition">Eyebrow Tattoo & Microblading</a></li>
            <li><a href="/services" className="hover:text-[#c5a880] transition">Foot Therapy & Aromatherapy</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="font-serif text-xl font-bold text-white mb-6 tracking-wide border-l-2 border-[#c5a880] pl-3">
            Contact Us
          </h3>
          <div className="space-y-4 text-sm font-light text-neutral-400">
            <div>
              <strong className="text-white block mb-1">Location:</strong>
              <p>116 Middle Rd, #02-01 ICB Enterprise House, Singapore 188972</p>
            </div>
            <div>
              <strong className="text-white block mb-1">Hotline:</strong>
              <p><a href="tel:+6569702729" className="hover:text-[#c5a880] transition">+65 6970 2729</a></p>
            </div>
            <div>
              <strong className="text-white block mb-1">Email:</strong>
              <p><a href="mailto:info@palacespa.sg" className="hover:text-[#c5a880] transition">info@palacespa.sg</a></p>
            </div>
          </div>
        </div>

        {/* Column 4: Newsletter & Socials */}
        <div>
          <h3 className="font-serif text-xl font-bold text-white mb-6 tracking-wide border-l-2 border-[#c5a880] pl-3">
            Newsletter
          </h3>
          <p className="text-sm text-neutral-400 mb-4 font-light">
            Subscribe to receive special offers, exclusive wellness tips, and updates.
          </p>
          
          <form onSubmit={(e) => e.preventDefault()} className="flex mb-6">
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              className="bg-[#11171d] border border-neutral-700 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a880] w-full"
              required
            />
            <button 
              type="submit" 
              className="bg-[#c5a880] hover:bg-[#b0936b] text-white px-5 flex items-center justify-center transition"
              aria-label="Subscribe"
            >
              →
            </button>
          </form>

          {/* Social Media Icons */}
          <div className="flex gap-3">
            <a href="https://www.facebook.com/PalaceSpaSingapore/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#11171d] border border-neutral-700 hover:border-[#c5a880] hover:text-[#c5a880] flex items-center justify-center text-white transition rounded">
              <span className="font-bold text-sm">f</span>
            </a>
            <a href="https://www.tiktok.com/@jane88762722" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#11171d] border border-neutral-700 hover:border-[#c5a880] hover:text-[#c5a880] flex items-center justify-center text-white transition rounded">
              <span className="font-bold text-sm">t</span>
            </a>
            <a href="http://wa.me/6588762722" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#11171d] border border-neutral-700 hover:border-[#c5a880] hover:text-[#c5a880] flex items-center justify-center text-white transition rounded">
              <span className="font-bold text-sm">w</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Sub-Footer */}
      <div className="max-w-[1500px] mx-auto pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
          <a href="/refund" className="hover:text-white transition">Refund Policy</a>
          <a href="/faq" className="hover:text-white transition">FAQ</a>
        </div>
        <div>
          © 2026 Palace Spa Singapore. All Rights Reserved. Designed By <a href="https://www.arisysglobal.xyz/"><b>Arisys Global.</b></a>
        </div>
      </div>
    </footer>
  );
}