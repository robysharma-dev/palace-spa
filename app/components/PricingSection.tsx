export default function PricingSection() {
  const pricingMenus = [
    // Maine "Starting From" ko hata kar price se pehle "From" laga diya hai
    { title: 'Chinese Massage', price: 'From $55', desc: 'Designed to relieve stress and ease muscle tension.' },
    { title: 'Facial Treatment Essence', price: 'From $168', desc: 'Unlock your skin\'s natural radiance with our premium Facial Treatment Essence.' },
    { title: 'Chinese Health Care', price: 'From $89', desc: 'By blending traditional wisdom with modern wellness practices.' },
    { title: 'Eyebrow Tattoo', price: '$688', desc: 'Perfectly shaped, natural-looking eyebrows daily.' }, // Fixed price, no 'From' needed here
    { title: 'Turkish Bubble Massage', price: 'From $105', desc: 'Indulge in the ultimate luxury with our Turkish Bubble Massage.' },
    { title: 'Foot Massage', price: 'From $45', desc: 'Relieve stress with soothing foot therapy.' },
    { title: 'Soul Massage', price: 'From $138', desc: 'Reconnect with your inner peace through our specialized Soul Massage.' },
    { title: 'Facial', price: '$88', desc: 'Reveal your skin\'s natural, healthy glow.' }, // Fixed price
    { title: 'Nail Manicure & Varnish', price: 'From $68', desc: 'Elevate your style with our expert manicure and premium varnish services.' },
    { title: 'Aromatherapy Hot Oil', price: 'From $89', desc: 'Deeply relax with soothing aromatic oils.' }
  ];

  return (
    <section className="py-28 px-8 md:px-16 w-full bg-white border-b border-neutral-200">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-[#c5a880] uppercase tracking-[0.2em] text-xs font-semibold mb-3 block">
            Pricing Package
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#2c3e50] tracking-wide">
            Spa & Beauty Treatments
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pricingMenus.map((item, index) => (
            <div 
              key={index} 
              className="p-8 bg-white border border-neutral-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#2c3e50]">
                    {item.title}
                  </h3>
                  {/* Price styled to stand out with a slightly different tone */}
                  <span className="font-serif text-lg md:text-xl font-semibold text-[#c5a880]/90 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}