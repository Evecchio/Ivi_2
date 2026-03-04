import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu, Diamond } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/collection' },
    { name: 'New Arrivals', path: '#' },
    { name: 'Sale', path: '#' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-20 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <Diamond className="text-primary w-8 h-8" />
            <h1 className="text-2xl font-serif tracking-widest uppercase">
              Ivana <span className="text-primary italic">Design</span>
            </h1>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-white/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 justify-end items-center gap-4">
          <div className="hidden sm:flex flex-1 max-w-xs relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-none focus:border-primary focus:ring-1 focus:ring-primary text-xs tracking-widest text-white placeholder:text-white/40"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/cart" className="hover:text-primary transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-black text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                3
              </span>
            </Link>
            <button className="hover:text-primary transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="md:hidden hover:text-primary transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
