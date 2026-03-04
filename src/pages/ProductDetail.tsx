import React from 'react';
import { Star, ShoppingCart, Truck, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const RELATED_PRODUCTS = [
  {
    id: '5',
    name: 'Luxe Stiletto Heels',
    price: 4200,
    category: 'Accessories',
    image: 'https://picsum.photos/seed/heels/600/800',
  },
  {
    id: '6',
    name: 'Classic Leather Clutch',
    price: 8900,
    category: 'Handbags',
    image: 'https://picsum.photos/seed/bag/600/800',
  },
  {
    id: '7',
    name: 'Petal Gold Earrings',
    price: 2100,
    category: 'Jewelry',
    image: 'https://picsum.photos/seed/jewelry/600/800',
  },
  {
    id: '8',
    name: 'Urban Minimalist Sneakers',
    price: 6500,
    category: 'Shoes',
    image: 'https://picsum.photos/seed/shoes/600/800',
  },
];

export default function ProductDetail() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-20 py-8 w-full">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[10px] font-light text-white/50 mb-12 uppercase tracking-[0.2em]">
        <a href="/" className="hover:text-primary transition-colors">Home</a>
        <ChevronRight className="w-3 h-3" />
        <a href="/collection" className="hover:text-primary transition-colors">The Collection</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-white">Ivana Signature Dress</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Product Images */}
        <div className="lg:col-span-7 space-y-4">
          <div className="aspect-[3/4] overflow-hidden bg-white/5">
            <img
              src="https://picsum.photos/seed/dress-main/800/1200"
              alt="Ivana Signature Silk Dress"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden cursor-pointer hover:opacity-70 transition-opacity bg-white/5">
                <img
                  src={`https://picsum.photos/seed/dress-${i}/400/533`}
                  alt={`Detail ${i}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <span className="inline-block text-primary text-[10px] tracking-[0.3em] uppercase mb-4 font-semibold">
              New Arrival
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-4">Ivana Signature Silk Dress</h2>
            <div className="flex items-center gap-4">
              <div className="flex text-primary">
                {[1, 2, 3, 4].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                <Star className="w-3 h-3" />
              </div>
              <span className="text-xs text-white/50 tracking-widest uppercase">124 Reviews</span>
            </div>
          </div>

          <div className="py-8 border-y border-white/10">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-3xl font-light text-white">${(12500).toLocaleString()}</span>
              <span className="text-lg line-through text-white/30">${(15800).toLocaleString()}</span>
            </div>
            <p className="text-primary text-xs tracking-widest uppercase">3 interest-free installments of ${(4166).toLocaleString()}</p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase mb-4 text-white/70">Color: <span className="text-white">Blush Pink</span></p>
              <div className="flex gap-4">
                <button className="w-8 h-8 rounded-full border border-primary bg-[#ffc0cb] ring-2 ring-primary ring-offset-2 ring-offset-black"></button>
                <button className="w-8 h-8 rounded-full border border-white/20 bg-white hover:border-white transition-colors"></button>
                <button className="w-8 h-8 rounded-full border border-white/20 bg-black hover:border-white transition-colors"></button>
                <button className="w-8 h-8 rounded-full border border-white/20 bg-slate-400 hover:border-white transition-colors"></button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/70">Size</p>
                <a href="#" className="text-[10px] text-primary tracking-widest uppercase hover:text-white transition-colors">Size Guide</a>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {['XS', 'S', 'M', 'L'].map((size) => (
                  <button
                    key={size}
                    className={`py-3 border text-xs tracking-widest transition-all ${
                      size === 'S' ? 'border-primary text-primary bg-primary/5' : 'border-white/20 text-white hover:border-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6">
              <button className="w-full bg-primary text-black py-4 text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors flex items-center justify-center gap-3">
                <ShoppingCart className="w-4 h-4" />
                Add to Bag
              </button>
              <button className="w-full border border-white text-white py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors">
                Buy Now
              </button>
            </div>

            <div className="bg-white/5 p-6 border border-white/10 space-y-4">
              <div className="flex gap-4">
                <Truck className="text-primary w-5 h-5" />
                <div className="flex-1">
                  <p className="text-xs tracking-widest uppercase text-white mb-4">Calculate Shipping</p>
                  <div className="flex gap-0">
                    <input
                      type="text"
                      placeholder="ZIP CODE"
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 border-r-0 text-xs tracking-widest text-white focus:border-primary focus:ring-0 placeholder:text-white/30"
                    />
                    <button className="bg-white text-black text-[10px] tracking-[0.2em] uppercase px-6 hover:bg-primary transition-colors">Calculate</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-32 border-t border-white/10 pt-16">
        <div className="flex gap-12 border-b border-white/10 mb-12 overflow-x-auto hide-scrollbar">
          <button className="pb-4 border-b border-primary text-white text-xs tracking-[0.2em] uppercase whitespace-nowrap">
            Description
          </button>
          <button className="pb-4 border-b border-transparent text-white/50 hover:text-white text-xs tracking-[0.2em] uppercase whitespace-nowrap transition-colors">
            Details & Care
          </button>
          <button className="pb-4 border-b border-transparent text-white/50 hover:text-white text-xs tracking-[0.2em] uppercase whitespace-nowrap transition-colors">
            Reviews (124)
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-white/70 font-light leading-relaxed text-sm">
              Elevate your wardrobe with the Ivana Signature Silk Dress. Crafted from our exclusive premium mulberry silk, this piece embodies timeless elegance and modern sophistication. The fluid silhouette is designed to flatter every figure, featuring a delicate cowl neckline and a subtle side slit for graceful movement.
            </p>
            <ul className="space-y-3 text-sm text-white/70 font-light">
              <li className="flex items-center gap-4"><span className="w-1 h-1 bg-primary rounded-full"></span> 100% Premium Mulberry Silk</li>
              <li className="flex items-center gap-4"><span className="w-1 h-1 bg-primary rounded-full"></span> Adjustable spaghetti straps</li>
              <li className="flex items-center gap-4"><span className="w-1 h-1 bg-primary rounded-full"></span> Bias cut for the perfect drape</li>
              <li className="flex items-center gap-4"><span className="w-1 h-1 bg-primary rounded-full"></span> Eco-friendly dyeing process</li>
            </ul>
          </div>
          <div className="bg-white/5 p-10 border border-white/10">
            <h4 className="text-xs tracking-[0.2em] uppercase text-white mb-8">Customer Satisfaction</h4>
            <div className="space-y-6">
              {[
                { rating: 5, percent: 80 },
                { rating: 4, percent: 15 },
                { rating: 3, percent: 5 },
              ].map((row) => (
                <div key={row.rating} className="grid grid-cols-[20px_1fr_40px] items-center gap-6">
                  <span className="text-xs text-white/70">{row.rating}</span>
                  <div className="h-1 bg-white/10 overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${row.percent}%` }}></div>
                  </div>
                  <span className="text-xs text-white/70 text-right">{row.percent}%</span>
                </div>
              ))}
            </div>
            <button className="mt-10 w-full py-4 border border-white/20 text-xs tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-colors">
              See all reviews
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-32 pb-24">
        <h3 className="text-2xl font-serif text-center mb-16 text-white">Complete the look</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
          {RELATED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product as any} />
          ))}
        </div>
      </section>
    </div>
  );
}
