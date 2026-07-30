'use client';

export default function SoulMassagePage() {
  return (
    <div className="w-full bg-[#fcfbf9] text-[#2c3e50] selection:bg-[#c5a880] selection:text-white">
      
      {/* Hero Header Section */}
      <section className="relative h-[550px] w-full bg-neutral-900 flex items-center justify-center text-center px-6 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80" 
          alt="Soul Massage Sanctuary" 
          className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105 transition duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a232a] via-black/40 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-white mt-12">
          <span className="text-[#c5a880] uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">
            Signature Therapy Sanctuary
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-wide mb-6">
            Soul Massage (Signature Therapy)
          </h1>
          <p className="text-neutral-300 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            A deep, meditative experience designed to harmonize your body, mind, and spirit through ancient techniques and modern restorative pressure work.
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
              <h3 className="font-serif text-2xl font-bold text-[#2c3e50] mb-4">Total Tranquility</h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-light mb-6">
                More than just a physical massage, Soul Massage targets deep-seated emotional and physical tension, guiding you into a state of total peace.
              </p>
              
              <div className="border-t border-neutral-100 pt-6 space-y-4 text-sm text-neutral-600">
                <div className="flex justify-between">
                  <span className="font-medium text-[#2c3e50]">Duration:</span>
                  <span>90 Minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#2c3e50]">Intensity:</span>
                  <span>Deep / Meditative</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#2c3e50]">Environment:</span>
                  <span>Private Suite</span>
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
                Nett pricing with no hidden fees or GST charges. Conducted by certified professional therapists in Singapore.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Rich Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Introduction Card */}
            <div className="bg-white p-10 md:p-12 border border-neutral-200 shadow-sm rounded-sm">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c3e50] mb-6">
                Reboot Your Inner Energy System
              </h2>
              <p className="text-neutral-700 text-base leading-relaxed font-light mb-6">
                In today&apos;s fast-paced corporate and high-stress environment, mental burnout often manifests physically. Our Soul Massage acts as an intentional sanctuary, utilizing long, rhythmic strokes combined with mindful energy alignment to clear cognitive fog and release trapped muscular tightness.
              </p>
              <p className="text-neutral-700 text-base leading-relaxed font-light">
                Whether you are recovering from heavy workloads or intense physical training, this signature protocol restores your baseline equilibrium.
              </p>
            </div>

            {/* Why Choose Our Soul Massage? (Grid Cards) */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c3e50] mb-8">
                Why Choose Our Soul Massage?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">01</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Deep Emotional Release</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    Our therapists use intuitive, slow-paced techniques to help you let go of daily stresses, heavy workloads, and underlying emotional burdens.
                  </p>
                </div>

                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">02</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Mind-Body Connection</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    A specialized flow that actively calms the central nervous system, helping you disconnect from digital noise and reconnect with yourself.
                  </p>
                </div>

                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">03</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Tailored Energy Flow</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    We focus on releasing blocked energy channels, leaving you feeling centered, deeply grounded, and completely revitalized.
                  </p>
                </div>

                <div className="bg-white p-8 border border-neutral-200 shadow-sm rounded-sm hover:border-[#c5a880] transition duration-300">
                  <div className="text-[#c5a880] text-xl font-bold mb-3">04</div>
                  <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">Pure Sensory Bliss</h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-light">
                    Enhanced with premium therapeutic aromatic oils and curated calming soundscapes to construct an unmatched sanctuary of peace.
                  </p>
                </div>
              </div>
            </div>

            {/* What to Expect & Perfect For */}
            <div className="bg-white p-10 md:p-12 border border-neutral-200 shadow-sm rounded-sm space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2c3e50] mb-4">What to Expect During Your Session</h2>
                <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-light">
                  In this session, you will experience a sequence of fluid, rhythmic strokes combined with guided mindful breathing techniques. This treatment is profoundly restorative and provides an absolute spiritual and physical reset.
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-8">
                <h3 className="font-serif text-xl font-bold text-[#2c3e50] mb-4">This Treatment is Perfect For:</h3>
                <ul className="grid md:grid-cols-3 gap-4 text-sm text-neutral-700 font-light">
                  <li className="bg-[#fcfbf9] p-4 border border-neutral-200 rounded-sm">Mental exhaustion and executive burnout.</li>
                  <li className="bg-[#fcfbf9] p-4 border border-neutral-200 rounded-sm">Achieving deep meditative tranquility.</li>
                  <li className="bg-[#fcfbf9] p-4 border border-neutral-200 rounded-sm">Recovery from intense high-stress cycles.</li>
                </ul>
              </div>
            </div>

            {/* Health Benefits Grid Badges */}
            <div>
              <h3 className="font-serif text-xl font-bold text-[#2c3e50] mb-6">Holistic Wellness Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Best For Human Health &amp; Immunity</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Always Be Strong &amp; Motivated</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Optimizes Nervous System Balance</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-neutral-200 shadow-sm rounded-sm">
                  <span className="w-6 h-6 rounded-full bg-[#f5f2eb] text-[#c5a880] flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-medium text-neutral-700">Enhances Sleep Quality &amp; Focus</span>
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
                  <h4 className="font-serif text-base font-bold text-[#2c3e50] mb-2">Is Soul Massage different from a standard massage?</h4>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    Yes. While a standard massage focuses primarily on superficial muscle knots, Soul Massage integrates energetic, rhythmic, and meditative elements to soothe both the physical frame and psychological state simultaneously.
                  </p>
                </div>

                <div className="bg-white p-6 border border-neutral-200 shadow-sm rounded-sm">
                  <h4 className="font-serif text-base font-bold text-[#2c3e50] mb-2">Is this massage suitable for beginners?</h4>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    Absolutely. It is an exceptionally gentle, nurturing, and customized experience, making it perfect for anyone looking to try something deeply restorative.
                  </p>
                </div>

                <div className="bg-white p-6 border border-neutral-200 shadow-sm rounded-sm">
                  <h4 className="font-serif text-base font-bold text-[#2c3e50] mb-2">How will I feel after the session?</h4>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    Most clients report feeling profoundly calm, clear-headed, and deeply rested. It is routinely described as feeling fully recharged from within.
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