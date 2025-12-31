import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Wrench,
  Droplets,
  Package,
  Phone,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SectionHeader } from '@/components/ui/section-header';
import { Layout } from '@/components/layout/Layout';
import { useToast } from '@/hooks/use-toast';

import repairImage from '@/assets/services/repair.jpg';
import detailingImage from '@/assets/services/detailing.jpg';
import partsImage from '@/assets/services/parts.jpg';

const serviceCategories = [
  {
    id: 'repair',
    icon: Wrench,
    title: 'Truck Repair & Maintenance',
    subtitle: 'Mobile diagnostics, repairs, and scheduled PM services',
    description:
      'Our certified technicians come to your location for on-site repairs, preventative maintenance, and diagnostics. No towing required.',
    image: repairImage,
    link: '/contact',
    cta: 'Schedule Service',
    items: [
      'Electrical system diagnostics',
      'Check engine light diagnosis',
      'Brake inspections & repairs',
      'Air system troubleshooting',
      'Starter & alternator service',
      'Oil & filter changes',
      'Fuel filter replacement',
      'DOT inspection prep',
      'Scheduled PM programs',
      'Fleet maintenance contracts',
    ],
  },
  {
    id: 'detailing',
    icon: Droplets,
    title: 'Truck Detailing',
    subtitle: "Professional cleaning to maintain your fleet's image",
    description:
      'Keep your trucks looking sharp with our comprehensive detailing services. We handle everything from basic washes to full restoration.',
    image: detailingImage,
    link: '/contact',
    cta: 'Book Detailing',
    items: [
      'Exterior truck wash',
      'Interior cab cleaning',
      'Trailer washouts',
      'Engine bay degreasing',
      'Aluminum polishing',
      'Chrome detailing',
      'Paint correction',
      'Fleet wash programs',
    ],
  },
  {
    id: 'parts',
    icon: Package,
    title: 'Parts & Supplies',
    subtitle: 'Quality parts sourced fast with VIN-based accuracy',
    description:
      'We source OEM and aftermarket parts for all major truck brands. Fast delivery, competitive pricing, and VIN-accurate matching.',
    image: partsImage,
    link: '/parts',
    cta: 'Shop Parts',
    items: [
      'OEM parts sourcing',
      'Aftermarket alternatives',
      'Hard-to-find parts',
      'VIN-based part matching',
      'Same-day availability',
      'Competitive pricing',
      'Warranty support',
      'Direct delivery',
    ],
  },
];

interface ServiceCardProps {
  service: typeof serviceCategories[0];
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
    >
      {/* Image */}
      <div className={`relative ${isReversed ? 'lg:order-2' : ''}`}>
        <div className="relative overflow-hidden rounded-2xl aspect-[16/10]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary rounded-full">
              <service.icon className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-semibold text-primary-foreground">
                {service.id === 'repair'
                  ? 'Most Popular'
                  : service.id === 'parts'
                  ? 'Shop Online'
                  : 'Premium'}
              </span>
            </div>
          </div>
        </div>

        {/* Decorative glow */}
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content */}
      <div className={isReversed ? 'lg:order-1' : ''}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <service.icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {service.title}
            </h2>
            <p className="text-muted-foreground">{service.subtitle}</p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Service items grid */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {service.items.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>

        <Button variant="hero" asChild>
          <Link to={service.link} className="inline-flex items-center gap-2">
            {service.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

function encodeForm(formData: FormData) {
  const params = new URLSearchParams();
  for (const [key, value] of formData.entries()) {
    // ignore files in urlencoded mode
    if (typeof value === 'string') params.append(key, value);
  }
  return params.toString();
}

export default function Services() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(formData),
      });

      toast({
        title: 'Service Request Submitted',
        description: "We'll get back to you within 30 minutes during business hours.",
      });

      form.reset();
    } catch (err) {
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
              Professional Mobile <span className="text-gradient-orange">Truck Service</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From quick repairs to comprehensive maintenance programs, we bring expert service directly to your location. Three core services to keep your fleet running.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-6 border-y border-border bg-navy-light sticky top-16 z-30">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all text-sm font-medium text-foreground"
              >
                <cat.icon className="w-4 h-4" />
                {cat.title.split(' ')[0]}{' '}
                {cat.title.includes('&') ? '& ' + cat.title.split('& ')[1].split(' ')[0] : ''}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24">
        <div className="section-container">
          <div className="space-y-32">
            {serviceCategories.map((service, index) => (
              <div key={service.id} id={service.id}>
                <ServiceCard service={service} index={index} />
              </div>
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
              <form
                name="service-request"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="service-request" />
                <p className="hidden">
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>

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
                  <Input id="service" name="service" required placeholder="e.g., Brake repair, PM service, Detailing" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea id="notes" name="notes" rows={4} placeholder="Describe your issue or request in detail..." />
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
            <p className="text-muted-foreground mb-8">Call or text us directly for the fastest response.</p>
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
