import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    author: 'Sarah Jenkins',
    role: 'Desainer Interior',
    text: "Aetheria Furniture menghadirkan tingkat kecanggihan yang belum pernah saya lihat di tempat lain. Kualitas bahan mereka benar-benar premium.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    author: 'David Chen',
    role: 'Arsitek',
    text: "Pendekatan minimalis yang dipadukan dengan keanggunan fungsional membuat setiap unit menjadi bahan pembicaraan di proyek saya.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    author: 'Emma Wilson',
    role: 'Pemilik Rumah',
    text: "Saya mengubah ruang tamu saya dengan Sofa Awan Serene. Ini bukan sekadar furnitur; ini adalah mahakarya kenyamanan.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-sans text-xs tracking-[0.4em] uppercase font-bold block mb-4">Pengalaman Klien</span>
          <h2 className="font-serif text-4xl font-bold">Dipercaya oleh Desainer</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {REVIEWS.map((review, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-8 border border-stone-100 dark:border-stone-800 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-500"
             >
               <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                  ))}
               </div>
               <p className="text-stone-600 dark:text-stone-400 italic mb-8 font-light leading-relaxed">"{review.text}"</p>
               <div className="flex items-center gap-4">
                  <img src={review.image} alt={review.author} className="w-12 h-12 rounded-full object-cover grayscale" />
                  <div>
                    <p className="font-sans text-sm font-bold uppercase">{review.author}</p>
                    <p className="text-[10px] text-stone-400 uppercase tracking-widest">{review.role}</p>
                  </div>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
