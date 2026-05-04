import { motion } from 'motion/react';
import { ShieldCheck, Zap, Heart, Sparkles } from 'lucide-react';

const FEATURES = [
  { icon: <ShieldCheck className="w-6 h-6" />, title: 'High Quality', desc: 'Crafted with the finest, sustainably sourced materials.' },
  { icon: <Sparkles className="w-6 h-6" />, title: 'Modern Design', desc: 'Aesthetics that define contemporary living spaces.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Fast Delivery', desc: 'Global shipping network with white-glove service.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Affordable Luxury', desc: 'Premium design accessible for the discerning home.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-900 border-t border-stone-100 dark:border-stone-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <div className="w-12 h-12 flex items-center justify-center text-gold">
                {feature.icon}
              </div>
              <h3 className="font-sans text-lg font-bold uppercase tracking-widest text-charcoal">{feature.title}</h3>
              <p className="text-stone-500 text-sm font-light leading-relaxed max-w-[200px]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
