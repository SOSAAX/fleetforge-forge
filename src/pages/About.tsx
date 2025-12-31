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
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/ui/hero-section';
import { TrustBadges } from '@/components/ui/trust-badges';

import teamImage from '@/assets/hero/team.jpg';

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
  { value: '7 Days', label: 'Weekly Coverage' },
  { value: '7AM-9PM', label: 'Business Hours' },
  { value: 'Fast', label: 'Response Time' },
];

const trustBadges = [
  { icon: Shield, text: 'Fully Insured' },
  { icon: Award, text: 'Professional Service' },
  { icon: TruckIcon, text: 'Mobile Fleet' },
  { icon: Wrench, text: 'All Truck Brands' },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <HeroSection
        backgroundImage={teamImage}
        badge="About FleetForge"
        title={
          <>
            Keeping Your{' '}
            <span className="text-gradient-orange">Fleet Moving</span>
          </>
        }
        subtitle="FleetForge Truck Solutions provides professional mobile repair, maintenance, and parts support to owner-operators and commercial fleets across Northern Virginia."
      >
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="tel:5712062249" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </Button>
        </div>
        <TrustBadges variant="compact" />
      </HeroSection>

      {/* Stats */}
      <section className="py-10 border-y border-border bg-card/50">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built for Fleet Operators
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
              className="space-y-4"
            >
              {/* Trust Badges Card */}
              <div className="card-elevated p-6">
                <h3 className="font-semibold text-foreground mb-4">Why Choose FleetForge</h3>
                <div className="grid grid-cols-2 gap-4">
                  {trustBadges.map((badge, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <badge.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Area Card */}
              <div className="card-elevated p-6">
                <h3 className="font-semibold text-foreground mb-3">Service Area</h3>
                <p className="text-muted-foreground text-sm">
                  Serving Ashburn, Sterling, Leesburg, Herndon, Reston, Chantilly, Fairfax, Tysons, Alexandria, Arlington, Manassas, and Woodbridge.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-card border-y border-border">
        <div className="section-container">
          <SectionHeader
            badge="Our Values"
            title="What Drives Us"
            subtitle="The principles that guide everything we do."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            badge="The Difference"
            title="The FleetForge Advantage"
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
                  'Experienced, skilled technicians',
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
      <section className="py-20 bg-gradient-card border-y border-border">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
            <TrustBadges />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
