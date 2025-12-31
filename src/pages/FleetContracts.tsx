import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TruckIcon,
  Building2,
  User,
  Clock,
  Shield,
  DollarSign,
  Users,
  Phone,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Layout } from '@/components/layout/Layout';

const whoItsFor = [
  {
    icon: User,
    title: 'Owner-Operators',
    description: 'Single-truck operators who want reliable, scheduled maintenance without the hassle.',
  },
  {
    icon: TruckIcon,
    title: 'Small Fleets',
    description: 'Businesses with 2-20 trucks looking for cost-effective fleet maintenance.',
  },
  {
    icon: Building2,
    title: 'Commercial Fleets',
    description: 'Large operations needing comprehensive fleet management and priority support.',
  },
];

const whatsIncluded = [
  'Priority scheduling and response times',
  'Discounted labor and parts rates',
  'Customized PM schedules based on your needs',
  'Dedicated account manager',
  'Detailed maintenance records and reporting',
  'Emergency repair priority',
  'Flexible payment terms',
  'Fleet-wide tracking and reminders',
];

const pricingTiers = [
  {
    name: 'Basic',
    description: 'For owner-operators and small fleets',
    features: ['Monthly PM visits', '10% parts discount', 'Priority scheduling', 'Basic reporting'],
  },
  {
    name: 'Standard',
    description: 'Our most popular fleet program',
    features: ['Bi-weekly PM visits', '15% parts discount', 'Same-day emergency response', 'Full maintenance reporting', 'Dedicated account rep'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large commercial operations',
    features: ['Custom visit schedules', '20% parts discount', 'Guaranteed response times', 'Full fleet analytics', 'On-site coordinator'],
  },
];

export default function FleetContracts() {
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
              Fleet Programs
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Fleet Contracts &{' '}
              <span className="text-gradient-orange">Yard Programs</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Maximize uptime with predictable maintenance costs, priority service, and a dedicated team focused on keeping your fleet running.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Get a Custom Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24">
        <div className="section-container">
          <SectionHeader
            badge="Who It's For"
            title="Programs for Every Fleet Size"
            subtitle="Whether you run one truck or fifty, we have a program that fits."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {whoItsFor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-6 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-gradient-card border-y border-border">
        <div className="section-container">
          <SectionHeader
            badge="What's Included"
            title="Everything You Need to Keep Moving"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="card-elevated p-8">
              <ul className="grid sm:grid-cols-2 gap-4">
                {whatsIncluded.map((item, index) => (
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

      {/* How Pricing Works */}
      <section className="py-24">
        <div className="section-container">
          <SectionHeader
            badge="Pricing"
            title="Flexible Programs, Transparent Pricing"
            subtitle="We'll create a custom quote based on your fleet size and service needs."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card-elevated p-6 relative ${
                  tier.highlighted ? 'border-primary/50 ring-1 ring-primary/20' : ''
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-semibold text-primary-foreground bg-gradient-orange rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.highlighted ? 'hero' : 'outline'}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-8"
          >
            * Pricing varies based on fleet size, service frequency, and location. Contact us for a personalized quote.
          </motion.p>
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
              Ready to Reduce Downtime?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss a fleet program tailored to your operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:5712062249" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
