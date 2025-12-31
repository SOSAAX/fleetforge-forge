import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  Droplets,
  Shield,
  Package,
  Zap,
  CircleDot,
  Settings,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SectionHeader } from '@/components/ui/section-header';
import { Layout } from '@/components/layout/Layout';
import { useToast } from '@/hooks/use-toast';

const serviceCategories = [
  {
    icon: Wrench,
    title: 'Diagnostics & Minor Repairs',
    description: 'On-site troubleshooting and repairs to get you back on the road.',
    items: [
      'Electrical system diagnostics',
      'Check engine light diagnosis',
      'Brake inspections and adjustments',
      'Air system troubleshooting',
      'Basic mechanical repairs',
      'Lighting and wiring fixes',
      'Battery testing and replacement',
      'Starter and alternator service',
    ],
  },
  {
    icon: Shield,
    title: 'Preventative Maintenance (PM)',
    description: 'Keep your fleet compliant and running efficiently.',
    items: [
      'Oil and filter changes',
      'Fuel filter replacement',
      'Air filter service',
      'DOT inspections',
      'Fluid level checks and top-offs',
      'Belt and hose inspections',
      'Tire pressure checks',
      'PM scheduling and tracking',
    ],
  },
  {
    icon: Droplets,
    title: 'Detailing Services',
    description: 'Professional cleaning to maintain your fleet\'s image.',
    items: [
      'Exterior truck wash',
      'Interior cab cleaning',
      'Trailer washouts',
      'Engine bay degreasing',
      'Aluminum polishing',
      'Chrome detailing',
      'Fleet wash programs',
      'Custom detailing packages',
    ],
  },
  {
    icon: Package,
    title: 'Parts Sourcing',
    description: 'Quality parts delivered fast with VIN-accurate matching.',
    items: [
      'OEM parts sourcing',
      'Aftermarket alternatives',
      'Hard-to-find parts',
      'VIN-based part matching',
      'Same-day availability',
      'Competitive pricing',
      'Warranty support',
      'Direct delivery to your location',
    ],
  },
];

export default function Services() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Service Request Submitted",
      description: "We'll get back to you within 30 minutes during business hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero-pattern">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Professional Mobile{' '}
              <span className="text-gradient-orange">Truck Service</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From quick repairs to comprehensive maintenance programs, we bring expert service directly to your location.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24">
        <div className="section-container">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-8 items-start"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </div>
                <div className={`card-elevated p-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="py-24 bg-gradient-card border-y border-border" id="request-service">
        <div className="section-container">
          <SectionHeader
            badge="Request Service"
            title="Get Started Today"
            subtitle="Fill out the form below and we'll contact you promptly."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="card-elevated p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="(555) 555-5555" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" name="company" placeholder="Your company" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location/City *</Label>
                  <Input id="location" name="location" required placeholder="e.g., Ashburn, VA" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed *</Label>
                  <Input id="service" name="service" required placeholder="e.g., Brake repair, PM service" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Describe your issue or request in detail..."
                  />
                </div>

                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Typical response time:</strong> We respond to service requests within 30 minutes during business hours (7 AM - 9 PM).
                  </p>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Service Request'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Service Now?
            </h2>
            <p className="text-muted-foreground mb-8">
              Call or text us directly for the fastest response.
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
