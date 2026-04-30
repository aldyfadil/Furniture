import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['inset(20% 10% 20% 10%)', 'inset(0% 0% 0% 0%)', 'inset(10% 5% 10% 5%)']
  );

  return (
    <section ref={ref} className="relative h-[150vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ clipPath }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=2000" 
            alt="Experience" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-tight max-w-4xl">
              Immersion in <br />
              <span className="text-stroke">Digital Geometry.</span>
            </h2>
            <p className="font-sans text-xs tracking-[0.6em] uppercase mt-12 text-stone-300 font-bold">A Sensory Architecture</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
