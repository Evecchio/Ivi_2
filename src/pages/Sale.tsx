import React from 'react';
import { ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const SALE_PRODUCTS: Product[] = [
  {
    id: '201',
    name: 'CALZA CORTA BIKER',
    price: 15990,
    originalPrice: 25990,
    category: 'Shorts',
    image: 'https://picsum.photos/seed/sale1/600/800',
    sale: '38%',
    stock: 2,
    colors: ['#000000'],
  },
  {
    id: '202',
    name: 'TOP DEPORTIVO BÁSICO',
    price: 12990,
    originalPrice: 19990,
    category: 'Tops',
    image: 'https://picsum.photos/seed/sale2/600/800',
    sale: '35%',
    stock: 5,
    colors: ['#FFFFFF', '#808080'],
  },
  {
    id: '203',
    name: 'BUZO OVERSIZE RÚSTICO',
    price: 29990,
    originalPrice: 45990,
    category: 'Buzos',
    image: 'https://picsum.photos/seed/sale3/600/800',
    sale: '34%',
    stock: 1,
    colors: ['#FFC0CB'],
  },
  {
    id: '204',
    name: 'REMERA DEPORTIVA MANGA LARGA',
    price: 18990,
    originalPrice: 28990,
    category: 'Remeras',
    image: 'https://picsum.photos/seed/sale4/600/800',
    sale: '34%',
    stock: 10,
    colors: ['#000000', '#FFFFFF'],
  },
];

export default function Sale() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 w-full">
      <nav className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-slate-500 mb-6 uppercase tracking-widest">
        <a href="/" className="hover:text-primary">Inicio</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-900">Sale</span>
      </nav>

      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-2 uppercase tracking-tighter">SALE OFF</h2>
        <p className="text-slate-500 text-sm">Aprovechá nuestros descuentos exclusivos por tiempo limitado.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
        {SALE_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
