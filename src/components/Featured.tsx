import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const PRODUCTS = [
  {
    id: '01',
    name: 'Serene Cloud Sofa',
    category: 'Sofa',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
    price: '$2,499',
  },
  {
    id: '02',
    name: 'Nordic Oak Lounge',
    category: 'Chair',
    image: 'https://images.unsplash.com/photo-1598191950976-5008771474af?auto=format&fit=crop&q=80&w=1000',
    price: '$850',
  },
  {
    id: '03',
    name: 'Minimalist Marble Table',
    category: 'Table',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1000',
    price: '$1,200',
  },
  {
    id: '04',
    name: 'Aetheria Pendant Light',
    category: 'Decoration',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000',
    price: '$450',
  },
];

export default function Featured() {
  return (
    <section id="collections" className="py-24 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-gold font-sans text-xs tracking-[0.4em] uppercase font-bold block mb-4">Curated Selections</span>
            <h2 className="font-serif text-5xl font-bold text-charcoal">Featured Pieces</h2>
          </div>
          <p className="text-stone-500 font-light max-w-sm">Every piece is selected for its exceptional design and unrivaled craftsmanship.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-beige">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                >
                  <ShoppingBag className="w-5 h-5 text-charcoal" />
                </motion.button>
              </div>
              
              <div className="space-y-1">
                <span className="text-[10px] text-stone-400 uppercase tracking-widest">{product.category}</span>
                <h3 className="font-sans text-lg font-medium text-charcoal group-hover:text-gold transition-colors">{product.name}</h3>
                <p className="text-gold font-semibold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
