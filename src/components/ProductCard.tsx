import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="flex flex-col group">
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        {product.sale && (
          <div className="absolute top-4 left-4 bg-primary text-black text-[10px] tracking-widest uppercase px-3 py-1 font-semibold">
            {product.sale} OFF
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <button className="w-full bg-white text-black py-3 text-xs tracking-[0.2em] uppercase hover:bg-primary transition-colors flex items-center justify-center gap-3">
            <ShoppingCart className="w-4 h-4" />
            View Product
          </button>
        </div>
      </Link>
      <h3 className="text-sm font-serif tracking-wide uppercase mb-2 line-clamp-2 text-white/90">{product.name}</h3>
      <div className="mt-auto">
        <div className="flex items-center gap-3 mb-2">
          <p className="text-lg font-light text-white">${product.price.toLocaleString()}</p>
          {product.originalPrice && (
            <p className="text-xs text-white/40 line-through">
              ${product.originalPrice.toLocaleString()}
            </p>
          )}
        </div>
        <div className="text-[10px] space-y-1 tracking-wider uppercase text-white/50">
          <p>3 x <span className="text-white">${(product.price / 3).toFixed(2)}</span> interest-free</p>
          <p className="text-primary">Bank Transfer Discount</p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
