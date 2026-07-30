'use client';

import { useEffect } from 'react';

export default function TestimonialSection() {
  const googleMapUrl = "https://maps.app.goo.gl/7ErSU6HaPjUQ5fo78";

  useEffect(() => {
    // Check if script is already added to avoid duplicates
    const existingScript = document.getElementById('trustindex-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'trustindex-script';
      script.src = 'https://cdn.trustindex.io/loader.js?8ad7aec789500573d0869beac1e';
      script.async = true;
      script.defer = true;
      
      // Append script inside the widget container div instead of document.body
      const container = document.getElementById('trustindex-widget-container');
      if (container) {
        container.appendChild(script);
      }
    }
  }, []);

  return (
    <section className="py-28 px-8 md:px-16 w-full bg-white border-b border-neutral-200">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-[#c5a880] uppercase tracking-[0.2em] text-xs font-semibold mb-3 block">
              Verified Feedback
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2c3e50] tracking-wide">
              Trusted Google Reviews
            </h2>
          </div>

          {/* Google Maps Link Button */}
          <a 
            href={googleMapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#fcfbf9] border border-neutral-200 px-6 py-3 shadow-sm hover:border-[#c5a880] transition group cursor-pointer"
          >
            <div className="text-2xl font-bold text-[#2c3e50] group-hover:text-[#c5a880] transition">4.1</div>
            <div>
              <div className="text-amber-500 text-sm tracking-widest">★★★★★</div>
              <p className="text-xs text-neutral-500 font-medium">View on Google Maps →</p>
            </div>
            <div className="ml-3 pl-3 border-l border-neutral-300">
              <span className="font-bold text-lg text-blue-600">G</span>
              <span className="font-bold text-lg text-red-500">o</span>
              <span className="font-bold text-lg text-amber-500">o</span>
              <span className="font-bold text-lg text-blue-600">g</span>
              <span className="font-bold text-lg text-green-600">l</span>
              <span className="font-bold text-lg text-red-500">e</span>
            </div>
          </a>
        </div>

        {/* Trustindex Live Widget Container (Targeted ID) */}
        <div id="trustindex-widget-container" className="w-full min-h-[300px]">
          <div data-widget-id="8ad7aec789500573d0869beac1e"></div>
        </div>

      </div>
    </section>
  );
}