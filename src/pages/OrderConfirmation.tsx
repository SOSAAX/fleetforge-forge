import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export default function OrderConfirmation() {
  return (
    <Layout>
      <section className="pt-32 pb-24 min-h-[80vh]">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thank You for Your Order!
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              Your order has been confirmed and is being processed.
            </p>

            <div className="card-elevated p-6 mb-8 text-left">
              <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                What's Next?
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>You will receive your receipt and invoice by email shortly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>We'll contact you if we need any additional information.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Your order will be prepared and shipped within 1-2 business days.</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="hero" asChild>
                <Link to="/parts">Continue Shopping</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">Return Home</Link>
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              <p className="mb-2">Questions about your order?</p>
              <a
                href="tel:5712062249"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Phone className="w-4 h-4" />
                (571) 206-2249
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
