'use client';

export default function AboutPage() {
  const services = [
    {
      title: 'Chinese Massage',
      description: 'Experience deep relaxation with our traditional Chinese massage designed to relieve stress.',
      icon: '👤',
      link: '/services/chinese-massage'
    },
    {
      title: 'Chinese Health Care',
      description: 'Blend traditional wisdom with modern wellness to restore your energy and long-term health.',
      icon: '☯️',
      link: '/services/chinese-health-care'
    },
    {
      title: 'Turkish Bubble Massage',
      description: 'Indulge in rich, soothing bubbles to exfoliate your skin and melt away deep tension.',
      icon: '🫧',
      link: '/services/turkish-bubble-massage'
    },
    {
      title: 'Soul Massage',
      description: 'Harmonize mind, body, and spirit with gentle, rhythmic techniques for deep calm.',
      icon: '🤍',
      link: '/services/soul-massage'
    },
    {
      title: 'Nail Manicure & Varnish',
      description: 'Professional shaping and premium varnish services for a vibrant, groomed finish.',
      icon: '💅',
      link: '/services/nail-manicure'
    },
    {
      title: 'Facial Treatment Essence',
      description: 'Deeply hydrate and revitalize your complexion for a smooth, firm, and refreshed look.',
      icon: '💧',
      link: '/services/facial-treatment'
    }
  ];

  return (
    <div className="w-full bg-[#fcfbf9]">
      
      {/* 1. About Us / Philosophy Section with Center Heading & Image */}
      <section className="py-20 px-8 md:px-16 w-full bg-[#fcfbf9]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Who We Are, Centered Heading & Spa Image */}
          <div className="sticky top-20 flex flex-col items-center text-center">
            <span className="text-[#c5a880] uppercase tracking-[0.2em] text-xs font-semibold mb-2 block opacity-70">
              Who We Are
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2c3e50] tracking-wide leading-tight mb-8">
              Quality & Natural<br />
              <span className="block text-center mt-1">Spa</span>
            </h2>

            {/* Spa Atmosphere Image */}
            <div className="w-full h-[320px] md:h-[380px] border border-neutral-200 overflow-hidden shadow-md rounded-sm mt-2">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" 
                alt="Luxury Spa Sanctuary" 
                className="w-full h-full object-cover hover:scale-105 transition duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* Right Column: Detailed Information */}
          <div className="text-neutral-600 text-sm leading-relaxed space-y-12 font-light">
            <p>
              Welcome to <strong>Palace Spa</strong>, your premier sanctuary for relaxation and holistic wellness in the heart of Singapore. Located conveniently at 116 Middle Road, our spa is designed to be your ultimate escape from the hustle and bustle of city life.
            </p>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#2c3e50] mb-4">Our Philosophy</h3>
              <p>
                At Palace Spa, we believe that wellness is a journey, not a destination. Our mission is to restore balance to your body, mind, and spirit through a blend of traditional techniques and modern therapeutic practices. Whether you are seeking relief from muscle tension, a rejuvenating glow for your skin, or simply a peaceful moment of solitude, our expert therapists are dedicated to providing a personalized experience tailored to your specific needs.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#2c3e50] mb-6">Why Choose Palace Spa?</h3>
              <ul className="space-y-5 list-none pl-0">
                <li>
                  <strong className="text-[#2c3e50]">Professional Expertise:</strong> Our highly skilled therapists are trained in a variety of techniques, ranging from therapeutic Chinese massage to revitalizing Turkish bubble massage, ensuring that you receive the highest standard of care.
                </li>
                <li>
                  <strong className="text-[#2c3e50]">Holistic Approach:</strong> We offer a diverse menu of services, including Lymphatic Massage, Hot Stone therapy, and professional skincare treatments, designed to promote long-term well-being and rejuvenation.
                </li>
                <li>
                  <strong className="text-[#2c3e50]">A Sanctuary in the City:</strong> Step into our calming environment, specifically designed to soothe your senses from the moment you walk through our doors.
                </li>
                <li>
                  <strong className="text-[#2c3e50]">Transparent Pricing:</strong> We believe in honest service. All our prices are nett, with no hidden costs or surprise GST charges.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#2c3e50] mb-4">Our Commitment to You</h3>
              <p>
                We pride ourselves on maintaining the highest levels of hygiene, comfort, and professionalism. From our signature Soul Massage to our precise facial treatments and beauty services, every aspect of our facility is curated to ensure you leave feeling refreshed, revitalized, and ready to take on the world.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Popular Services Section with individual links */}
      <section className="py-16 px-8 md:px-16 bg-white border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto text-center">
          
          <div className="mb-12">
            <span className="text-[#c5a880] uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">
              Our Services
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#2c3e50] tracking-wide">
              Popular Services We Provide For Customers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {services.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#fcfbf9] p-8 border border-neutral-200 shadow-sm hover:border-[#c5a880] transition duration-300 flex flex-col items-center text-center w-full max-w-[380px]"
              >
                <div className="w-14 h-14 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-xl mb-4 text-[#c5a880]">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2c3e50] mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-xs leading-relaxed mb-4 font-light">
                  {item.description}
                </p>
                <a 
                  href={item.link} 
                  className="text-[11px] font-bold tracking-widest uppercase text-[#2c3e50] hover:text-[#c5a880] transition mt-auto"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}