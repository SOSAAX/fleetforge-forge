import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { useCart } from '@/contexts/CartContext';

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotal, processingFee, total, clearCart } = useCart();

  // Build Stripe checkout URL with line items
  // For simplicity, we'll redirect to the first item's Stripe link if single item
  // For multiple items, we'd need a Stripe session - for now, show individual checkout links
  const handleCheckout = () => {
    // If cart has items, we'll open Stripe checkout
    // For a real implementation, you'd create a Stripe session on the backend
    // For now, we redirect to individual product pages
    if (items.length === 1) {
      window.open(items[0].stripeLink, '_blank');
    } else {
      // For multiple items, show individual links or implement session-based checkout
      alert('For orders with multiple items, please contact us directly or purchase items individually.');
    }
  };

  if (items.length === 0) {
    return (
      <Layout>
        <section className="pt-32 pb-24 min-h-[80vh]">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-md mx-auto"
            >
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-10 h-10 text-muted-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8">
                Browse our parts catalog to find what you need.
              </p>
              <Button variant="hero" asChild>
                <Link to="/parts">Shop Parts</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/parts"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Your Cart</h1>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="card-elevated p-4 flex gap-4"
                  >
                    <div className="w-24 h-24 bg-secondary/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Part #: {item.partNumber}
                      </p>
                      <p className="text-lg font-bold text-primary">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-medium text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="card-elevated p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-foreground">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Processing & Handling</span>
                      <span>${processingFee.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between text-lg font-bold text-foreground">
                        <span>Total</span>
                        <span className="text-primary">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {items.length === 1 ? (
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full"
                      onClick={() => window.open(items[0].stripeLink, '_blank')}
                    >
                      <CreditCard className="w-4 h-4" />
                      Proceed to Checkout
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground text-center mb-3">
                        Checkout each item individually:
                      </p>
                      {items.map((item) => (
                        <Button
                          key={item.id}
                          variant="outline"
                          size="sm"
                          className="w-full text-left justify-start"
                          onClick={() => window.open(item.stripeLink, '_blank')}
                        >
                          <CreditCard className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="truncate">{item.name}</span>
                        </Button>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Secure checkout powered by Stripe
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
