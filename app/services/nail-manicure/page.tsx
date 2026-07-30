'use client';

export default function NailManicurePage() {
  return (
    <div className="w-full bg-[#fcfbf9] text-[#2c3e50] selection:bg-[#c5a880] selection:text-white">
      
      {/* Hero Header Section */}
      <section className="relative h-[550px] w-full bg-neutral-900 flex items-center justify-center text-center px-6 overflow-hidden">
        <img 
          src="/Nail-Manicure-Varnish-1.jpg" 
          alt="Nail Manicure & Varnish Sanctuary" 
          className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105 transition duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a232a] via-black/40 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-white mt-12">
          <span className="text-[#c5a880] uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">
            Precision Hand Grooming &amp; Polish
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-wide mb-6">
            Nail Manicure &amp; Varnish
          </h1>
          <p className="text-neutral-300 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Elevate your personal grooming with professional nail care, cuticle treatment, and flawless varnish protection for a clean, polished look.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Left Column: Quick Summary & Booking Card */}
          <div className="lg:sticky lg:top-28 space-y-8">
            <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold block mb-2">Session Overview</span>
              <h3 className="font-serif text-2xl font-bold text-[#2c3e50] mb-4">Immaculate Finish</h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-light mb-6">
                Comprehensive nail shaping, conditioning, and professional varnish application designed for the modern gentleman or executive.
              </p>
              
              <div className="border-t border-neutral-100 pt-6 space-y-4 text-sm text-neutral-600">
                <div className="flex justify-between">
                  <span className="font-medium text-[#2c3e50]">Duration:</span>
                  <span>45 Minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#2c3e50]">Service Type:</span>
                  <span>Grooming &amp; Care</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#2c3e50]">Environment:</span>
                  <span>Private Grooming Suite</span>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="/contact" 
                  className="w-full bg-[#c5a880] hover:bg-[#b0936b] text-white py-4 px-6 text-xs font-bold tracking-widest uppercase transition block text-center shadow-md"
                >
                  Book Session Now &rarr;
                </a>
              </div>
            </div>

            {/* Guarantee Badge Box */}
            <div className="bg-[#f5f2eb] p-6 border border-neutral-200 text-center rounded-sm">
              <h4 className="font-serif font-bold text-[#2c3e50] mb-2">The Palace Spa Standard</h4>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Nett pricing with zero hidden fees. Hygienic, sterilized tools and premium products used in Singapore.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Rich Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Introduction Card */}
            <div className="bg-white p-10 md:p-12 border border-neutral-200 shadow-sm rounded-sm">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c3e50] mb-6">
                The Ultimate Standard in Hand Grooming
              </h2>
              <p className="text-neutral-700 text-base leading-relaxed font-light mb-6">
                Hands are one of your most visible professional assets. Our <strong className="text-[#2c3e50]">Nail Manicure &amp; Varnish</strong> treatment offers meticulous nail trimming, precise cuticle conditioning, gentle hand exfoliation, and a high-grade protective varnish finish tailored to your preference.
              </p>
              <p className="text-neutral-700 text-base leading-relaxed font-light">
                Whether you prefer a clean, natural matte finish or a neat protective gloss, this service ensures your hands look impeccably well-maintained and sharp.
              </p>
            </div>

            {/* Why Choose Our Manicure? (Grid Cards) */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c3e50] mb-8">
                Why Choose Our Nail Manicure &amp; Varnish?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">01</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Precision Shaping &amp; Care</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    Expert nail clipping, filing, and buffing to prevent splitting, hangnails, and uneven growth.
                  </p>
                </div>

                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">02</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Healthy Cuticle Maintenance</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    Gentle conditioning treatments that soften and push back cuticles safely, promoting clean nail beds.
                  </p>
                </div>

                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">03</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Protective Varnish Shield</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    Application of high-quality strengthening varnish to guard against daily wear, chipping, and dryness.
                  </p>
                </div>

                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">04</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Strict Hygiene Standards</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    All tools are professionally sterilized before every single session to guarantee absolute safety and cleanliness.
                  </p>
                </div>
              </div>
            </div>

            {/* What to Expect & Perfect For */}
            <div className="bg-white p-10 md:p-12 border border-neutral-200 shadow-sm rounded-sm space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2c3e50] mb-4">What to Expect During Your Session</h2>
                <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-light">
                  Relax in comfort while your hands are treated to a warm soak, professional nail detailing, cuticle care, light hand massage, and a professional-grade varnish layer for a sleek finish.
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-8">
                <h3 className="font-serif text-xl font-bold text-[#2c3e50] mb-4">This Treatment is Perfect For:</h3>
                <ul className="grid md:grid-cols-3 gap-4 text-sm text-neutral-700 font-light">
                  <li className="bg-[#fcfbf9] p-4 border border-neutral-200 rounded-sm">Busy executives needing clean, sharp hand grooming.</li>
                  <li className="bg-[#fcfbf9] p-4 border border-neutral-200 rounded-sm">Maintaining overall hand and nail hygiene.</li>
                  <li className="bg-[#fcfbf9] p-4 border border-neutral-200 rounded-sm">Special events, meetings, or routine self-care.</li>
                </ul>
              </div>
            </div>

            {/* Health Benefits Grid Badges */}
            <div>
              <h3 className="font-serif text-xl font-bold text-[#2c3e50] mb-6">Holistic Wellness Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Improves Hand &amp; Nail Hygiene</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Always Be Strong &amp; Motivated</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Prevents Dry Cuticles &amp; Breakage</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Boosts Professional Presentation</span>
                </div>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c3e50] mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                <div className="bg-white p-6 border border-neutral-200 shadow-sm rounded-sm">
                  <h4 className="font-serif text-base font-bold text-[#2c3e50] mb-2">Do you offer natural/matte finishes for men?</h4>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    Yes, absolutely! We offer clear matte or natural buffing options so your nails look clean, healthy, and professionally groomed without any shine.
                  </p>
                </div>

                <div className="bg-white p-6 border border-neutral-200 shadow-sm rounded-sm">
                  <h4 className="font-serif text-base font-bold text-[#2c3e50] mb-2">How sanitary are the tools used?</h4>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    We adhere to the highest medical-grade sanitation protocols, using individually sterilized tools for every client.
                  </p>
                </div>

                <div className="bg-white p-6 border border-neutral-200 shadow-sm rounded-sm">
                  <h4 className="font-serif text-base font-bold text-[#2c3e50] mb-2">How long does a manicure session take?</h4>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    A standard session takes around 45 minutes, making it quick and convenient for busy schedules.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
}