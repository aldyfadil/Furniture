import { motion, AnimatePresence } from 'motion/react';
import { Menu, Search, ShoppingBag, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-8">
        <Menu className="w-5 h-5 cursor-pointer hover:text-gold transition-colors" />
        <div className="hidden lg:flex gap-8">
          {[
            { name: 'Koleksi', href: '#collections' },
            { name: 'Tentang Kami', href: '#about' },
            { name: 'Kategori', href: '#categories' }
          ].map((item) => (
            <a key={item.name} href={item.href} className="text-[10px] uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors">
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <a href="/" className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl font-bold tracking-tight uppercase">
        Aetheria
      </a>

      <div className="flex items-center gap-6">
        <button onClick={toggleDark} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        <Search className="w-4 h-4 cursor-pointer hover:text-gold transition-colors" />
        <div className="relative group cursor-pointer">
          <ShoppingBag className="w-4 h-4 group-hover:text-gold transition-colors" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </motion.nav>
  );
}
