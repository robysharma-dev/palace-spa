'use client';

export default function ChineseHealthCarePage() {
  return (
    <div className="w-full bg-[#fcfbf9] text-[#2c3e50] selection:bg-[#c5a880] selection:text-white">
      
      {/* Hero Header Section */}
      <section className="relative h-[550px] w-full bg-neutral-900 flex items-center justify-center text-center px-6 overflow-hidden">
        <img 
          src="/Chinese-health-Care-rqdubt2gx1xug5vptswmq6kio293sd683vlu28rh8g.jpg" 
          alt="Chinese Health Care Spa Sanctuary" 
          className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105 transition duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a232a] via-black/40 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-white mt-12">
          <span className="text-[#c5a880] uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">
            Traditional Wellness &amp; Vitality
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-wide mb-6">
            Chinese Health Care
          </h1>
          <p className="text-neutral-300 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Blend ancient Eastern health wisdom with modern therapeutic relaxation to restore your internal energy, improve circulation, and enhance long-term vitality.
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
              <h3 className="font-serif text-2xl font-bold text-[#2c3e50] mb-4">Holistic Life Force</h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-light mb-6">
                Focused on meridian balancing and natural wellness techniques to relieve systemic fatigue and boost overall body function.
              </p>
              
              <div className="border-t border-neutral-100 pt-6 space-y-4 text-sm text-neutral-600">
                <div className="flex justify-between">
                  <span className="font-medium text-[#2c3e50]">Duration:</span>
                  <span>90 Minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#2c3e50]">Focus:</span>
                  <span>Meridian &amp; Qi Balancing</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#2c3e50]">Environment:</span>
                  <span>Private Calm Suite</span>
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
                Transparent nett pricing with no hidden charges. Expert wellness therapy tailored for modern lifestyles in Singapore.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Rich Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Introduction Card */}
            <div className="bg-white p-10 md:p-12 border border-neutral-200 shadow-sm rounded-sm">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c3e50] mb-6">
                Restore Natural Harmony &amp; Stamina
              </h2>
              <p className="text-neutral-700 text-base leading-relaxed font-light mb-6">
                Our <strong className="text-[#2c3e50]">Chinese Health Care</strong> therapy is a specialized non-medical, spa-based wellness ritual designed to target the body&apos;s natural energy pathways (meridians). Drawing from centuries-old heritage practices, this treatment helps unblock stagnant energy, reduces chronic physical sluggishness, and promotes deep physical rejuvenation.
              </p>
              <p className="text-neutral-700 text-base leading-relaxed font-light">
                It is an ideal session for individuals looking to counteract the wear-and-tear of high-pressure routines through time-tested holistic care.
              </p>
            </div>

            {/* Why Choose Our Chinese Health Care? (Grid Cards) */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c3e50] mb-8">
                Why Choose Our Chinese Health Care?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">01</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Meridian Path Harmonization</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    Gentle yet precise pressure techniques target key points across the body to clear blockages and restore smooth internal energy flow.
                  </p>
                </div>

                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">02</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Systemic Fatigue Recovery</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    Combats deep-seated tiredness caused by lack of sleep, heavy work schedules, and physical exhaustion.
                  </p>
                </div>

                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">03</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Enhanced Blood Circulation</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    Stimulates micro-circulation across muscles and joints, helping relieve stiffness and improve overall body flexibility.
                  </p>
                </div>

                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">04</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Immunity &amp; Wellness Boost</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    Supports long-term physical resilience by encouraging natural detoxification and deep nervous system relaxation.
                  </p>
                </div>
              </div>
            </div>

            {/* What to Expect & Perfect For */}
            <div className="bg-white p-10 md:p-12 border border-neutral-200 shadow-sm rounded-sm space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2c3e50] mb-4">What to Expect During Your Session</h2>
                <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-light">
                  Your session takes place in a tranquil, climate-controlled suite. Our skilled wellness therapists use specialized palm and thumb pressure techniques aligned with traditional methodologies to release tension from key muscular and energetic zones.
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-8">
                <h3 className="font-serif text-xl font-bold text-[#2c3e50] mb-4">This Treatment is Perfect For:</h3>
                <ul className="grid md:grid-cols-3 gap-4 text-sm text-neutral-700 font-light">
                  <li className="bg-[#fcfbf9] p-4 border border-neutral-200 rounded-sm">Low energy and chronic physical lethargy.</li>
                  <li className="bg-[#fcfbf9] p-4 border border-neutral-200 rounded-sm">Desk-bound professionals with stiff joints.</li>
                  <li className="bg-[#fcfbf9] p-4 border border-neutral-200 rounded-sm">Anyone seeking traditional restorative care.</li>
                </ul>
              </div>
            </div>

            {/* Health Benefits Grid Badges */}
            <div>
              <h3 className="font-serif text-xl font-bold text-[#2c3e50] mb-6">Holistic Wellness Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Best For Human Health &amp; Vitality</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Always Be Strong &amp; Motivated</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Improves Joint Mobility &amp; Posture</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Balances Daily Physical Energy</span>
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
                  <h4 className="font-serif text-base font-bold text-[#2c3e50] mb-2">Is this a medical treatment or a spa service?</h4>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    This is a pure spa and wellness therapy designed for relaxation, stress relief, and energy balancing. It does not involve medical diagnosis or hospital treatments.
                  </p>
                </div>

                <div className="bg-white p-6 border border-neutral-200 shadow-sm rounded-sm">
                  <h4 className="font-serif text-base font-bold text-[#2c3e50] mb-2">How does Chinese Health Care differ from standard massages?</h4>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    While standard massages focus heavily on relaxing surface muscles, this therapy emphasizes traditional meridian alignment to stimulate inner vitality and overall body stamina.
                  </p>
                </div>

                <div className="bg-white p-6 border border-neutral-200 shadow-sm rounded-sm">
                  <h4 className="font-serif text-base font-bold text-[#2c3e50] mb-2">How often should I book this session?</h4>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    For optimal maintenance of energy levels and stress control, booking a session bi-weekly or monthly is highly recommended.
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