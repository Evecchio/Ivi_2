import React from 'react';
import { Diamond, Mail, Globe, Link as LinkIcon, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 text-white mb-6">
              <Diamond className="text-primary w-8 h-8" />
              <h2 className="text-xl font-black uppercase tracking-tighter">Ivana Sport</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Diseñamos prendas que se adaptan a tu ritmo: del gimnasio a la oficina, sin perder el estilo.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Explorar</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Colecciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustentabilidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trabajá con nosotros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Soporte</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Envíos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cambios y Devoluciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Suscribite para recibir novedades y ofertas exclusivas.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border-none text-sm text-white focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-white p-2 rounded-lg hover:opacity-90 transition-opacity">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Ivana Sport. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors"><Mail className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Globe className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><LinkIcon className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
