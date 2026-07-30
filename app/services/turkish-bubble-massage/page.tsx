'use client';

export default function TurkishBubbleMassagePage() {
  return (
    <div className="w-full bg-[#fcfbf9] text-[#2c3e50] selection:bg-[#c5a880] selection:text-white">
      
      {/* Hero Header Section */}
      <section className="relative h-[550px] w-full bg-neutral-900 flex items-center justify-center text-center px-6 overflow-hidden">
        <img 
          src="/Turkish-Bubble-Massage-2.jpg" 
          alt="Turkish Bubble Massage Sanctuary" 
          className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105 transition duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a232a] via-black/40 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-white mt-12">
          <span className="text-[#c5a880] uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">
            Traditional Hammam Heritage
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-wide mb-6">
            Turkish Bubble Massage
          </h1>
          <p className="text-neutral-300 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Indulge in rich, warm therapeutic soap bubbles designed to exfoliate your skin, clear congestion, and melt away deep-seated physical tension.
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
              <h3 className="font-serif text-2xl font-bold text-[#2c3e50] mb-4">Pure Exfoliation &amp; Foam</h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-light mb-6">
                Rooted in ancient hammam traditions, this treatment envelops your body in luxurious, warm foam to purify the skin and relax stiff muscles.
              </p>
              
              <div className="border-t border-neutral-100 pt-6 space-y-4 text-sm text-neutral-600">
                <div className="flex justify-between">
                  <span className="font-medium text-[#2c3e50]">Duration:</span>
                  <span>75 Minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#2c3e50]">Intensity:</span>
                  <span>Medium / Cleansing</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#2c3e50]">Environment:</span>
                  <span>Private Heated Suite</span>
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
                Nett pricing with zero hidden fees or surprise charges. Performed by certified expert spa therapists in Singapore.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Rich Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Introduction Card */}
            <div className="bg-white p-10 md:p-12 border border-neutral-200 shadow-sm rounded-sm">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c3e50] mb-6">
                Revitalize Your Skin &amp; Senses
              </h2>
              <p className="text-neutral-700 text-base leading-relaxed font-light mb-6">
                The <strong className="text-[#2c3e50]">Turkish Bubble Massage</strong> brings the legendary cleansing rituals of the Mediterranean directly to Singapore. Utilizing natural olive-oil soaps whipped into warm, voluminous lather, our expert therapists perform rhythmic massage strokes through the foam to gently lift dead skin cells and stimulate superficial circulation.
              </p>
              <p className="text-neutral-700 text-base leading-relaxed font-light">
                It is an exceptional treatment for detoxifying the skin surface, opening pores, and inducing a state of weightless physical relaxation.
              </p>
            </div>

            {/* Why Choose Our Turkish Bubble Massage? (Grid Cards) */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c3e50] mb-8">
                Why Choose Our Turkish Bubble Massage?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">01</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Deep Skin Exfoliation</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    The rich soap lather combined with specialized techniques buffs away impurities, revealing smoother, softer, and glowing skin.
                  </p>
                </div>

                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">02</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Enhanced Circulation</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    Warm foam and rhythmic kneading encourage healthy blood flow across the body, helping deliver vital nutrients to skin cells.
                  </p>
                </div>

                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">03</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Total Muscle Relief</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    The combination of ambient warmth and gentle pressure releases surface muscular knots and relieves daily physical fatigue.
                  </p>
                </div>

                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">04</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Aromatherapeutic Foam</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    Infused with subtle botanical essences that soothe the respiratory senses and calm a racing mind during the session.
                  </p>
                </div>
              </div>
            </div>

            {/* What to Expect & Perfect For */}
            <div className="bg-white p-10 md:p-12 border border-neutral-200 shadow-sm rounded-sm space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2c3e50] mb-4">What to Expect During Your Session</h2>
                <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-light">
                  You will be welcomed into a warm, private therapy room where our specialist generates a cloud of rich, soothing foam. The massage therapist then uses gentle, sweeping motions through the bubbles, ensuring a deeply comforting and immersive cleansing ritual.
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-8">
                <h3 className="font-serif text-xl font-bold text-[#2c3e50] mb-4">This Treatment is Perfect For:</h3>
                <ul className="grid md:grid-cols-3 gap-4 text-sm text-neutral-700 font-light">
                  <li className="bg-[#fcfbf9] p-4 border border-neutral-200 rounded-sm">Dry or dull skin needing deep revival.</li>
                  <li className="bg-[#fcfbf9] p-4 border border-neutral-200 rounded-sm">Gentle relief from mild body stiffness.</li>
                  <li className="bg-[#fcfbf9] p-4 border border-neutral-200 rounded-sm">Unwinding after an exhausting week.</li>
                </ul>
              </div>
            </div>

            {/* Health Benefits Grid Badges */}
            <div>
              <h3 className="font-serif text-xl font-bold text-[#2c3e50] mb-6">Holistic Wellness Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Deep Skin Detoxification</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Always Be Strong &amp; Motivated</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Improves Skin Elasticity &amp; Glow</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Best For Human Health &amp; Relaxation</span>
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
                  <h4 className="font-serif text-base font-bold text-[#2c3e50] mb-2">What makes Turkish Bubble Massage unique?</h4>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    Unlike standard oil massages, this treatment uses warm, voluminous soap foam to cleanse, exfoliate, and relax the body simultaneously, giving you a uniquely refreshing hammam experience.
                  </p>
                </div>

                <div className="bg-white p-6 border border-neutral-200 shadow-sm rounded-sm">
                  <h4 className="font-serif text-base font-bold text-[#2c3e50] mb-2">Will the soap irritate sensitive skin?</h4>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    Not at all. We use premium, skin-friendly natural olive-oil based soaps that are exceptionally mild, nourishing, and suitable for all skin types.
                  </p>
                </div>

                <div className="bg-white p-6 border border-neutral-200 shadow-sm rounded-sm">
                  <h4 className="font-serif text-base font-bold text-[#2c3e50] mb-2">How should I prepare for this session?</h4>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    No special preparation is required. Just arrive a few minutes prior to your appointment time, and our team will take care of everything in your private suite.
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