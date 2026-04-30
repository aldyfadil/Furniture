import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-black py-40 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-20">
          <div className="max-w-xl">
             <h2 className="font-serif text-[clamp(2rem,8vw,6rem)] leading-none font-black uppercase italic mb-12">
               Let's <span className="text-stroke">Elevate</span> <br /> Your Space.
             </h2>
             <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="JOURNAL ENROLLMENT" 
                  className="bg-transparent border-b border-stone-800 py-4 w-full text-xs uppercase tracking-widest focus:border-gold outline-none transition-colors"
                />
                <button className="px-8 py-4 bg-stone-100 text-black text-[10px] uppercase tracking-widest font-black hover:bg-gold transition-colors">Join</button>
             </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-8 font-bold">Navigation</p>
              <ul className="flex flex-col gap-4">
                {['Atelier', 'Collections', 'Bespoke', 'Journal'].map(item => (
                  <li key={item}><a href="#" className="text-xs uppercase tracking-widest hover:text-gold transition-colors font-medium">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-8 font-bold">Social</p>
              <ul className="flex flex-col gap-4">
                {['Instagram', 'Perspective', 'Pinterest'].map(item => (
                  <li key={item}><a href="#" className="text-xs uppercase tracking-widest hover:text-gold transition-colors font-medium">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-8 font-bold">HQ</p>
              <p className="text-xs text-stone-400 leading-relaxed uppercase tracking-widest font-medium">
                VIA TORTONA 35<br />
                MILANO, ITALY<br />
                20144
              </p>
            </div>
          </div>
        </div>

        <div className="mt-40 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-stone-900 pt-12">
           <span className="font-serif text-3xl font-black uppercase tracking-tighter">Lumina.</span>
           <span className="text-[10px] uppercase tracking-[0.5em] text-stone-600 font-bold">© 2026 LUMINA DESIGN HOUSE / ALL RIGHTS RESERVED.</span>
           <div className="flex gap-8">
             <span className="text-[10px] uppercase tracking-widest text-stone-500 hover:text-white cursor-pointer transition-colors font-medium">Privacy</span>
             <span className="text-[10px] uppercase tracking-widest text-stone-500 hover:text-white cursor-pointer transition-colors font-medium">Terms</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
