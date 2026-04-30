/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Philosophy from './components/Philosophy';
import ExperienceSection from './components/ExperienceSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative bg-black min-h-screen">
        <div className="grain" aria-hidden="true" />
        <CustomCursor />
        <Navbar />
        
        <main>
          <Hero />
          <Featured />
          <Philosophy />
          <ExperienceSection />
          <Testimonials />
          
          {/* Final CTA Section */}
          <section className="relative py-40 flex flex-col items-center justify-center overflow-hidden bg-black">
             <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gold/10 rounded-full blur-[120px]" />
             </div>
             
             <div className="relative z-10 text-center px-6">
                <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-stone-500 mb-8 block font-bold">Limited Availability</span>
                <h2 className="font-serif text-[clamp(2.5rem,10vw,8rem)] leading-[0.8] font-black uppercase mb-12 italic">
                  Own <span className="text-stroke">The</span> <br />
                  Future <span className="text-white">Now.</span>
                </h2>
                <button className="px-12 py-5 bg-gold text-black text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_50px_rgba(212,175,55,0.3)]">
                  Enter The Collective
                </button>
             </div>
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
