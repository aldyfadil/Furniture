import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const PRODUCTS = [
  {
    id: '01',
    name: 'Brutalist Void Chair',
    category: 'Seating',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800',
    price: '$4,200',
  },
  {
    id: '02',
    name: 'Orbital Lounge',
    category: 'Living',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ad5?auto=format&fit=crop&q=80&w=800',
    price: '$6,800',
  },
  {
    id: '03',
    name: 'Monolith Table',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1577145789311-6627e79744f9?auto=format&fit=crop&q=80&w=800',
    price: '$9,500',
  },
  {
    id: '04',
    name: 'Echo Sconce',
    category: 'Lighting',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    price: '$1,200',
  },
];

export default function Featured() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-stone-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-20 left-20 z-20">
          <h2 className="font-serif text-8xl font-black uppercase text-stone-800 leading-none opacity-20 select-none">Featured</h2>
          <p className="font-sans text-xs tracking-[0.5em] uppercase mt-4 text-gold font-bold">Curated Selections</p>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-20">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              className="group relative w-[30vw] min-w-[400px] aspect-[4/5] overflow-hidden bg-stone-900 border border-stone-800/50"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 z-10 transition-colors duration-500 group-hover:bg-black/40" />
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform transition-transform duration-500 group-hover:-translate-y-4">
                <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-stone-400 mb-2 block">{product.id} / {product.category}</span>
                <h3 className="font-serif text-3xl font-medium mb-4">{product.name}</h3>
                <div className="flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                   <button className="px-6 py-2 border border-white text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors">Discover</button>
                   <span className="text-gold font-sans text-sm font-light">{product.price}</span>
                </div>
              </div>

              {/* Light reflection effect */}
              <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
                <motion.div 
                  className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 transform -translate-x-full"
                  animate={{
                    translateX: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
