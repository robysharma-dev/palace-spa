'use client';

import { useState } from 'react';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    timeSlot: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Time slots jo client select karega
  const timeSlots = [
    '10:00 AM - 11:30 AM',
    '12:00 PM - 01:30 PM',
    '02:00 PM - 03:30 PM',
    '04:00 PM - 05:30 PM',
    '06:00 PM - 07:30 PM',
    '08:00 PM - 09:30 PM'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Yaha apna Google Apps Script ka Web App URL daal dena jo Step 2 me mila tha
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw2EXKIMOFMPA_SnShQNW7Xb6gxD_eT9r5QSyjIb22JzKGzlzIVdIy-H1VlLfmC4r-j/exec';

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: '', date: '', timeSlot: '' });
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-28 px-8 md:px-16 w-full bg-[#fcfbf9] border-b border-neutral-200">
      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Title */}
        <div>
          <span className="text-[#c5a880] uppercase tracking-[0.2em] text-xs font-semibold mb-3 block">
            Make Appointment
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#2c3e50] tracking-wide mb-6 leading-tight">
            Get Treatment Booking Seat
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Secure your preferred timing and therapist in advance for an uninterrupted luxury experience at Palace Spa Singapore.
          </p>
          <div className="space-y-2 text-sm text-neutral-700">
            <p>✓ Absolute Discretion & Privacy</p>
            <p>✓ Instant Confirmation Support</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-8 md:p-12 border border-neutral-200 shadow-sm">
          {success ? (
            <div className="text-center py-12">
              <h3 className="font-serif text-2xl font-bold text-[#2c3e50] mb-3">Booking Confirmed!</h3>
              <p className="text-neutral-600 text-sm mb-6">Thank you. Our team has received your appointment request and notified the management.</p>
              <button 
                onClick={() => setSuccess(false)}
                className="bg-[#c5a880] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest"
              >
                Book Another Session
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#fcfbf9] border border-neutral-300 px-4 py-3.5 text-sm text-[#2c3e50] focus:outline-none focus:border-[#c5a880]"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#fcfbf9] border border-neutral-300 px-4 py-3.5 text-sm text-[#2c3e50] focus:outline-none focus:border-[#c5a880]"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#fcfbf9] border border-neutral-300 px-4 py-3.5 text-sm text-[#2c3e50] focus:outline-none focus:border-[#c5a880]"
                  required
                />
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-[#fcfbf9] border border-neutral-300 px-4 py-3.5 text-sm text-neutral-600 focus:outline-none focus:border-[#c5a880]"
                  required
                >
                  <option value="" disabled>Select Services</option>
                  <option value="Chinese Massage">Chinese Massage</option>
                  <option value="Facial Treatment Essence">Facial Treatment Essence</option>
                  <option value="Chinese Health Care">Chinese Health Care</option>
                  <option value="Turkish Bubble Massage">Turkish Bubble Massage</option>
                  <option value="Foot Massage">Foot Massage</option>
                  <option value="Soul Massage">Soul Massage</option>
                  <option value="Aromatherapy Hot Oil">Aromatherapy Hot Oil</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="date" 
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-[#fcfbf9] border border-neutral-300 px-4 py-3.5 text-sm text-neutral-600 focus:outline-none focus:border-[#c5a880]"
                  required
                />
                <select 
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                  className="w-full bg-[#fcfbf9] border border-neutral-300 px-4 py-3.5 text-sm text-neutral-600 focus:outline-none focus:border-[#c5a880]"
                  required
                >
                  <option value="" disabled>Select Time Slot</option>
                  {timeSlots.map((slot, idx) => (
                    <option key={idx} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#557c83] hover:bg-[#436368] text-white py-4 text-xs font-bold tracking-widest uppercase transition duration-300 shadow-md disabled:opacity-50"
              >
                {loading ? 'PROCESSING...' : 'MAKE APPOINTMENT'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}