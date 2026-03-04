import React from 'react';
import { Trash2, ShoppingBag, CreditCard, Wallet, Coins, ArrowRight } from 'lucide-react';

const CART_ITEMS = [
  {
    id: '1',
    name: 'TOP C/FRUNCE EN DELANTERO',
    price: 23990,
    size: 'M',
    color: 'Rosa Viejo',
    image: 'https://picsum.photos/seed/top1/400/400',
    stock: 'En Stock',
  },
  {
    id: '2',
    name: 'CALZA LARGA TIRO ALTO',
    price: 35990,
    originalPrice: 45990,
    size: 'M',
    color: 'Negro',
    image: 'https://picsum.photos/seed/calza1/400/400',
  },
  {
    id: '3',
    name: 'MEDIAS DEPORTIVAS X3',
    price: 8500,
    size: 'Único',
    color: 'Blanco',
    image: 'https://picsum.photos/seed/medias/400/400',
    stock: 'Últimas 2 unidades',
  },
];

export default function Cart() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-20 py-8 w-full">
      <div className="mb-8">
        <nav className="flex text-sm font-medium text-slate-500 mb-2">
          <a href="/" className="hover:text-primary">Inicio</a>
          <span className="mx-2">/</span>
          <span className="text-slate-900">Carrito de Compras</span>
        </nav>
        <h2 className="text-4xl font-black text-slate-900">Tu Carrito</h2>
        <p className="text-slate-500 mt-1">Revisá tu selección (3 artículos)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {CART_ITEMS.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-full sm:w-32 h-32 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                    <p className="text-sm text-slate-500">Talle: {item.size} | Color: {item.color}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-slate-900">${item.price.toLocaleString()}</p>
                    {item.originalPrice && (
                      <p className="text-xs text-slate-400 line-through">${item.originalPrice.toLocaleString()}</p>
                    )}
                    {item.stock && (
                      <p className="text-xs text-primary font-bold">{item.stock}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                    <button className="px-3 py-1 hover:bg-slate-50 text-slate-600">-</button>
                    <span className="px-3 py-1 text-sm font-bold border-x border-slate-200">1</span>
                    <button className="px-3 py-1 hover:bg-slate-50 text-slate-600">+</button>
                  </div>
                  <button className="text-sm font-medium text-slate-400 hover:text-red-500 flex items-center gap-1">
                    <Trash2 className="w-4 h-4" /> Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 sticky top-24">
            <h3 className="text-xl font-black text-slate-900 mb-6">Resumen de Compra</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>$68,480</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Envío</span>
                <span className="text-xs text-primary font-bold">GRATIS</span>
              </div>
              
              <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                  <span className="font-bold uppercase tracking-wider text-xs">Ahorro Total</span>
                </div>
                <span className="text-primary font-black text-lg">-$10,000</span>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-end">
                <span className="text-slate-900 font-bold">Total</span>
                <div className="text-right">
                  <p className="text-3xl font-black text-slate-900">$68,480</p>
                  <p className="text-xs text-slate-400">IVA incluido</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button className="w-full bg-primary hover:opacity-90 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-primary/20 uppercase tracking-widest text-sm">
                INICIAR PAGO
              </button>
              <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-4 rounded-xl transition-all text-sm">
                SEGUIR COMPRANDO
              </button>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Pagos Seguros</p>
              <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                <CreditCard className="w-8 h-8" />
                <Wallet className="w-8 h-8" />
                <Coins className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
