'use client';

export default function GallerySection() {
  const galleryImages = [
    { src: '/1.jpg', alt: 'Spa Lounge Seating' },
    { src: '/2.jpg', alt: 'Traditional Chairs Setup' },
    { src: '/3.jpg', alt: 'Couple Massage Room with Roses' },
    { src: '/4.jpg', alt: 'Relaxing Spa Hallway' },
    { src: '/5.jpg', alt: 'Reception Counter' },
    { src: '/6.jpg', alt: 'Private Treatment Room' },
    { src: '/7.jpg', alt: 'Reflexology Foot Chart' },
    { src: '/8.jpg', alt: 'Candlelight Therapy Room' },
    { src: '/9.jpg', alt: 'Interior Decor' },
    { src: '/10.jpg', alt: 'Massage Table Setup' },
    { src: '/11.jpeg', alt: 'Massage Table Setup' },
    { src: '/12.jpeg', alt: 'Massage Table Setup' },
    { src: '/13.jpeg', alt: 'Massage Table Setup' },
    { src: '/14.jpeg', alt: 'Massage Table Setup' },
    { src: '/15.jpeg', alt: 'Massage Table Setup' },
    { src: '/16.jpeg', alt: 'Massage Table Setup' },
    { src: '/17.jpeg', alt: 'Massage Table Setup' },
    { src: '/18.jpg', alt: 'Massage Table Setup' },
    { src: '/19.jpg', alt: 'Massage Table Setup' },
    { src: '/20.jpg', alt: 'Massage Table Setup' }
  ];

  return (
    <section className="py-24 px-8 md:px-16 w-full bg-[#557c83]">
      <div className="max-w-[1500px] mx-auto text-center">
        
        {/* Section Heading with Updated Middle Road Address */}
        <div className="mb-16">
          <span className="text-[#f5f2eb] uppercase tracking-[0.2em] text-xs font-semibold mb-3 block opacity-80">
            Our Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-wide leading-tight mb-3">
            Take A Look Our Gallery
          </h2>
          <p className="text-white/95 text-xs md:text-sm font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            📍 Palace Spa Singapore | 116 Middle Rd, #02-01 ICB Enterprise House, Singapore 188972
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              className="relative h-[220px] md:h-[250px] overflow-hidden rounded-sm shadow-md group border border-white/20 bg-neutral-900"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-4">
                <span className="text-white text-xs font-medium tracking-wider text-center uppercase bg-black/60 px-3 py-1.5 rounded">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}