import React from 'react';
import { Filter, ChevronDown, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Magenta Silk Evening Dress',
    price: 120,
    originalPrice: 160,
    category: 'Dresses',
    image: 'https://picsum.photos/seed/magenta/600/800',
    sale: '40%',
  },
  {
    id: '9',
    name: 'Classic Midnight Blazer',
    price: 185,
    category: 'Clothing',
    image: 'https://picsum.photos/seed/blazer/600/800',
  },
  {
    id: '10',
    name: 'Essential Oversized Knit',
    price: 55,
    originalPrice: 85,
    category: 'Clothing',
    image: 'https://picsum.photos/seed/knit/600/800',
    sale: '40%',
  },
  {
    id: '11',
    name: 'Vibrant Leather Pumps',
    price: 210,
    category: 'Shoes',
    image: 'https://picsum.photos/seed/pumps/600/800',
  },
  {
    id: '12',
    name: 'Urban Straight Denim',
    price: 95,
    category: 'Clothing',
    image: 'https://picsum.photos/seed/denim/600/800',
  },
  {
    id: '13',
    name: 'Luxe Cloud Hoodie',
    price: 72,
    originalPrice: 90,
    category: 'Clothing',
    image: 'https://picsum.photos/seed/hoodie/600/800',
    sale: '40%',
  },
  {
    id: '14',
    name: 'Pure Essential Tee',
    price: 35,
    category: 'Clothing',
    image: 'https://picsum.photos/seed/tee-white/600/800',
  },
  {
    id: '15',
    name: 'Floral Pleated Skirt',
    price: 49,
    originalPrice: 79,
    category: 'Clothing',
    image: 'https://picsum.photos/seed/skirt/600/800',
    sale: '40%',
  },
];

export default function Collection() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-20 py-8 w-full">
      <nav className="flex items-center gap-2 text-[10px] font-light text-white/50 mb-12 uppercase tracking-[0.2em]">
        <a href="/" className="hover:text-primary transition-colors">Home</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-white">The Collection</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">THE COLLECTION</h2>
          <p className="text-white/60 max-w-md font-light tracking-wide text-sm">Elevate your style with Ivana Design's latest curated selection of contemporary pieces.</p>
        </div>
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/50">
          <span className="text-primary">48</span> Pieces
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-16 py-6 border-y border-white/10 overflow-x-auto whitespace-nowrap">
        <button className="flex items-center gap-2 px-8 py-3 bg-white text-black text-[10px] tracking-[0.2em] uppercase hover:bg-primary transition-colors">
          <Filter className="w-4 h-4" />
          Filters
        </button>
        <div className="h-10 w-px bg-white/10 mx-2"></div>
        <button className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-primary hover:text-primary text-[10px] tracking-[0.2em] uppercase transition-all">
          Category: Dresses <ChevronDown className="w-3 h-3" />
        </button>
        <button className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-primary hover:text-primary text-[10px] tracking-[0.2em] uppercase transition-all">
          Price Range <ChevronDown className="w-3 h-3" />
        </button>
        <button className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-primary hover:text-primary text-[10px] tracking-[0.2em] uppercase transition-all">
          Color: Pink <ChevronDown className="w-3 h-3" />
        </button>
        <button className="ml-auto flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-primary hover:text-primary text-[10px] tracking-[0.2em] uppercase transition-all">
          Sort by: Popularity <ArrowUpDown className="w-3 h-3" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-24 flex justify-center items-center gap-6">
        <button className="h-12 w-12 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all text-white/50">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-4 text-xs tracking-widest">
          <button className="text-primary font-bold">01</button>
          <button className="text-white/50 hover:text-white transition-colors">02</button>
          <button className="text-white/50 hover:text-white transition-colors">03</button>
          <span className="px-2 text-white/30">...</span>
          <button className="text-white/50 hover:text-white transition-colors">12</button>
        </div>
        <button className="h-12 w-12 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all text-white/50">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
