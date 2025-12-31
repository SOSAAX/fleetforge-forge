import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TruckIcon,
  Target,
  Users,
  Clock,
  Shield,
  Wrench,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Layout } from '@/components/layout/Layout';

const values = [
  {
    icon: Clock,
    title: 'Reliability',
    description: 'We show up when we say we will, and we get the job done right the first time.',
  },
  {
    icon: Shield,
    title: 'Trust',
    description: 'Transparent pricing, honest assessments, and no unnecessary upsells.',
  },
  {
    icon: Target,
    title: 'Efficiency',
    description: 'We minimize your downtime with fast response times and efficient repairs.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We treat every customer like a partner, invested in your success.',
  },
];

const stats = [
  { value: 'NoVA', label: 'Service Area' },
  { value: '7-9', label: 'Hours Daily' },
  { value: '100%', label: 'Satisfaction Goal' },
  { value: 'Fast', label: 'Response Time' },
];

export default function About() {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Keeping Your{' '}
              <span className="text-gradient-orange">Fleet Moving</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              FleetForge Truck Solutions provides professional mobile repair, maintenance, and parts support to owner-operators and commercial fleets across Northern Virginia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border bg-navy-light">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  FleetForge Truck Solutions was founded with a simple mission: provide reliable, professional mobile truck service that respects your time and keeps your business running.
                </p>
                <p>
                  We understand that when your truck is down, you're losing money. That's why we come to you—whether you're at a yard, lot, or job site across Northern Virginia. No towing, no dealership runaround, just skilled technicians ready to get you back on the road.
                </p>
                <p>
                  Our team brings years of experience working on commercial trucks of all makes and models. From quick repairs and diagnostics to scheduled PM programs and parts sourcing, we're your one-stop solution for fleet maintenance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-navy-medium rounded-2xl border border-border flex items-center justify-center">
                <TruckIcon className="w-32 h-32 text-primary/20" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-card border-y border-border">
        <div className="section-container">
          <SectionHeader
            badge="Our Values"
            title="What Drives Us"
            subtitle="The principles that guide everything we do."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="section-container">
          <SectionHeader
            badge="Why FleetForge"
            title="The FleetForge Difference"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="card-elevated p-8">
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  'Mobile service that comes to you',
                  'Fast response times',
                  'Experienced, certified technicians',
                  'Transparent, upfront pricing',
                  'Quality OEM and aftermarket parts',
                  'Fleet contracts with priority service',
                  'Professional invoicing and records',
                  'Fully insured for your protection',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-card border-y border-border">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help keep your fleet on the road.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:5712062249" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (571) 206-2249
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
