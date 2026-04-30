import { motion } from 'motion/react';
import { Menu, Search, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-[100] px-12 py-8 flex justify-between items-center mix-blend-difference"
    >
      <div className="flex items-center gap-12">
        <Menu className="w-6 h-6 text-white cursor-pointer hover:text-gold transition-colors" />
        <div className="hidden md:flex gap-8">
          {['Collections', 'Archive', 'Studio'].map((item) => (
            <a key={item} href="#" className="text-[10px] uppercase tracking-[0.3em] text-white hover:text-gold transition-colors font-medium">
              {item}
            </a>
          ))}
        </div>
      </div>

      <a href="/" className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl font-black tracking-[-0.1em] uppercase">
        Lumina
      </a>

      <div className="flex items-center gap-8">
        <Search className="w-5 h-5 text-white cursor-pointer hover:text-gold transition-colors" />
        <div className="relative group cursor-pointer">
          <ShoppingBag className="w-5 h-5 text-white group-hover:text-gold transition-colors" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </motion.nav>
  );
}
