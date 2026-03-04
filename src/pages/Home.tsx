import React from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const CATEGORIES = [
  { name: 'CALZAS', image: 'https://picsum.photos/seed/calzas/300/300' },
  { name: 'TOPS', image: 'https://picsum.photos/seed/tops/300/300' },
  { name: 'SHORTS', image: 'https://picsum.photos/seed/shorts/300/300' },
  { name: 'REMERAS', image: 'https://picsum.photos/seed/remeras/300/300' },
  { name: 'BUZOS', image: 'https://picsum.photos/seed/buzos/300/300' },
  { name: 'CAMPERAS', image: 'https://picsum.photos/seed/camperas/300/300' },
];

const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'TOP C/FRUNCE EN DELANTERO TERCIOPELO',
    price: 23990,
    originalPrice: 39990,
    category: 'Tops',
    image: 'https://picsum.photos/seed/top1/600/800',
    sale: '40%',
    stock: 3,
    colors: ['#000000', '#FFFFFF', '#FF1493'],
  },
  {
    id: '2',
    name: 'SHORT CINT RECTA MORLEY',
    price: 31190,
    originalPrice: 51990,
    category: 'Shorts',
    image: 'https://picsum.photos/seed/short1/600/800',
    sale: '40%',
    stock: 10,
    colors: ['#000000', '#808080'],
  },
  {
    id: '3',
    name: 'CAPRI ESTAMPADO SIMIL TERCIOPELO',
    price: 32990,
    originalPrice: 54990,
    category: 'Capris',
    image: 'https://picsum.photos/seed/capri1/600/800',
    sale: '40%',
    stock: 2,
    colors: ['#000000'],
  },
  {
    id: '4',
    name: 'SHORT BOX WHITE',
    price: 29390,
    originalPrice: 48990,
    category: 'Shorts',
    image: 'https://picsum.photos/seed/short2/600/800',
    sale: '40%',
    stock: 15,
    colors: ['#FFFFFF'],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Category Highlights */}
      <section className="pt-16 pb-8 max-w-7xl mx-auto px-4 w-full">
        <div className="flex overflow-x-auto gap-6 md:gap-10 pb-4 hide-scrollbar justify-start md:justify-center">
          {CATEGORIES.map((cat) => (
            <a key={cat.name} href="#" className="flex flex-col items-center group shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-slate-200 group-hover:border-primary transition-colors shadow-lg group-hover:shadow-xl">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="mt-4 text-[11px] font-bold tracking-widest uppercase text-slate-900 group-hover:text-primary transition-colors">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="pt-6 pb-12 max-w-7xl mx-auto px-4 w-full mb-12">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-slate-900">
            DESTACADOS
          </h2>
          <a href="/collection" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary underline underline-offset-4">
            Ver todo
          </a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[85vh] bg-slate-100 overflow-hidden">
        <img 
          src="https://picsum.photos/seed/hero-sport/1920/1080" 
          alt="Nueva Colección" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-white text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4">
            NUEVA TEMPORADA
          </h2>
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 shadow-sm">
            WINTER 24
          </h1>
          <a
            href="/collection"
            className="inline-block bg-white text-slate-900 px-10 py-4 text-xs font-bold hover:bg-primary hover:text-white transition-colors uppercase tracking-widest"
          >
            VER COLECCIÓN
          </a>
        </div>
      </section>
    </div>
  );
}
