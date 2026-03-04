import React from 'react';
import { MessageSquare, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-20 py-12 lg:py-20 w-full">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
        <div className="flex flex-col gap-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Atención Online
          </div>
          <h1 className="text-slate-900 text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            Estamos para <br /><span className="text-primary">ayudarte.</span>
          </h1>
          <p className="text-slate-500 text-lg lg:text-xl font-normal max-w-md">
            Nos encantaría escucharte. Contactanos a través del formulario, email o iniciá una conversación directa por WhatsApp.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-green-500/20 hover:scale-[1.02] transition-transform"
            >
              <MessageSquare className="w-5 h-5" />
              Chat WhatsApp
            </a>
            <div className="flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-xl">
              <Mail className="text-slate-400 w-5 h-5" />
              <span className="font-medium">hola@tienda.com</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-[400px]">
          <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3">
            <img
              src="https://picsum.photos/seed/sportswear-contact/800/800"
              alt="Atención al cliente"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form Section */}
        <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-slate-900 text-3xl font-bold leading-tight tracking-tight mb-8">Envianos un mensaje</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-slate-700 text-sm font-bold uppercase tracking-wider">Nombre</label>
                <input
                  type="text"
                  placeholder="Ana"
                  className="w-full rounded-xl border-slate-200 bg-white focus:border-primary focus:ring-primary text-slate-900 placeholder-slate-400 h-14 p-4 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-700 text-sm font-bold uppercase tracking-wider">Apellido</label>
                <input
                  type="text"
                  placeholder="García"
                  className="w-full rounded-xl border-slate-200 bg-white focus:border-primary focus:ring-primary text-slate-900 placeholder-slate-400 h-14 p-4 transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 text-sm font-bold uppercase tracking-wider">Email</label>
              <input
                type="email"
                placeholder="ana@ejemplo.com"
                className="w-full rounded-xl border-slate-200 bg-white focus:border-primary focus:ring-primary text-slate-900 placeholder-slate-400 h-14 p-4 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 text-sm font-bold uppercase tracking-wider">Mensaje</label>
              <textarea
                placeholder="¿En qué podemos ayudarte?"
                rows={5}
                className="w-full rounded-xl border-slate-200 bg-white focus:border-primary focus:ring-primary text-slate-900 placeholder-slate-400 p-4 transition-all"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 text-white h-14 rounded-xl font-bold hover:bg-primary transition-all shadow-lg shadow-slate-900/10"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Info & Map Section */}
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <MapPin className="text-primary mb-4 w-8 h-8" />
              <h3 className="text-lg font-bold mb-2">Nuestro Local</h3>
              <p className="text-slate-500 text-sm">
                Av. Santa Fe 1234,<br />
                Palermo, CABA<br />
                Argentina
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <Clock className="text-primary mb-4 w-8 h-8" />
              <h3 className="text-lg font-bold mb-2">Horarios</h3>
              <p className="text-slate-500 text-sm">
                Lun - Sáb: 10hs - 20hs<br />
                Dom: Cerrado
              </p>
            </div>
          </div>
          {/* Map Placeholder */}
          <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl border border-slate-200 grayscale hover:grayscale-0 transition-all duration-500 shadow-xl">
            <img
              src="https://picsum.photos/seed/map/1000/800"
              alt="Map"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="font-bold text-sm tracking-tight uppercase">Local Palermo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
