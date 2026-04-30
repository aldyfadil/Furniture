import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section id="hero" ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Cinematic Background */}
      <motion.div 
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover grayscale-[20%] brightness-75"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block font-sans text-sm tracking-[0.4em] uppercase text-stone-400 mb-6 font-medium">
            Premiere Edition / 2026
          </span>
          <h1 className="font-serif text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.95] font-black uppercase tracking-tighter mb-8 italic">
            Redefine <br />
            <span className="text-stroke">Living.</span> <br />
            Experience <br />
            <span className="text-stone-100">Design.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-24 bg-stone-500/30 overflow-hidden">
            <motion.div 
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-full h-1/2 bg-gold"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold">Scroll to Explore</span>
        </motion.div>
      </div>

      {/* Floating Elements (Atmosphere) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-amber-glow rounded-full blur-[100px] opacity-20" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-stone-500 rounded-full blur-[120px] opacity-10" />
      </div>
    </section>
  );
}
