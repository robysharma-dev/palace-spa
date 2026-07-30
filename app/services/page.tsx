'use client';

export default function ServicesPage() {
  const servicesList = [
    {
      title: 'Soul Massage',
      image: '/Soul-Massage-2.jpg',
      link: '/services/soul-massage'
    },
    {
      title: 'Turkish Bubble Massage',
      image: '/Turkish-Bubble-Massage-2.jpg',
      link: '/services/turkish-bubble-massage'
    },
    {
      title: 'Chinese Health Care',
      image: '/Chinese-health-Care-rqdubt2gx1xug5vptswmq6kio293sd683vlu28rh8g.jpg',
      link: '/services/chinese-health-care'
    },
    {
      title: 'Chinese Massage',
      image: '/Chinese-Massage-rqhnb9fstwq9yyo1lg909qw7j3qndapfgb97bkugow.jpg',
      link: '/services/chinese-massage'
    },
    {
      title: 'Facial Treatment Essence',
      image: '/spa-massage-young-woman-with-facial-mask-face-indoors-rqaq1amcdo1mtdut9eki9ao6dfa5qiofnarlrimxa8.jpg',
      link: '/services/facial-treatment'
    },
    {
      title: 'Nail Manicure & Varnish',
      image: '/Nail-Manicure-Varnish-1.jpg',
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