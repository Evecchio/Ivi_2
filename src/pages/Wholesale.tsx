import React from 'react';
import { ChevronRight, Package, Truck, Percent } from 'lucide-react';

export default function Wholesale() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 w-full">
      <nav className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-slate-500 mb-6 uppercase tracking-widest">
        <a href="/" className="hover:text-primary">Inicio</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-900">Venta Mayorista</span>
      </nav>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">VENTA MAYORISTA</h2>
          <p className="text-slate-600">
            ¿Querés revender nuestros productos? Sumate a nuestra red de revendedoras y accedé a beneficios exclusivos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-50 p-6 rounded-xl text-center border border-slate-100">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Percent className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-wide">Descuentos</h3>
            <p className="text-sm text-slate-600">Accedé a precios preferenciales comprando por mayor.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl text-center border border-slate-100">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-wide">Mínimo de Compra</h3>
            <p className="text-sm text-slate-600">Compra mínima accesible para que puedas empezar tu negocio.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl text-center border border-slate-100">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-wide">Envíos</h3>
            <p className="text-sm text-slate-600">Envíos a todo el país a través de diferentes transportes.</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
          <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight text-center">Solicitá Información</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Nombre Completo</label>
                <input type="text" id="name" className="w-full border border-slate-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Teléfono / WhatsApp</label>
                <input type="tel" id="phone" className="w-full border border-slate-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Tu teléfono" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Email</label>
              <input type="email" id="email" className="w-full border border-slate-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="tu@email.com" />
            </div>
            <div>
              <label htmlFor="location" className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Localidad y Provincia</label>
              <input type="text" id="location" className="w-full border border-slate-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Ej: Rosario, Santa Fe" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Mensaje (Opcional)</label>
              <textarea id="message" rows={4} className="w-full border border-slate-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Contanos un poco sobre tu negocio..."></textarea>
            </div>
            <button type="button" className="w-full bg-slate-900 text-white font-bold py-3 rounded hover:bg-primary transition-colors uppercase tracking-widest text-sm">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
