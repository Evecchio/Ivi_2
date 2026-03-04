import React from 'react';
import { ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const NEW_ARRIVALS: Product[] = [
  {
    id: '101',
    name: 'CALZA DEPORTIVA SEAMLESS TEXTURADA',
    price: 38990,
    category: 'Calzas',
    image: 'https://picsum.photos/seed/new1/600/800',
    isNew: true,
    stock: 15,
    colors: ['#000000', '#FFC0CB', '#808080'],
  },
  {
    id: '102',
    name: 'TOP DEPORTIVO ASIMÉTRICO',
    price: 25990,
    category: 'Tops',
    image: 'https://picsum.photos/seed/new2/600/800',
    isNew: true,
    stock: 8,
    colors: ['#000000', '#FFFFFF'],
  },
  {
    id: '103',
    name: 'CAMPERA PUFFER CORTA',
    price: 75990,
    category: 'Camperas',
    image: 'https://picsum.photos/seed/new3/600/800',
    isNew: true,
    stock: 3,
    colors: ['#000000'],
  },
  {
    id: '104',
    name: 'SHORT DEPORTIVO CON CALZA INTERNA',
    price: 32990,
    category: 'Shorts',
    image: 'https://picsum.photos/seed/new4/600/800',
    isNew: true,
    stock: 20,
    colors: ['#000000', '#000080', '#FF0000'],
  },
];

export default function NewArrivals() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 w-full">
      <nav className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-slate-500 mb-6 uppercase tracking-widest">
        <a href="/" className="hover:text-primary">Inicio</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-900">Nuevos Ingresos</span>
      </nav>

      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 uppercase tracking-tighter">NUEVOS INGRESOS</h2>
        <p className="text-slate-500 text-sm">Descubrí las últimas tendencias en indumentaria deportiva.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
        {NEW_ARRIVALS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
