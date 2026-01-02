import { useRef, useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Package, Upload, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SectionHeader } from '@/components/ui/section-header';
import { Layout } from '@/components/layout/Layout';
import { useCart, Product } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

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
    for (let i = 0; i < quantity; i++) addItem(product);

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
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">Part #: {product.partNumber}</p>
        <p className="text-2xl font-bold text-primary mb-4">${product.price.toFixed(2)}</p>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center border border-border rounded-lg">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-secondary transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-secondary transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <Button variant="hero" className="w-full" onClick={handleAddToCart}>
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};

function encodeForm(formData: FormData) {
  const params = new URLSearchParams();
  for (const [key, value] of formData.entries()) {
    if (typeof value === 'string') params.append(key, value);
  }
  return params.toString();
}

export default function Parts() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [urgency, setUrgency] = useState('');
  const [delivery, setDelivery] = useState('');

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileLabel, setFileLabel] = useState<string>('Click to upload or drag and drop');

  const handlePartRequest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Extra-safe: ensure form-name exists in the payload
    formData.set('form-name', 'parts-request');

    // Ensure shadcn values are in payload
    formData.set('urgency', urgency);
    formData.set('delivery', delivery);

    const photo = formData.get('photo');
    const hasFile = photo instanceof File && photo.size > 0;

    try {
      if (hasFile) {
        // multipart (file upload)
        const res = await fetch('/', { method: 'POST', body: formData });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        // urlencoded (no file)
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encodeForm(formData),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      }

      toast({
        title: 'Part Request Submitted',
        description: "We got it — we'll contact you with availability and pricing soon.",
      });

      form.reset();
      setUrgency('');
      setDelivery('');
      setFileLabel('Click to upload or drag and drop');
    } catch {
      toast({
        title: 'Submission failed',
        description: 'Please try again or call/text us at (571) 206-2249.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-hero-pattern">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              Parts & Supplies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Quality Parts, <span className="text-gradient-orange">Fast Delivery</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Shop our in-stock parts or request any part with VIN-based accuracy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <SectionHeader badge="In-Stock" title="Buy Online Now" subtitle="These parts are in stock and ready to ship." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-card border-y border-border" id="request-part">
        <div className="section-container">
          <SectionHeader badge="Custom Request" title="Request Any Part" subtitle="Can't find what you need? We can source it for you." />

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <div className="card-elevated p-8">
              <form
                name="parts-request"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                encType="multipart/form-data"
                onSubmit={handlePartRequest}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="parts-request" />
                <p className="hidden">
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <input type="hidden" name="urgency" value={urgency} />
                <input type="hidden" name="delivery" value={delivery} />

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
                        <Label>Urgency</Label>
                        <Select value={urgency} onValueChange={setUrgency}>
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
                        <Label>Delivery Preference</Label>
                        <Select value={delivery} onValueChange={setDelivery}>
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
                      <Textarea id="notes" name="notes" rows={3} placeholder="Any additional details..." />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="photo">Photo Upload (Optional)</Label>

                      <input
                        ref={fileInputRef}
                        id="photo"
                        name="photo"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          setFileLabel(f ? f.name : 'Click to upload or drag and drop');
                        }}
                      />

                      <div
                        onClick={() => fileInputRef.current?.click()}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click();
                        }}
                        className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                        role="button"
                        tabIndex={0}
                      >
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">{fileLabel}</p>
                        <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Part Request'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
