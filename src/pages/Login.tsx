import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="max-w-md mx-auto px-4 py-16 w-full">
      <h1 className="text-3xl font-black text-slate-900 mb-8 text-center uppercase tracking-tighter">
        Iniciar Sesión
      </h1>
      
      <form className="space-y-6">
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
          <div className="flex justify-between items-center mb-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-900">
              Contraseña
            </label>
            <a href="#" className="text-xs text-primary font-bold underline underline-offset-2">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
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
          Ingresar
        </button>
      </form>

      <div className="mt-8 text-center border-t border-slate-100 pt-8">
        <p className="text-sm text-slate-600 mb-4">¿No tenés una cuenta?</p>
        <Link
          to="/register"
          className="inline-block w-full bg-white text-slate-900 border-2 border-slate-900 font-bold py-3.5 rounded text-sm uppercase tracking-widest transition-all hover:bg-slate-50"
        >
          Crear Cuenta
        </Link>
      </div>
    </div>
  );
}
