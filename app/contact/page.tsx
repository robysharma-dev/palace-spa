'use client';

import BookingSection from '@/app/components/BookingSection';

export default function Contact() {
  return (
    <div className="w-full bg-[#fcfbf9] text-[#2c3e50] selection:bg-[#c5a880] selection:text-white">
      
      {/* Hero Header Section */}
      <section className="relative h-[450px] w-full bg-neutral-900 flex items-center justify-center text-center px-6 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80" 
          alt="Palace Spa Contact Sanctuary" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 transition duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a232a] via-black/40 to-transparent"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-white mt-8">
          <span className="text-[#c5a880] uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-wide mb-4">
            VISIT PALACE SPA
          </h1>
          <p className="text-neutral-300 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Central location with absolute discretion and bespoke private luxury suites.
          </p>
        </div>
      </section>

      {/* Main Container - Info & Map */}
      <section className="py-24 px-6 md:px-16 max-w-[1300px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-14 border border-neutral-200 shadow-sm rounded-sm items-stretch">
          
          {/* Left Column: Contact Details */}
          <div className="space-y-10 flex flex-col justify-between py-2">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold block mb-2">Location &amp; Hours</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c3e50] mb-6">
                Your Sanctuary of Peace
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed font-light mb-8">
                We invite you to step away from the urban noise. Reach out or visit our central Singapore sanctuary to reserve your private treatment suite.
              </p>
            </div>

            <div className="space-y-8 border-t border-neutral-100 pt-8">
              <div>
                <h4 className="font-bold text-[#c5a880] text-xs uppercase tracking-[0.2em] mb-2">Our Location</h4>
                <p className="text-neutral-800 text-sm md:text-base font-medium leading-relaxed">
                  116 Middle Rd, #02-01 ICB Enterprise House, Singapore 188972
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#c5a880] text-xs uppercase tracking-[0.2em] mb-2">Operating Hours</h4>
                <p className="text-neutral-800 text-sm md:text-base font-medium">
                  Monday – Sunday: 8:30 AM – 10:30 PM
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#c5a880] text-xs uppercase tracking-[0.2em] mb-2">Appointments &amp; Walk-ins</h4>
                <p className="text-neutral-600 text-sm font-light leading-relaxed">
                  Walk-ins are welcome, or call ahead to reserve your preferred private room slot and therapist.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="tel:+6560000000" 
                className="bg-[#1a232a] hover:bg-[#2c3e50] text-white py-4 px-8 text-xs font-bold tracking-widest uppercase transition inline-block shadow-md"
              >
                Call to Inquire Now
              </a>
            </div>
          </div>

          {/* Right Column: Google Map Embed */}
          <div className="h-[400px] lg:h-full min-h-[350px] border border-neutral-200 rounded-sm overflow-hidden shadow-inner bg-neutral-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.170135797058!2d103.83549575541988!3d1.299268300000021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19e5d56ab7fd%3A0xedc17d7cd73bce16!2sPalace%20Spa!5e0!3m2!1sen!2sus!4v1785429967024!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

        </div>

      </section>

      {/* Booking Section Integration */}
      <BookingSection />

    </div>
  );
}