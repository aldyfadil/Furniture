import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const PRODUCTS = [
  {
    id: '01',
    name: 'Sofa Awan Serene',
    category: 'Sofa',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
    price: 'Rp 38.500.000',
  },
  {
    id: '02',
    name: 'Kursi Kayu Nordic',
    category: 'Kursi',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1000',
    price: 'Rp 12.800.000',
  },
  {
    id: '03',
    name: 'Meja Marmer Minimalis',
    category: 'Meja',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1000',
    price: 'Rp 18.200.000',
  },
  {
    id: '04',
    name: 'Lampu Gantung Aetheria',
    category: 'Dekorasi',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000',
    price: 'Rp 6.900.000',
  },
];

export default function Featured() {
  return (
    <section id="collections" className="py-24 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-gold font-sans text-xs tracking-[0.4em] uppercase font-bold block mb-4">Pilihan Terkurasi</span>
            <h2 className="font-serif text-5xl font-bold text-charcoal">Koleksi Unggulan</h2>
          </div>
          <p className="text-stone-500 font-light max-w-sm">Setiap unit dipilih karena desainnya yang luar biasa dan pengerjaan yang tak tertandingi.</p>
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
