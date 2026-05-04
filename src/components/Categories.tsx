import { motion } from 'motion/react';

const CATEGORIES = [
  { name: 'Sofa', image: 'https://images.unsplash.com/photo-1550254478-ead40cd82477?auto=format&fit=crop&q=80&w=800', count: '12 Pieces' },
  { name: 'Chair', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800', count: '24 Pieces' },
  { name: 'Table', image: 'https://images.unsplash.com/photo-1577145789311-6627e79744f9?auto=format&fit=crop&q=80&w=800', count: '08 Pieces' },
  { name: 'Decoration', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800', count: '42 Pieces' },
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-beige dark:bg-zinc-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-sans text-xs tracking-[0.4em] uppercase font-bold block mb-4">Space Solutions</span>
          <h2 className="font-serif text-4xl font-bold">Explore Our World</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
    </section>
  );
}
