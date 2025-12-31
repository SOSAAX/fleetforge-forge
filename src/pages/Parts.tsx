import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Package, Upload, Truck, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SectionHeader } from '@/components/ui/section-header';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/ui/hero-section';
import { TrustBadges } from '@/components/ui/trust-badges';
import { useCart, Product } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

import partsWarehouseImage from '@/assets/hero/parts-warehouse.jpg';
import bumperImage from '@/assets/products/bumper.png';
import headlightRightImage from '@/assets/products/headlight-right.png';
import headlightLeftImage from '@/assets/products/headlight-left.png';

const products: Product[] = [
  {
    id: 'bumper-isuzu-gmc',
    name: 'Front Bumper – Isuzu NPR/NQR/NRR + GMC W-Series',
    price: 660,
    partNumber: 'Available on request',
    image: bumperImage,
    stripeLink: 'https://buy.stripe.com/14AdRabhZ6BG0qWbVebjW00',
  },
  {
    id: 'headlight-right-international',
    name: 'International Headlight Assembly (Right)',
    price: 440,
    partNumber: '4121490C94',
    image: headlightRightImage,
    stripeLink: 'https://buy.stripe.com/eVq00k1Hp3pu2z49N6bjW01',
  },
  {
    id: 'headlight-left-international',
    name: 'International Headlight Assembly (Left)',
    price: 512,
    partNumber: '4121489C94',
    image: headlightLeftImage,
    stripeLink: 'https://buy.stripe.com/cNi14o71J6BGgpU5wQbjW02',
  },
];

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    toast({
      title: 'Added to Cart',
      description: `${quantity}x ${product.name} added to your cart.`,
    });
    setQuantity(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-elevated overflow-hidden group"
    >
      <div className="aspect-[4/3] bg-secondary/30 p-4 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          Part #: {product.partNumber}
        </p>
        <p className="text-2xl font-bold text-primary mb-4">
          ${product.price.toFixed(2)}
        </p>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center border border-border rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-secondary transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center font-medium text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-secondary transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <Button
          variant="hero"
          className="w-full"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};

export default function Parts() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePartRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Part Request Submitted',
      description: "We'll contact you with availability and pricing soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <HeroSection
        backgroundImage={partsWarehouseImage}
        badge="Parts & Supplies"
        title={
          <>
            Quality Parts,{' '}
            <span className="text-gradient-orange">Fast Delivery</span>
          </>
        }
        subtitle="Shop our in-stock parts or request any part with VIN-based accuracy. We source OEM and aftermarket parts for all major truck brands."
      >
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button variant="hero" size="lg" asChild>
            <a href="#in-stock">Shop In-Stock Parts</a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#request-part" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Request Custom Part
            </a>
          </Button>
        </div>
        <TrustBadges variant="compact" />
      </HeroSection>

      {/* In-Stock Parts */}
      <section className="py-20" id="in-stock">
        <div className="section-container">
          <SectionHeader
            badge="In-Stock"
            title="Buy Online Now"
            subtitle="These parts are in stock and ready to ship."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="text-muted-foreground mb-4">
              Don't see what you need? We can source almost any part.
            </p>
            <Button variant="outline" asChild>
              <a href="#request-part">Request a Part Quote</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Request Any Part */}
      <section className="py-20 bg-gradient-card border-y border-border" id="request-part">
        <div className="section-container">
          <SectionHeader
            badge="Custom Request"
            title="Request Any Part"
            subtitle="Can't find what you need? We can source it for you."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="card-elevated p-8">
              <form onSubmit={handlePartRequest} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact_name">Contact Name *</Label>
                    <Input id="contact_name" name="contact_name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company_name">Company Name</Label>
                    <Input id="company_name" name="company_name" placeholder="Optional" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="(555) 555-5555" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    Vehicle Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="vin">VIN (Optional)</Label>
                      <Input id="vin" name="vin" placeholder="For accurate part matching" />
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="year">Year *</Label>
                        <Input id="year" name="year" required placeholder="e.g., 2019" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="make">Make *</Label>
                        <Input id="make" name="make" required placeholder="e.g., International" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="model">Model *</Label>
                        <Input id="model" name="model" required placeholder="e.g., 4300" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary" />
                    Part Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="part_needed">Part Needed *</Label>
                      <Input id="part_needed" name="part_needed" required placeholder="Describe the part you need" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency</Label>
                        <Select name="urgency">
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard (3-5 days)</SelectItem>
                            <SelectItem value="urgent">Urgent (1-2 days)</SelectItem>
                            <SelectItem value="emergency">Emergency (Same day)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="delivery">Delivery Preference</Label>
                        <Select name="delivery">
                          <SelectTrigger>
                            <SelectValue placeholder="Select delivery" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pickup">Pickup</SelectItem>
                            <SelectItem value="delivery">Local Delivery</SelectItem>
                            <SelectItem value="ship">Ship to Address</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        placeholder="Any additional details about the part or your needs..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Photo Upload (Optional)</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PNG, JPG up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Part Request'}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Typical response time: Within 2 hours during business hours
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Help Finding a Part?
            </h2>
            <p className="text-muted-foreground mb-8">
              Call us directly and we'll help you find exactly what you need.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="tel:5712062249" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (571) 206-2249
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
