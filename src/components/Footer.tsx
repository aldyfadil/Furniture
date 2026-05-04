import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-beige dark:bg-zinc-900 py-24 border-t border-stone-200 dark:border-stone-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <a href="/" className="font-serif text-4xl font-bold tracking-tight uppercase">Aetheria</a>
            <p className="text-stone-500 max-w-sm font-light leading-relaxed">
              Merancang desain furnitur premium yang memadukan kemewahan dengan minimalisme modern untuk gaya hidup kontemporer Anda.
            </p>
            <div className="flex gap-6">
               <Instagram className="w-5 h-5 cursor-pointer hover:text-gold transition-colors" />
               <Twitter className="w-5 h-5 cursor-pointer hover:text-gold transition-colors" />
               <Facebook className="w-5 h-5 cursor-pointer hover:text-gold transition-colors" />
            </div>
          </div>

          <div>
             <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal mb-8">Navigasi</h4>
             <ul className="space-y-4">
                {['Koleksi', 'Tentang Kami', 'Bespoke', 'Jurnal'].map(item => (
                  <li key={item}><a href="#" className="text-sm font-light hover:text-gold transition-colors">{item}</a></li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal mb-8">Dukungan</h4>
             <ul className="space-y-4">
                {['Pengiriman', 'Pengembalian', 'Kebijakan Privasi', 'Kontak'].map(item => (
                  <li key={item}><a href="#" className="text-sm font-light hover:text-gold transition-colors">{item}</a></li>
                ))}
             </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400">© 2026 Aetheria Furniture. Hak Cipta Dilindungi Undang-Undang.</span>
          <div className="flex gap-8">
             <span className="text-[10px] uppercase tracking-widest text-stone-400">Milano / Paris / London</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
