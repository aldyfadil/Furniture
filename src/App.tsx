/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import AboutUs from './components/Philosophy';
import Categories from './components/Categories';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative bg-white dark:bg-zinc-900 min-h-screen text-charcoal">
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        
        <main>
          <Hero />
          
          {/* About Us Preview */}
          <AboutUs />

          {/* Featured Collections */}
          <Featured />
          
          {/* Product Categories */}
          <Categories />

          {/* Value Props */}
          <WhyChooseUs />

          {/* Social Proof */}
          <Testimonials />
          
          {/* Final CTA Section */}
          <section className="relative py-32 flex flex-col items-center justify-center overflow-hidden bg-beige dark:bg-zinc-800">
             <div className="relative z-10 text-center px-6">
                <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-stone-500 mb-8 block font-bold italic">Keunggulan Terkurasi</span>
                <h2 className="font-serif text-[clamp(2.5rem,8vw,5rem)] leading-tight font-bold text-charcoal mb-12">
                  Ubah Rumah <br />
                  <span className="text-gold italic font-normal">Anda Hari Ini</span>
                </h2>
                <button className="px-12 py-5 bg-charcoal text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gold transition-all transform hover:scale-105 shadow-xl">
                  Belanja Semua Koleksi
                </button>
             </div>

             <div className="absolute bottom-0 right-0 w-1/3 opacity-10">
                <p className="text-[20vh] font-serif font-black leading-none uppercase select-none translate-y-1/2">Rumah</p>
             </div>
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
