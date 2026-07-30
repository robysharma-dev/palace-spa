'use client';

export default function FacialTreatmentPage() {
  return (
    <div className="w-full bg-[#fcfbf9] text-[#2c3e50] selection:bg-[#c5a880] selection:text-white">
      
      {/* Hero Header Section */}
      <section className="relative h-[550px] w-full bg-neutral-900 flex items-center justify-center text-center px-6 overflow-hidden">
        <img 
          src="/spa-massage-young-woman-with-facial-mask-face-indoors-rqaq1amcdo1mtdut9eki9ao6dfa5qiofnarlrimxa8.jpg" 
          alt="Facial Treatment Essence Sanctuary" 
          className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105 transition duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a232a] via-black/40 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-white mt-12">
          <span className="text-[#c5a880] uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">
            Advanced Skin Rejuvenation
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-wide mb-6">
            Facial Treatment Essence
          </h1>
          <p className="text-neutral-300 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Deeply hydrate, firm, and revitalize your complexion with nutrient-rich botanical essences designed for a smooth, youthful, and glowing look.
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
              <h3 className="font-serif text-2xl font-bold text-[#2c3e50] mb-4">Radiant Hydration</h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-light mb-6">
                Infuses deep cellular moisture and active nutrients to restore your skin&apos;s natural elasticity and radiant glow.
              </p>
              
              <div className="border-t border-neutral-100 pt-6 space-y-4 text-sm text-neutral-600">
                <div className="flex justify-between">
                  <span className="font-medium text-[#2c3e50]">Duration:</span>
                  <span>75 Minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#2c3e50]">Skin Type:</span>
                  <span>All Skin Types / Hydrating</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#2c3e50]">Environment:</span>
                  <span>Private Skincare Suite</span>
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
                Nett pricing with zero hidden fees. Performed using premium professional-grade skincare products in Singapore.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Rich Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Introduction Card */}
            <div className="bg-white p-10 md:p-12 border border-neutral-200 shadow-sm rounded-sm">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c3e50] mb-6">
                Unlock Your Skin&apos;s Natural Radiance
              </h2>
              <p className="text-neutral-700 text-base leading-relaxed font-light mb-6">
                Our <strong className="text-[#2c3e50]">Facial Treatment Essence</strong> is a precision skincare ritual curated to combat environmental stress, pollution, and urban fatigue. By delivering concentrated botanical essences and deep-penetrating hydration directly into the skin layers, this treatment smooths texture, tightens pores, and restores a healthy, luminous complexion.
              </p>
              <p className="text-neutral-700 text-base leading-relaxed font-light">
                Whether you are preparing for a special event or simply seeking to reverse dullness and dryness, this facial delivers instant freshness and long-term vitality.
              </p>
            </div>

            {/* Why Choose Our Facial Treatment? (Grid Cards) */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c3e50] mb-8">
                Why Choose Our Facial Treatment Essence?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">01</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Deep Cellular Moisture</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    Penetrates deep beneath the skin surface to lock in moisture, eliminating flaky dryness and rough patches.
                  </p>
                </div>

                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">02</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Firming &amp; Smoothing</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    Boosts natural skin elasticity to help smooth fine lines and refine enlarged pores for a polished finish.
                  </p>
                </div>

                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">03</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Anti-Fatigue Glow</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    Clears dullness caused by lack of sleep and screen glare, instantly brightening your complexion.
                  </p>
                </div>

                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">04</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Gentle &amp; Nourishing</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    Utilizes premium, skin-loving ingredients tailored to calm irritation and soothe stressed facial muscles.
                  </p>
                </div>
              </div>
            </div>

            {/* What to Expect & Perfect For */}
            <div className="bg-white p-10 md:p-12 border border-neutral-200 shadow-sm rounded-sm space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2c3e50] mb-4">What to Expect During Your Session</h2>
                <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-light">
                  Your session begins with a gentle cleansing and exfoliation, followed by the application of our signature vitamin-rich essence mask and light facial massage to enhance nutrient absorption and relaxation.
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-8">
                <h3 className="font-serif text-xl font-bold text-[#2c3e50] mb-4">This Treatment is Perfect For:</h3>
                <ul className="grid md:grid-cols-3 gap-4 text-sm text-neutral-700 font-light">
                  <li className="bg-[#fcfbf9] p-4 border border-neutral-200 rounded-sm">Dehydrated or dull skin needing an instant boost.</li>
                  <li className="bg-[#fcfbf9] p-4 border border-neutral-200 rounded-sm">Professionals wanting to look fresh and groomed.</li>
                  <li className="bg-[#fcfbf9] p-4 border border-neutral-200 rounded-sm">Combating signs of environmental stress and aging.</li>
                </ul>
              </div>
            </div>

            {/* Health Benefits Grid Badges */}
            <div>
              <h3 className="font-serif text-xl font-bold text-[#2c3e50] mb-6">Holistic Wellness Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Intense Skin Hydration &amp; Health</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Always Be Strong &amp; Motivated</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Relieves Facial Tension &amp; Stress</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Restores Youthful Luminosity</span>
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
                  <h4 className="font-serif text-base font-bold text-[#2c3e50] mb-2">Is this facial suitable for men as well?</h4>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    Yes, absolutely! Our facial treatments are tailored for both men and women to combat razor burn, screen fatigue, and environmental dullness.
                  </p>
                </div>

                <div className="bg-white p-6 border border-neutral-200 shadow-sm rounded-sm">
                  <h4 className="font-serif text-base font-bold text-[#2c3e50] mb-2">Will my skin break out after the treatment?</h4>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    Not at all. We use high-quality, hypoallergenic essence formulas designed to nourish and balance your skin without clogging pores.
                  </p>
                </div>

                <div className="bg-white p-6 border border-neutral-200 shadow-sm rounded-sm">
                  <h4 className="font-serif text-base font-bold text-[#2c3e50] mb-2">How soon will I see results?</h4>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    You will notice an instant hydration boost and a healthy, radiant glow right after your very first session.
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