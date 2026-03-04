import React from 'react';
import { Filter, ChevronDown, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const PRODUCTS: Product[] = [
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
    id: '9',
    name: 'CALZA LARGA TIRO ALTO',
    price: 35990,
    category: 'Calzas',
    image: 'https://picsum.photos/seed/calza1/600/800',
    stock: 8,
    colors: ['#000000', '#000080'],
  },
  {
    id: '10',
    name: 'BUZO CROP RUSTICO',
    price: 45990,
    originalPrice: 55990,
    category: 'Buzos',
    image: 'https://picsum.photos/seed/buzo1/600/800',
    sale: '15%',
    stock: 2,
    colors: ['#808080', '#FFC0CB'],
  },
  {
    id: '11',
    name: 'TOP DEPORTIVO CRUZADO',
    price: 21990,
    category: 'Tops',
    image: 'https://picsum.photos/seed/top2/600/800',
    stock: 12,
    colors: ['#FF0000', '#000000'],
  },
  {
    id: '12',
    name: 'SHORT RUNNING DOBLE',
    price: 28990,
    category: 'Shorts',
    image: 'https://picsum.photos/seed/short3/600/800',
    stock: 4,
    colors: ['#000000', '#008000'],
  },
  {
    id: '13',
    name: 'CAMPERA ROMPEVIENTOS',
    price: 65990,
    originalPrice: 85990,
    category: 'Camperas',
    image: 'https://picsum.photos/seed/campera1/600/800',
    sale: '20%',
    stock: 1,
    colors: ['#000000'],
  },
  {
    id: '14',
    name: 'MUSCULOSA DRY FIT',
    price: 18990,
    category: 'Remeras',
    image: 'https://picsum.photos/seed/musculosa1/600/800',
    stock: 20,
    colors: ['#FFFFFF', '#000000', '#FFA500'],
  },
  {
    id: '15',
    name: 'CALZA CICLISTA SEAMLESS',
    price: 24990,
    originalPrice: 34990,
    category: 'Shorts',
    image: 'https://picsum.photos/seed/ciclista1/600/800',
    sale: '30%',
    stock: 6,
    colors: ['#000000', '#800080'],
  },
];

export default function Collection() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 w-full">
      <nav className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-slate-500 mb-6 uppercase tracking-widest">
        <a href="/" className="hover:text-primary">Inicio</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-900">Todos los Productos</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 uppercase tracking-tighter">PRODUCTOS</h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
          <span className="text-primary">48</span> Productos
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-10 py-4 border-y border-slate-100 overflow-x-auto whitespace-nowrap hide-scrollbar">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded bg-slate-900 text-white text-xs font-bold hover:bg-primary transition-colors uppercase tracking-widest">
          <Filter className="w-4 h-4" />
          Filtros
        </button>
        <div className="h-8 w-px bg-slate-200 mx-2 self-center"></div>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded border border-slate-200 hover:border-primary hover:text-primary text-xs font-bold uppercase tracking-widest transition-all">
          Categoría: Tops <ChevronDown className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded border border-slate-200 hover:border-primary hover:text-primary text-xs font-bold uppercase tracking-widest transition-all">
          Precio <ChevronDown className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded border border-slate-200 hover:border-primary hover:text-primary text-xs font-bold uppercase tracking-widest transition-all">
          Color: Negro <ChevronDown className="w-4 h-4" />
        </button>
        <button className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded border border-slate-200 hover:border-primary hover:text-primary text-xs font-bold uppercase tracking-widest transition-all">
          Ordenar por: Más vendidos <ArrowUpDown className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-20 flex justify-center items-center gap-2">
        <button className="h-10 w-10 rounded border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-slate-400">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-1">
          <button className="h-10 w-10 rounded bg-primary text-white font-bold text-sm">1</button>
          <button className="h-10 w-10 rounded hover:bg-slate-100 font-bold text-sm text-slate-600">2</button>
          <button className="h-10 w-10 rounded hover:bg-slate-100 font-bold text-sm text-slate-600">3</button>
          <span className="px-2 text-slate-400">...</span>
          <button className="h-10 w-10 rounded hover:bg-slate-100 font-bold text-sm text-slate-600">12</button>
        </div>
        <button className="h-10 w-10 rounded border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-slate-400">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
