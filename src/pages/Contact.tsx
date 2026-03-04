import React from 'react';
import { MessageSquare, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-20 py-12 lg:py-24 w-full">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-16 mb-32">
        <div className="flex flex-col gap-6 max-w-xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 text-white text-[10px] tracking-[0.2em] uppercase w-fit">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            Concierge Available
          </div>
          <h1 className="text-white text-5xl lg:text-7xl font-serif leading-[1.1]">
            Private <span className="italic font-light text-primary">Appointments</span>
          </h1>
          <p className="text-white/60 text-sm font-light max-w-md leading-relaxed tracking-wide">
            We invite you to experience our collection in person or connect with our dedicated styling team for personalized assistance.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="#"
              className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-primary transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Concierge
            </a>
            <div className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-xs tracking-[0.2em] uppercase">
              <Mail className="text-primary w-4 h-4" />
              <span>atelier@ivana.design</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-[450px]">
          <div className="w-full aspect-[4/5] overflow-hidden bg-white/5">
            <img
              src="https://picsum.photos/seed/atelier/800/1000"
              alt="Ivana Atelier"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form Section */}
        <div className="bg-white/5 p-8 lg:p-12 border border-white/10">
          <h2 className="text-white text-3xl font-serif mb-10">Inquire</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-white/50 text-[10px] tracking-[0.2em] uppercase">First Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-0 border-b border-white/20 focus:border-primary focus:ring-0 text-white placeholder-white/20 px-0 py-2 transition-colors text-sm"
                  placeholder="Jane"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-white/50 text-[10px] tracking-[0.2em] uppercase">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-0 border-b border-white/20 focus:border-primary focus:ring-0 text-white placeholder-white/20 px-0 py-2 transition-colors text-sm"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-white/50 text-[10px] tracking-[0.2em] uppercase">Email Address</label>
              <input
                type="email"
                className="w-full bg-transparent border-0 border-b border-white/20 focus:border-primary focus:ring-0 text-white placeholder-white/20 px-0 py-2 transition-colors text-sm"
                placeholder="jane@example.com"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-white/50 text-[10px] tracking-[0.2em] uppercase">Message</label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-0 border-b border-white/20 focus:border-primary focus:ring-0 text-white placeholder-white/20 px-0 py-2 transition-colors text-sm resize-none"
                placeholder="How may we assist you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-black py-4 text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors mt-4"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Info & Map Section */}
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 border border-white/10">
              <MapPin className="text-primary mb-6 w-6 h-6" />
              <h3 className="text-sm font-serif text-white mb-4 tracking-widest uppercase">The Atelier</h3>
              <p className="text-white/50 text-xs tracking-wider leading-relaxed">
                123 Design Lane,<br />
                Creative District, London<br />
                SW1A 1AA
              </p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10">
              <Clock className="text-primary mb-6 w-6 h-6" />
              <h3 className="text-sm font-serif text-white mb-4 tracking-widest uppercase">Hours</h3>
              <p className="text-white/50 text-xs tracking-wider leading-relaxed">
                Mon - Fri: 10am - 7pm<br />
                Weekend: By Appointment
              </p>
            </div>
          </div>
          {/* Map Placeholder */}
          <div className="relative w-full h-full min-h-[400px] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000">
            <img
              src="https://picsum.photos/seed/map-dark/1000/800"
              alt="Map"
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="font-serif text-white tracking-[0.2em] uppercase text-xs">Ivana HQ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
