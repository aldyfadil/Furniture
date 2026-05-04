import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, totalPrice } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[3000] overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-zinc-900 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-gold" />
                <h2 className="font-serif text-xl font-bold uppercase tracking-tight">Keranjang Anda</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-stone-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingBag className="w-12 h-12 mb-4" />
                  <p className="font-light">Keranjang Anda kosong.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-24 bg-beige dark:bg-zinc-800 rounded-sm overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-sans text-[10px] uppercase tracking-widest font-bold">{item.name}</h3>
                        <p className="text-gold text-xs font-semibold mt-1">{item.price}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-stone-200 dark:border-stone-700 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-gold transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:text-gold transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-stone-100 dark:border-stone-800 space-y-6 bg-stone-50/50 dark:bg-zinc-800/50">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">Total Pembayaran</span>
                  <span className="font-serif text-xl font-bold">{formatPrice(totalPrice)}</span>
                </div>
                <button className="w-full py-4 bg-charcoal text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gold transition-colors shadow-lg">
                  Lanjutkan ke Pembayaran
                </button>
                <p className="text-[9px] text-center text-stone-400 uppercase tracking-widest leading-loose">
                  Pengiriman gratis untuk pesanan di atas Rp 50.000.000
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
