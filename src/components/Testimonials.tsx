import { motion } from 'motion/react';

const REVIEWS = [
  {
    author: 'Elena Rossi',
    role: 'Architect / Milano',
    text: "Lumina doesn't just make furniture; they craft poetry in concrete and light. Every piece is a structural masterpiece.",
  },
  {
    author: 'Julian Thorne',
    role: 'Interior Curator',
    text: "The brutalist minimalism combined with futuristic warmth is exactly what the modern era of design demanded.",
  },
  {
    author: 'Aria Vane',
    role: 'Creative Director',
    text: "Their vision of the future is hauntingly beautiful. The texture and lighting in their bespoke collection is unmatched.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-40 bg-stone-950 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-stone-900 border border-stone-900">
           {REVIEWS.map((review, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.2 }}
               viewport={{ once: true }}
               className="bg-black p-12 flex flex-col justify-between h-[400px]"
             >
               <div>
                  <span className="text-gold font-serif text-4xl italic">“</span>
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-stone-300 mt-4">
                    {review.text}
                  </p>
               </div>
               <div>
                  <p className="font-sans text-xs tracking-[0.2em] font-bold uppercase">{review.author}</p>
                  <p className="text-[10px] text-stone-500 uppercase tracking-widest mt-1 font-medium">{review.role}</p>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
