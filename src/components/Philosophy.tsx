import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="studio" ref={containerRef} className="relative min-h-screen py-40 bg-stone-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div style={{ scale }}>
              <div className="relative aspect-[4/5] overflow-hidden border border-stone-800">
                <img 
                  src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
              </div>
            </motion.div>
            
            <motion.div 
              style={{ y }}
              className="absolute -bottom-10 -right-10 w-2/3 aspect-square glass p-1 hidden lg:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" 
                alt="Detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-1" />

          <div className="lg:col-span-6">
            <span className="font-sans text-xs tracking-[0.5em] uppercase text-gold mb-8 block font-bold">The Core Ideology</span>
            <h2 className="font-serif text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-12 tracking-tighter italic">
              Where <span className="text-stroke">Form</span> <br />
              Defies <span className="text-white">Function.</span>
            </h2>
            <div className="flex flex-col gap-8 max-w-lg">
              <p className="text-stone-400 font-sans text-lg leading-relaxed font-light">
                We design for the spaces between light and shadow. Our pieces are more than furniture; they are sculptural interventions that redefine the relationship between architecture and comfort.
              </p>
              <div className="h-[1px] w-full bg-stone-800" />
              <div className="flex gap-12">
                <div>
                    <h4 className="font-serif text-3xl mb-2 italic">01 /</h4>
                    <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Futuristic Architecture</p>
                </div>
                <div>
                    <h4 className="font-serif text-3xl mb-2 italic">02 /</h4>
                    <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Digital Craftsmanship</p>
                </div>
              </div>
              <motion.button 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 mt-8 group"
              >
                <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center group-hover:border-gold transition-colors">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] font-bold">Read our Manifesto</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
