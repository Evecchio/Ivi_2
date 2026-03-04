import React from 'react';
import { Trash2, ShoppingBag, CreditCard, Wallet, Coins, ArrowRight } from 'lucide-react';

const CART_ITEMS = [
  {
    id: '1',
    name: 'Silk Blouse - Pink',
    price: 120,
    size: 'M',
    color: 'Soft Pink',
    image: 'https://picsum.photos/seed/blouse/400/400',
    stock: 'In Stock',
  },
  {
    id: '2',
    name: 'Tailored Trousers - Black',
    price: 180,
    originalPrice: 210,
    size: '38',
    color: 'Midnight Black',
    image: 'https://picsum.photos/seed/trousers/400/400',
  },
  {
    id: '3',
    name: 'Essential Tee - Grey',
    price: 45,
    size: 'L',
    color: 'Heather Grey',
    image: 'https://picsum.photos/seed/tee/400/400',
    stock: '2 Left in Stock',
  },
];

export default function Cart() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-20 py-8 w-full">
      <div className="mb-16">
        <nav className="flex items-center gap-2 text-[10px] font-light text-white/50 mb-12 uppercase tracking-[0.2em]">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-white">Shopping Cart</span>
        </nav>
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-2 leading-tight">Your Cart</h2>
        <p className="text-white/50 text-xs tracking-widest uppercase">Review your selections (3 items)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-8">
          {CART_ITEMS.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-8 pb-8 border-b border-white/10">
              <div className="w-full sm:w-40 aspect-[3/4] bg-white/5 overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-serif text-white mb-2">{item.name}</h3>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/50">Size: {item.size} | Color: {item.color}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-light text-white">${item.price.toFixed(2)}</p>
                    {item.originalPrice && (
                      <p className="text-xs text-white/30 line-through">${item.originalPrice.toFixed(2)}</p>
                    )}
                    {item.stock && (
                      <p className="text-[10px] tracking-widest uppercase text-primary mt-2">{item.stock}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <div className="flex items-center border border-white/20">
                    <button className="px-4 py-2 hover:bg-white/5 text-white/70 transition-colors">-</button>
                    <span className="px-4 py-2 text-xs font-light text-white border-x border-white/20">1</span>
                    <button className="px-4 py-2 hover:bg-white/5 text-white/70 transition-colors">+</button>
                  </div>
                  <button className="text-[10px] tracking-[0.2em] uppercase text-white/50 hover:text-primary transition-colors flex items-center gap-2">
                    <Trash2 className="w-3 h-3" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white/5 border border-white/10 p-10 sticky top-32">
            <h3 className="text-xl font-serif text-white mb-8">Order Summary</h3>
            <div className="space-y-6 text-xs tracking-widest uppercase text-white/70">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white">${(345).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-primary">Complimentary</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span className="text-white">${(28.50).toFixed(2)}</span>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 p-4 flex items-center justify-between">
                <span className="text-primary">Total Savings</span>
                <span className="text-primary">-${(30).toFixed(2)}</span>
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                <span className="text-white">Total</span>
                <div className="text-right">
                  <p className="text-3xl font-light text-white mb-1">${(343.50).toFixed(2)}</p>
                  <p className="text-[9px] text-white/40">Includes all taxes and fees</p>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <button className="w-full bg-primary text-black py-4 text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors">
                Checkout Now
              </button>
              <button className="w-full border border-white/20 text-white py-4 text-xs tracking-[0.2em] uppercase hover:border-white transition-colors">
                Continue Shopping
              </button>
            </div>

            <div className="mt-12 flex flex-col items-center gap-6">
              <p className="text-[9px] text-white/40 uppercase tracking-[0.3em]">Secure Payments</p>
              <div className="flex gap-6 opacity-30 hover:opacity-100 transition-opacity">
                <CreditCard className="w-6 h-6 text-white" />
                <Wallet className="w-6 h-6 text-white" />
                <Coins className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
