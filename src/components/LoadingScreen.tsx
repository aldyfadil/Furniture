import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            className="h-[1px] bg-gold mb-8"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-2xl font-bold tracking-tighter uppercase"
          >
            Aetheria
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.5 }}
            className="text-[8px] uppercase tracking-[0.5em] mt-4 font-bold"
          >
            Curating Elegance
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
