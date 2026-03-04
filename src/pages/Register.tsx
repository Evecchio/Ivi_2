import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="max-w-md mx-auto px-4 py-16 w-full">
      <h1 className="text-3xl font-black text-slate-900 mb-8 text-center uppercase tracking-tighter">
        Crear Cuenta
      </h1>
      
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-900 mb-2">
              Nombre
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-1 focus:ring-primary focus:border-primary bg-white text-sm"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-900 mb-2">
              Apellido
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-1 focus:ring-primary focus:border-primary bg-white text-sm"
              placeholder="Tu apellido"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-900 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-1 focus:ring-primary focus:border-primary bg-white text-sm"
            placeholder="tu@email.com"
            required
          />
        </div>
        
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-900 mb-2">
            Contraseña
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-1 focus:ring-primary focus:border-primary bg-white text-sm"
            placeholder="••••••••"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-900 mb-2">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-1 focus:ring-primary focus:border-primary bg-white text-sm"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 text-white font-bold py-4 rounded text-sm uppercase tracking-widest transition-all hover:bg-primary mt-4"
        >
          Registrarme
        </button>
      </form>

      <div className="mt-8 text-center border-t border-slate-100 pt-8">
        <p className="text-sm text-slate-600 mb-4">¿Ya tenés una cuenta?</p>
        <Link
          to="/login"
          className="inline-block w-full bg-white text-slate-900 border-2 border-slate-900 font-bold py-3.5 rounded text-sm uppercase tracking-widest transition-all hover:bg-slate-50"
        >
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
}
