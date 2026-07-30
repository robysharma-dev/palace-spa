'use client';

export default function ServicesPage() {
  const servicesList = [
    {
      title: 'Soul Massage',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
      link: '/services/soul-massage'
    },
    {
      title: 'Turkish Bubble Massage',
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
      link: '/services/turkish-bubble-massage'
    },
    {
      title: 'Chinese Health Care',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      link: '/services/chinese-health-care'
    },
    {
      title: 'Chinese Massage',
      image: 'https://images.unsplash.com/photo-1512290900722-9a707b82b7db?auto=format&fit=crop&w=800&q=80',
      link: '/services/chinese-massage'
    },
    {
      title: 'Facial Treatment Essence',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      link: '/services/facial-treatment'
    },
    {
      title: 'Nail Manicure & Varnish',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
      link: '/services/nail-manicure'
    }
  ];

  return (
    <div className="w-full bg-[#fcfbf9] py-20 px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#c5a880] uppercase tracking-[0.2em] text-xs font-semibold mb-3 block">
            What We Offer
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#2c3e50] tracking-wide leading-tight">
            Quality Spa &amp; Beauty Treatments
          </h1>
        </div>

        {/* Services Image Grid (Reference Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="relative h-[340px] group overflow-hidden shadow-md rounded-sm bg-neutral-900 border border-neutral-200"
            >
              {/* Background Image with Zoom Effect */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out opacity-90"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating White Content Box at Bottom */}
              <div className="absolute bottom-6 left-6 right-6 bg-white p-6 shadow-lg text-center border-t-2 border-[#c5a880]">
                <h3 className="font-serif text-xl font-bold text-[#2c3e50] mb-3">
                  {service.title}
                </h3>
                <a 
                  href={service.link} 
                  className="text-xs font-bold uppercase tracking-widest text-[#2c3e50] hover:text-[#c5a880] transition inline-block"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}