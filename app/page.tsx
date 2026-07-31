'use client';

import { useState, useEffect } from 'react';
import PricingSection from './components/PricingSection';
import BookingSection from './components/BookingSection';
import TestimonialSection from './components/TestimonialSection';
import GallerySection from './components/GallerySection';

const slides = [
  {
    image: '/slide1.jpg',
    subtitle: 'THE SHARMA GLOBAL FOUNDATION RECOMMENDED',
    title: 'Organic Fresh Spa Treatment',
    desc: 'Immerse your senses in pure organic luxury designed to melt away deep-seated tension.',
    features: ['Professional Female Massage', 'Premium Oils & Care']
  },
  {
    image: '/slide2.jpg',
    subtitle: 'SINGAPORE’S PREMIER SANCTUARY',
    title: 'Revitalizing Foot & Leg Therapy',
    desc: 'Targeted pressure techniques to revive tired legs and restore natural balance.',
    features: ['Deep Lower Body Relief', 'Soothing Reflexology']
  },
  {
    image: '/slide3.jpeg',
    subtitle: 'EXECUTIVE STRESS RELIEF',
    title: 'Head & Temple Relaxation',
    desc: 'Clear mental exhaustion and dissolve screen fatigue with our bespoke head therapy.',
    features: ['Headache Relief', 'Mental Clarity']
  },
  {
    image: '/slide4.jpeg',
    subtitle: 'PREMIUM RECOVERY EXPERIENCE',
    title: 'Shoulder & Neck Rejuvenation',
    desc: 'High-impact localized relief built specifically for professionals with stiff upper bodies.',
    features: ['Muscle Recovery', 'Posture Stress Release']
  }
];

const premiumServices = [
  { num: '01', title: 'Soul & Deep Tissue Massage', desc: 'Advanced techniques tailored to release chronic muscle knots.' },
  { num: '02', title: 'Executive Aromatherapy Oil Therapy', desc: 'Organic essential oils to clear mental fog and lower stress.' },
  { num: '03', title: 'Turkish Bubble & Steam Ritual', desc: 'Deep cleansing hydro-therapy for absolute physical rejuvenation.' },
  { num: '04', title: 'Head, Neck & Shoulder Relief', desc: 'High-impact targeted relief for high-performing professionals.' }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#fcfbf9] text-[#2c3e50] overflow-hidden w-full">
      
      {/* Hero Section */}
      <section className="relative h-[480px] md:h-[85vh] w-full flex items-end justify-start text-white overflow-hidden px-5 md:px-16 pb-10 md:pb-16">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent"></div>
          </div>
        ))}

        {/* Text hidden on mobile (hidden), visible on desktop (md:block) */}
        <div className="relative z-10 max-w-xl text-left hidden md:block">
          <span className="text-[#e2cba8] uppercase tracking-[0.2em] text-xs font-semibold mb-1 block drop-shadow">
            {slides[currentSlide].subtitle}
          </span>
          <h1 className="font-serif text-5xl font-bold mb-4 tracking-wide text-white drop-shadow-md leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base font-light mb-6 text-neutral-200 tracking-wide drop-shadow leading-relaxed">
            {slides[currentSlide].desc}
          </p>

          <div className="grid grid-cols-2 gap-2 mb-6 text-sm text-neutral-200">
            {slides[currentSlide].features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="text-[#e2cba8] font-bold">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons visible on ALL screens (Mobile + Desktop) */}
        <div className="relative z-10 flex flex-row gap-2 w-full md:w-auto">
          <a href="/contact" className="bg-[#c5a880] hover:bg-[#b0936b] text-white px-4 py-2.5 text-[10px] md:text-xs font-bold tracking-widest uppercase transition shadow-lg text-center flex-1 md:flex-none">
            Explore
          </a>
          <a href="/services" className="border border-white hover:bg-white hover:text-black text-white px-4 py-2.5 text-[10px] md:text-xs font-bold tracking-widest uppercase transition text-center flex-1 md:flex-none">
            Services
          </a>
        </div>

        <div className="absolute bottom-3 right-5 md:left-16 md:right-auto z-20 flex gap-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-4 bg-[#c5a880]' : 'w-1.5 bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-16 w-full bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-[1500px] mx-auto">
          <div>
            <span className="text-[#c5a880] uppercase tracking-[0.2em] text-xs font-semibold mb-3 block">
              Tailored Wellness Offerings
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#2c3e50] tracking-wide mb-6 leading-tight">
              Engineered For Complete Restoration
            </h2>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8">
              At Palace Spa Singapore, we combine professional therapeutic expertise with absolute discretion. Every session is structured to flush out cortisol, relieve deep muscle stiffness, and reset your mental performance.
            </p>
            <a href="/services" className="inline-block bg-[#2c3e50] text-white hover:bg-[#c5a880] px-8 py-4 text-xs font-bold tracking-widest uppercase transition duration-300 shadow-md">
              View All Treatments &amp; Pricing →
            </a>
          </div>

          <div className="space-y-4">
            {premiumServices.map((service, index) => (
              <div 
                key={index}
                className="group p-6 bg-white border border-neutral-200 hover:border-[#c5a880] transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span className="font-serif text-xl font-bold text-[#c5a880]">{service.num}</span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#2c3e50] group-hover:text-[#c5a880] transition duration-300">
                      {service.title}
                    </h3>
                    <p className="text-neutral-500 text-xs mt-1">{service.desc}</p>
                  </div>
                </div>
                <span className="text-neutral-400 group-hover:text-[#c5a880] group-hover:translate-x-1 transition duration-300 text-lg">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Who We Are" Section */}
      <section className="py-24 px-6 md:px-16 w-full bg-[#fcfbf9] border-y border-neutral-200">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1500px] mx-auto">
          <div className="relative h-[350px] md:h-[450px] shadow-lg overflow-hidden border border-neutral-200">
            <img 
              src="/about-stone.png" 
              alt="Palace Spa Hot Stone Therapy" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-[#c5a880] uppercase tracking-[0.2em] text-xs font-semibold mb-3 block">
              Who We Are
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#2c3e50] tracking-wide mb-6 leading-tight">
              Professional Spa &amp; Massage Services
            </h2>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8">
              At Palace Spa Singapore, we deliver premium massage and wellness experiences in a private, clean, and relaxing environment. Our experienced therapists focus on relieving stress, easing muscle tension, and helping you restore both body and mind with professional care.
            </p>
            <a href="/contact" className="inline-block bg-[#2c3e50] hover:bg-[#c5a880] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition shadow-md">
              READ MORE →
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Menu Section Component */}
      <PricingSection />

      {/* Booking Form Section Component */}
      <BookingSection />

      {/* Testimonial / Google Reviews Section Component */}
      <TestimonialSection />

      {/* Gallery Section Component */}
      <GallerySection />

    </div>
  );
}