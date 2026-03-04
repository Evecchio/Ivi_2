import React from 'react';
import { Star, ShoppingCart, Truck, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const RELATED_PRODUCTS = [
  {
    id: '5',
    name: 'CALZA CORTA BIKER',
    price: 25990,
    category: 'Shorts',
    image: 'https://picsum.photos/seed/biker/600/800',
  },
  {
    id: '6',
    name: 'TOP DEPORTIVO SEAMLESS',
    price: 19990,
    category: 'Tops',
    image: 'https://picsum.photos/seed/top3/600/800',
  },
  {
    id: '7',
    name: 'MEDIAS DEPORTIVAS X3',
    price: 8500,
    category: 'Accesorios',
    image: 'https://picsum.photos/seed/medias/600/800',
  },
  {
    id: '8',
    name: 'CAMPERA DEPORTIVA LIVIANA',
    price: 55990,
    category: 'Camperas',
    image: 'https://picsum.photos/seed/campera2/600/800',
  },
];

export default function ProductDetail() {
  const formatPrice = (price: number) => {
    return price.toLocaleString('es-AR');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 w-full">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-slate-500 mb-8 uppercase tracking-widest">
        <a href="/" className="hover:text-primary">Inicio</a>
        <ChevronRight className="w-3 h-3" />
        <a href="/collection" className="hover:text-primary">Tops</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-900">Top c/Frunce</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="lg:col-span-7 space-y-3">
          <div className="aspect-[3/4] overflow-hidden bg-slate-100">
            <img
              src="https://picsum.photos/seed/top1/800/1200"
              alt="Top Deportivo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden cursor-pointer hover:opacity-80 transition-opacity bg-slate-100">
                <img
                  src={`https://picsum.photos/seed/top1-${i}/400/533`}
                  alt={`Detail ${i}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-2 uppercase tracking-tight">TOP C/FRUNCE EN DELANTERO TERCIOPELO</h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-primary">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">124 Opiniones</span>
            </div>
          </div>

          <div className="py-4 border-y border-slate-100">
            <div className="flex flex-col gap-2 mb-1">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-red-600">${formatPrice(23990)}</span>
                <span className="text-lg line-through text-slate-400">${formatPrice(39990)}</span>
                <span className="bg-red-600 text-white text-xs font-black px-2 py-1 uppercase tracking-wider ml-2">
                  40% OFF
                </span>
                <span className="bg-primary text-white text-xs font-black px-2 py-1 uppercase tracking-wider">
                  Ahorrás ${formatPrice(39990 - 23990)}!
                </span>
              </div>
              <div>
                <span className="text-xs font-bold bg-red-100 text-red-700 px-2 py-1 rounded-sm uppercase tracking-wider inline-block">
                  ¡Oportunidad!
                </span>
              </div>
            </div>
            <p className="text-slate-600 font-semibold text-xs uppercase tracking-widest mt-4">
              3 CUOTAS SIN INTERÉS DE <span className="text-slate-900">${formatPrice(7996)}</span>
            </p>
            <a href="#" className="text-primary text-xs font-bold underline underline-offset-2 mt-1 inline-block">Ver medios de pago</a>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3 text-slate-900">Color: <span className="text-slate-500">Rosa Viejo</span></p>
              <div className="flex gap-3">
                <button className="w-8 h-8 rounded-full border-2 border-primary bg-[#d8a1a1] ring-2 ring-transparent ring-offset-2 hover:ring-primary transition-all"></button>
                <button className="w-8 h-8 rounded-full border border-slate-200 bg-black hover:border-slate-400 transition-all"></button>
                <button className="w-8 h-8 rounded-full border border-slate-200 bg-slate-400 hover:border-slate-500 transition-all"></button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-900">Talle</p>
                <a href="#" className="text-xs text-primary font-bold underline underline-offset-2">Guía de talles</a>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className={`py-3 rounded border text-sm font-bold transition-all ${
                      size === 'M' ? 'border-slate-900 text-slate-900 bg-slate-50' : 'border-slate-200 text-slate-600 hover:border-slate-900 hover:text-slate-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded text-sm uppercase tracking-widest transition-all hover:bg-primary flex items-center justify-center gap-3">
                <ShoppingCart className="w-5 h-5" />
                AGREGAR AL CARRITO
              </button>
            </div>

            <div className="bg-slate-50 p-5 rounded border border-slate-100 space-y-4 mt-4">
              <div className="flex gap-4 items-start">
                <Truck className="text-slate-900 w-5 h-5 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-2">Medios de envío</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Tu código postal"
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded focus:ring-1 focus:ring-primary focus:border-primary bg-white"
                    />
                    <button className="bg-slate-200 text-slate-900 text-xs font-bold px-4 rounded hover:bg-slate-300 transition-colors uppercase">Calcular</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-16 border-t border-slate-100 pt-12">
        <div className="flex gap-8 border-b border-slate-100 mb-8 overflow-x-auto hide-scrollbar">
          <button className="pb-4 border-b-2 border-slate-900 font-bold text-slate-900 uppercase tracking-widest text-xs whitespace-nowrap">
            Descripción
          </button>
          <button className="pb-4 border-b-2 border-transparent font-bold text-slate-400 uppercase tracking-widest text-xs whitespace-nowrap hover:text-slate-900 transition-colors">
            Detalles y Cuidados
          </button>
          <button className="pb-4 border-b-2 border-transparent font-bold text-slate-400 uppercase tracking-widest text-xs whitespace-nowrap hover:text-slate-900 transition-colors">
            Opiniones (124)
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              Top deportivo con frunce en el delantero, confeccionado en tela símil terciopelo de alta elasticidad. Ideal para entrenamientos de bajo y medio impacto, o para un look athleisure cómodo y con estilo. Su diseño se adapta perfectamente al cuerpo brindando soporte y libertad de movimiento.
            </p>
            <ul className="space-y-2 text-sm text-slate-600 mt-4">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> 85% Poliéster, 15% Elastano</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> Tela transpirable y de secado rápido</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> Costuras planas para evitar roces</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> Protección UV 50+</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-24 pb-12">
        <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 text-slate-900">COMPLETÁ TU LOOK</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
          {RELATED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product as any} />
          ))}
        </div>
      </section>
    </div>
  );
}
