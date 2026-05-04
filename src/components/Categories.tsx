import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CATEGORIES = [
  { name: 'Sofa', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800', count: '12 Produk' },
  { name: 'Kursi', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800', count: '24 Produk' },
  { name: 'Meja', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800', count: '08 Produk' },
  { name: 'Dekorasi', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800', count: '42 Produk' },
];

const RECOMMENDATIONS: Record<string, { base: any[], extended: any[] }> = {
  Sofa: {
    base: [
      { name: 'Velvet Emerald Sofa', image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&q=80&w=400', price: 'Rp 24.500.000' },
      { name: 'Leather Tan Classic', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=400', price: 'Rp 32.000.000' },
      { name: 'Modern Grey Sectional', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400', price: 'Rp 45.000.000' },
      { name: 'Minimalist Ivory Loveseat', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=400', price: 'Rp 18.200.000' },
    ],
    extended: [
      { name: 'Royal Blue Velvet', image: 'https://images.unsplash.com/photo-1550254478-ead40cd82477?auto=format&fit=crop&q=80&w=400', price: 'Rp 28.900.000' },
      { name: 'Charcoal Linen Suite', image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=400', price: 'Rp 21.500.000' },
      { name: 'Terracotta Modular', image: 'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&q=80&w=400', price: 'Rp 39.000.000' },
      { name: 'Arctic White Minimalist', image: 'https://images.unsplash.com/photo-1549497538-301228c965dd?auto=format&fit=crop&q=80&w=400', price: 'Rp 26.000.000' },
    ]
  },
  Kursi: {
    base: [
      { name: 'Nordic Oak Armchair', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=400', price: 'Rp 8.500.000' },
      { name: 'Velvet Shell Chair', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400', price: 'Rp 4.200.000' },
      { name: 'Industrial Iron Stool', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=400', price: 'Rp 2.800.000' },
      { name: 'Modern Recliner', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=400', price: 'Rp 15.600.000' },
    ],
    extended: [
      { name: 'Vintage Leather Wing', image: 'https://images.unsplash.com/photo-1598191950976-5008771474af?auto=format&fit=crop&q=80&w=400', price: 'Rp 11.200.000' },
      { name: 'Rattan Garden Chair', image: 'https://images.unsplash.com/photo-1519961655809-34fa156820ff?auto=format&fit=crop&q=80&w=400', price: 'Rp 3.500.000' },
    ]
  },
  Meja: {
    base: [
      { name: 'Marble Circular Table', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=400', price: 'Rp 12.500.000' },
      { name: 'Solid Walnut Desk', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=400', price: 'Rp 9.800.000' },
      { name: 'Glass Coffee Table', image: 'https://images.unsplash.com/photo-1577145789311-6627e79744f9?auto=format&fit=crop&q=80&w=400', price: 'Rp 4.500.000' },
      { name: 'Rattan Side Table', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=400', price: 'Rp 2.200.000' },
    ],
    extended: [
      { name: 'Black Granite Dining', image: 'https://images.unsplash.com/photo-1594541818219-c0707b819782?auto=format&fit=crop&q=80&w=400', price: 'Rp 18.000.000' },
      { name: 'Minimalist Bedside', image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=400', price: 'Rp 1.800.000' },
    ]
  },
  Dekorasi: {
    base: [
      { name: 'Abstract Ceramic Vase', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400', price: 'Rp 1.500.000' },
      { name: 'Brass Mirror Frame', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=400', price: 'Rp 3.200.000' },
      { name: 'Hand-woven Rug', image: 'https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&q=80&w=400', price: 'Rp 7.800.000' },
      { name: 'Minimalist Wall Clock', image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=400', price: 'Rp 1.200.000' },
    ],
    extended: [
      { name: 'Golden Table Lamp', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=400', price: 'Rp 2.500.000' },
      { name: 'Geometric Wall Art', image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=400', price: 'Rp 4.000.000' },
    ]
  }
};

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { addToCart } = useCart();

  const currentRecs = selectedCategory ? RECOMMENDATIONS[selectedCategory] : null;
  const displayedItems = currentRecs ? (showAll ? [...currentRecs.base, ...currentRecs.extended] : currentRecs.base) : [];

  const closeModal = () => {
    setSelectedCategory(null);
    setShowAll(false);
  };

  return (
    <section id="categories" className="py-24 bg-beige dark:bg-zinc-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-sans text-xs tracking-[0.4em] uppercase font-bold block mb-4">Solusi Ruang</span>
          <h2 className="font-serif text-4xl font-bold">Jelajahi Dunia Kami</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedCategory(cat.name)}
              className="group relative h-96 overflow-hidden rounded-sm cursor-pointer shadow-lg"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="font-serif text-2xl text-white font-bold mb-2">{cat.name}</h3>
                <p className="text-xs text-stone-300 uppercase tracking-widest">{cat.count}</p>
              </div>
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recommendation Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white dark:bg-zinc-900 rounded-sm overflow-hidden shadow-2xl p-8 md:p-12 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors z-10 bg-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-12">
                <span className="text-gold font-sans text-[10px] tracking-[0.4em] uppercase font-bold block mb-4">Rekomendasi Eksklusif</span>
                <h3 className="font-serif text-3xl font-bold">
                  {showAll ? `Seluruh Koleksi ${selectedCategory} Premium` : `Pilihan ${selectedCategory} Terbaik`}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {displayedItems.map((item, j) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (j % 4) * 0.1 }}
                    className="group"
                  >
                    <div className="aspect-[4/5] overflow-hidden rounded-sm bg-beige mb-4 relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                      <button 
                        onClick={() => addToCart(item)}
                        className="absolute bottom-4 right-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all"
                      >
                        <ShoppingBag className="w-4 h-4 text-charcoal" />
                      </button>
                    </div>
                    <h4 className="font-sans text-sm font-bold uppercase tracking-widest">{item.name}</h4>
                    <p className="text-gold text-xs mt-1 font-semibold">{item.price}</p>
                  </motion.div>
                ))}
              </div>

              {!showAll && currentRecs && currentRecs.extended.length > 0 && (
                <div className="mt-12 pt-8 border-t border-stone-100 dark:border-stone-800 text-center">
                  <button 
                    onClick={() => setShowAll(true)}
                    className="group flex items-center gap-4 mx-auto text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal hover:text-gold transition-colors"
                  >
                    Lihat Semua Koleksi {selectedCategory}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
