import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'INICIO', path: '/' },
    { name: 'PRODUCTOS', path: '/collection' },
    { name: 'NUEVOS INGRESOS', path: '#' },
    { name: 'SALE', path: '#' },
    { name: 'MAYORISTA', path: '#' },
    { name: 'CONTACTO', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      {/* Top Announcement Bar */}
      <div className="bg-primary text-white text-center py-2 px-4 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
        3 Y 6 CUOTAS SIN INTERÉS | ENVÍO GRATIS SUPERANDO LOS $65.000
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between gap-4">
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 -ml-2 text-slate-900">
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="flex-1 md:flex-none text-center md:text-left">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl font-black uppercase tracking-tighter text-slate-900">
              IVANA<span className="text-primary">SPORT</span>
            </h1>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[11px] font-bold tracking-widest uppercase transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : 'text-slate-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center justify-end gap-3 md:gap-5">
          <button className="p-1 text-slate-900 hover:text-primary transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-1 text-slate-900 hover:text-primary transition-colors hidden sm:block">
            <User className="w-5 h-5" />
          </button>
          <Link to="/cart" className="p-1 text-slate-900 hover:text-primary transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              3
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
