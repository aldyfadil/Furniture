import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="hero" ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center bg-beige">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Interior" 
          className="w-full h-full object-cover brightness-[0.9]"
        />
        <div className="absolute inset-0 bg-white/10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block font-sans text-xs tracking-[0.5em] uppercase text-gold mb-6 font-semibold">
              Solusi Interior Premium
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.1] font-bold text-charcoal mb-8">
              Tingkatkan <br />
              <span className="italic font-normal">Ruang Hunian Anda</span>
            </h1>
            <p className="text-stone-600 max-w-lg text-lg mb-12 font-light leading-relaxed">
              Temukan perpaduan keanggunan abadi dan keahlian modern. Aetheria menghadirkan kemewahan terkurasi ke pusat rumah Anda.
            </p>
            <div className="flex gap-6">
              <button 
                onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-charcoal text-white text-[10px] uppercase tracking-widest font-bold hover:bg-gold transition-colors shadow-xl"
              >
                Jelajahi Koleksi
              </button>
              <button className="px-8 py-4 border border-charcoal/20 text-[10px] uppercase tracking-widest font-bold hover:border-gold hover:text-gold transition-colors">
                Lihat Galeri
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 right-12 hidden md:flex flex-col items-end gap-4"
        >
          <div className="w-24 h-[1px] bg-gold" />
          <span className="text-[9px] uppercase tracking-[0.4em] text-gold font-bold">Gulir Untuk Memulai</span>
        </motion.div>
      </div>
    </section>
  );
}
