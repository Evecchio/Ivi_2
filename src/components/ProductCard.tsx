import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('es-AR');
  };

  return (
    <article className="flex flex-col group">
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-slate-100 mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        {product.sale && (
          <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
            <div className="bg-slate-900 text-white text-[20px] font-black px-3 py-1.5 uppercase tracking-wider">
              {product.sale} OFF
            </div>
            {product.originalPrice && (
              <div className="bg-red-500 text-white text-[22px] font-black px-3 py-1.5 uppercase tracking-wider shadow-md">
                Ahorrás ${formatPrice(product.originalPrice - product.price)}!
              </div>
            )}
          </div>
        )}
      </Link>
      
      <div className="flex flex-col flex-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xs font-bold uppercase text-slate-900 mb-1 hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-1 flex items-center gap-2">
          {product.originalPrice && (
            <span className="text-xs text-red-500 font-bold line-through">
              ${formatPrice(product.originalPrice)}
            </span>
          )}
          <span className="text-sm font-black text-slate-900">
            ${formatPrice(product.price)}
          </span>
        </div>
        
        <div className="mt-2 text-[10px] font-semibold text-slate-600 uppercase tracking-wide flex flex-col gap-1">
          <p className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            Stock Disponible
          </p>
          <p>Color: <span className="text-slate-900">Negro / Blanco</span></p>
          <p>3 CUOTAS SIN INTERÉS DE <span className="text-slate-900">${formatPrice(Math.round(product.price / 3))}</span></p>
          <p className="text-primary">15% OFF abonando con Transferencia</p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
