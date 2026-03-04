import React from 'react';
import { Diamond, Mail, Globe, Link as LinkIcon, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white/50 py-24 mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1">
            <div className="flex items-center gap-2 text-white mb-8">
              <Diamond className="text-primary w-8 h-8" />
              <h2 className="text-2xl font-serif tracking-widest uppercase">
                Ivana <span className="text-primary italic">Design</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed font-light">
              Redefining elegance with contemporary design and sustainable craftsmanship since 2018.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif tracking-[0.2em] uppercase text-sm mb-8">Explore</h4>
            <ul className="space-y-4 text-xs tracking-wider uppercase">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif tracking-[0.2em] uppercase text-sm mb-8">Support</h4>
            <ul className="space-y-4 text-xs tracking-wider uppercase">
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif tracking-[0.2em] uppercase text-sm mb-8">Newsletter</h4>
            <p className="text-xs font-light mb-6">Subscribe for early access and exclusive offers.</p>
            <form className="flex gap-0">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 border-r-0 text-xs tracking-widest text-white focus:border-primary focus:ring-0 placeholder:text-white/30"
              />
              <button className="bg-primary text-black px-6 hover:bg-white transition-colors flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest uppercase">
          <p>© 2024 Ivana Design. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors"><Mail className="w-4 h-4" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Globe className="w-4 h-4" /></a>
            <a href="#" className="hover:text-primary transition-colors"><LinkIcon className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
