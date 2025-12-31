import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Clock,
  Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/ui/hero-section';
import { TrustBadges } from '@/components/ui/trust-badges';
import { useToast } from '@/hooks/use-toast';

import heroImage from '@/assets/hero/hero-main.jpg';

const serviceAreas = [
  'Ashburn',
  'Sterling',
  'Leesburg',
  'Herndon',
  'Reston',
  'Chantilly',
  'Fairfax',
  'Tysons',
  'Alexandria',
  'Arlington',
  'Manassas',
  'Woodbridge',
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(571) 206-2249',
    href: 'tel:5712062249',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'fleetforgetrucks.com',
    href: 'https://fleetforgetrucks.com',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@fleetforgetrucks.com',
    href: 'mailto:info@fleetforgetrucks.com',
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Message Sent',
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <HeroSection
        backgroundImage={heroImage}
        badge="Contact Us"
        title={
          <>
            Let's{' '}
            <span className="text-gradient-orange">Connect</span>
          </>
        }
        subtitle="Ready to get your fleet back on the road? Reach out to us for service requests, quotes, or any questions."
        className="min-h-[50vh]"
      >
        <TrustBadges variant="compact" />
      </HeroSection>

      {/* Contact Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Phone CTA */}
              <div className="card-elevated p-8 mb-6 text-center">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">Call or Text Us</h2>
                <a
                  href="tel:5712062249"
                  className="text-3xl md:text-4xl font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  (571) 206-2249
                </a>
                <p className="text-muted-foreground mt-2">
                  Fastest way to reach us during business hours
                </p>
              </div>

              {/* Contact Details */}
              <div className="card-elevated p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="card-elevated p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Sunday</span>
                    <span className="font-medium text-foreground">7:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="card-elevated p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Service Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm bg-secondary rounded-full text-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-elevated p-8" id="contact-form">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" name="name" required placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" placeholder="Optional" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" name="phone" type="tel" required placeholder="(555) 555-5555" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" name="subject" required placeholder="How can we help?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    We typically respond within 2 hours during business hours
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-card border-y border-border">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Prefer to Talk?
            </h2>
            <p className="text-muted-foreground mb-6">
              Give us a call—we're here to help.
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
