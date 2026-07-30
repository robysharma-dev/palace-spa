export default function Contact() {
  return (
    <div className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-[#c5a880] uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">Get In Touch</span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c3e50] tracking-wide mb-3">
          VISIT PALACE SPA
        </h2>
        <p className="text-neutral-600 text-sm">Central location with absolute discretion.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 border border-neutral-200 shadow-sm">
        <div className="space-y-8">
          <div>
            <h4 className="font-bold text-[#2c3e50] text-base tracking-wider mb-2 text-[#c5a880]">LOCATION</h4>
            <p className="text-neutral-700 text-sm">116 Middle Rd, #02-01 ICB Enterprise House, Singapore 188972</p>
          </div>
          <div>
            <h4 className="font-bold text-[#2c3e50] text-base tracking-wider mb-2 text-[#c5a880]">HOURS</h4>
            <p className="text-neutral-700 text-sm">Monday – Sunday: 8:30 AM – 10:30 PM</p>
          </div>
          <div>
            <h4 className="font-bold text-[#2c3e50] text-base tracking-wider mb-2 text-[#c5a880]">APPOINTMENTS</h4>
            <p className="text-neutral-700 text-sm">Walk-ins welcome, or call ahead to reserve your preferred private room slot.</p>
          </div>
        </div>
        <div className="h-[350px] md:h-full min-h-[300px] border border-neutral-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8166567169055!2d103.852445!3d1.298285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a5bed7bdff%3A0xedc713x9we0!2s116%20Middle%20Rd%2C%20%2302-01%20ICB%20Enterprise%20House%2C%20Singapore%20188972!5e0!3m2!1sen!2ssg!4v1650000000000!5m2!1sen!2ssg" 
            className="w-full h-full border-0" 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}