import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(product.colors?.[0] || null);

  const formatPrice = (price: number) => {
    return price.toLocaleString('es-AR');
  };

  return (
    <article className="flex flex-col group">
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 mb-3">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </Link>
        {product.sale && (
          <div className="absolute top-2 right-2 flex flex-col items-end gap-1 pointer-events-none">
            <div className="bg-red-600 text-white text-[20px] font-black px-3 py-1.5 uppercase tracking-wider">
              {product.sale} OFF
            </div>
            {product.originalPrice && (
              <div className="bg-primary text-white text-[22px] font-black px-3 py-1.5 uppercase tracking-wider shadow-md">
                Ahorrás ${formatPrice(product.originalPrice - product.price)}!
              </div>
            )}
          </div>
        )}
        
        {/* Color Selection Overlay */}
        {product.colors && product.colors.length > 0 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 pointer-events-auto">
            <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex gap-2 shadow-sm">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedColor(color);
                  }}
                  className={`w-5 h-5 rounded-full border shadow-sm transition-all ${
                    selectedColor === color ? 'border-slate-900 scale-110' : 'border-slate-300 hover:scale-110'
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Seleccionar color ${color}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xs font-bold uppercase text-slate-900 mb-1 hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-1 flex flex-col gap-1">
          {product.originalPrice && (
            <span className="text-xs text-slate-400 font-bold line-through">
              ${formatPrice(product.originalPrice)}
            </span>
          )}
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-red-600">
              ${formatPrice(product.price)}
            </span>
            {product.sale && (
              <span className="text-[10px] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-sm uppercase tracking-wider">
                ¡Oportunidad!
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-2 text-[10px] font-semibold text-slate-600 uppercase tracking-wide flex flex-col gap-1">
          <p className="flex items-center gap-1">
            {product.stock !== undefined && product.stock < 5 ? (
              <>
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse"></span>
                <span className="text-red-500 font-bold">¡Últimas {product.stock} unidades!</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                Stock Disponible
              </>
            )}
          </p>
          {product.colors && product.colors.length > 0 && (
            <p>Colores: <span className="text-slate-900">{product.colors.length} disponibles</span></p>
          )}
          <p>3 CUOTAS SIN INTERÉS DE <span className="text-slate-900">${formatPrice(Math.round(product.price / 3))}</span></p>
          <p className="text-primary">15% OFF abonando con Transferencia</p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
