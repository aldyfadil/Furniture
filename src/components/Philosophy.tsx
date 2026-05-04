import { motion } from 'motion/react';
import { Award, Shield, Truck } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-beige dark:bg-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=1000" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square glass rounded-sm p-4 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&q=80&w=800" 
                alt="Detail" 
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <span className="text-gold font-sans text-xs tracking-[0.4em] uppercase font-bold block mb-4">Our Heritage</span>
              <h2 className="font-serif text-5xl font-bold leading-tight text-charcoal">Redefining Modern Living Through Craftsmanship</h2>
              <p className="text-stone-600 mt-8 text-lg font-light leading-relaxed">
                Aetheria was born from a passion for architecture and a desire to bring soulful design into every home. We believe that furniture is more than just objects; they are the foundation of your daily experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <Award className="w-8 h-8 text-gold" />, title: 'Premium Quality', desc: 'Sourced from the finest sustainable materials.' },
                { icon: <Shield className="w-8 h-8 text-gold" />, title: 'Timeless Design', desc: 'Aesthetic that transcends fleeting trends.' },
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-16 h-16 bg-white dark:bg-zinc-700 rounded-full flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                  <h4 className="font-sans text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-stone-500 font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal hover:text-gold transition-colors">
              Find out more
              <div className="w-10 h-[1px] bg-charcoal group-hover:bg-gold transition-all group-hover:w-16" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
