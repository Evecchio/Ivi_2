import React from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const CATEGORIES = [
  { name: 'Capris', image: 'https://picsum.photos/seed/capris/300/300' },
  { name: 'Tops', image: 'https://picsum.photos/seed/tops/300/300' },
  { name: 'Leggings', image: 'https://picsum.photos/seed/leggings/300/300' },
  { name: 'Lencería', image: 'https://picsum.photos/seed/lenceria/300/300' },
  { name: 'Shorts', image: 'https://picsum.photos/seed/shorts/300/300' },
  { name: 'Camperas', image: 'https://picsum.photos/seed/camperas/300/300' },
];

const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'TOP C/FRUNCE EN DELANTERO TERCIOPECO',
    price: 23990,
    originalPrice: 39990,
    category: 'Tops',
    image: 'https://picsum.photos/seed/top1/600/800',
    sale: '40%',
  },
  {
    id: '2',
    name: 'SHORT CINT RECTA MORLEY',
    price: 31190,
    originalPrice: 51990,
    category: 'Shorts',
    image: 'https://picsum.photos/seed/short1/600/800',
    sale: '40%',
  },
  {
    id: '3',
    name: 'CAPRI ESTAMPADO SIMIL TERCIOPECO',
    price: 32990,
    originalPrice: 54990,
    category: 'Capris',
    image: 'https://picsum.photos/seed/capri1/600/800',
    sale: '40%',
  },
  {
    id: '4',
    name: 'SHORT BOX WHITE',
    price: 29390,
    originalPrice: 48990,
    category: 'Shorts',
    image: 'https://picsum.photos/seed/short2/600/800',
    sale: '40%',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Top Banner */}
      <div className="bg-primary text-black text-center py-2 px-4 text-[10px] font-semibold tracking-[0.3em] uppercase">
        COMPLIMENTARY SHIPPING ON ORDERS OVER $500
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://picsum.photos/seed/luxury-fashion/1920/1080")' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center">
          <span className="text-primary text-xs tracking-[0.3em] uppercase mb-6 font-semibold">
            The New Standard
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-none">
            Elegance <br/><span className="italic font-light">Redefined</span>
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-lg mx-auto mb-12 font-light tracking-wide">
            Discover our latest collection of meticulously crafted pieces designed for the modern aesthete.
          </p>
          <a
            href="/collection"
            className="inline-block border border-white text-white px-12 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-500"
          >
            Explore Collection
          </a>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="py-24 max-w-7xl mx-auto px-4 w-full border-b border-white/10">
        <div className="flex overflow-x-auto gap-12 pb-8 hide-scrollbar justify-between">
          {CATEGORIES.map((cat) => (
            <a key={cat.name} href="#" className="flex flex-col items-center group shrink-0">
              <div className="w-32 h-40 md:w-48 md:h-64 overflow-hidden mb-6">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/70 group-hover:text-primary transition-colors">{cat.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col items-center mb-16">
          <span className="text-primary text-[10px] tracking-[0.3em] uppercase mb-4">Curated Selection</span>
          <h2 className="text-4xl font-serif text-white text-center">Featured Pieces</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-20 text-center">
          <a
            href="/collection"
            className="inline-block border-b border-primary text-primary pb-1 text-xs tracking-[0.2em] uppercase hover:text-white hover:border-white transition-colors"
          >
            View All Products
          </a>
        </div>
      </section>
    </div>
  );
}
