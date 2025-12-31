import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Wrench,
  Droplets,
  Shield,
  Package,
  Phone,
  MessageSquare,
  ChevronRight,
  Star,
  Clock,
  FileCheck,
  BadgeCheck,
  TruckIcon,
  Plus,
  Minus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Layout } from '@/components/layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    icon: Wrench,
    title: 'Mobile Repair',
    description: 'Diagnostics, electrical, brakes, and mechanical repairs at your location.',
  },
  {
    icon: Shield,
    title: 'Preventative Maintenance',
    description: 'Scheduled PM services to keep your fleet running and compliant.',
  },
  {
    icon: Droplets,
    title: 'Detailing',
    description: 'Professional truck and trailer cleaning to maintain your image.',
  },
  {
    icon: Package,
    title: 'Parts Support',
    description: 'Quality parts sourced fast with VIN-based accuracy.',
  },
];

const trustItems = [
  { icon: Clock, text: 'Fast Response' },
  { icon: FileCheck, text: 'Professional Invoicing' },
  { icon: BadgeCheck, text: 'Fleet Contracts' },
  { icon: Shield, text: 'Fully Insured' },
];

const testimonials = [
  {
    quote: "FleetForge saved us thousands in towing costs this year. They come to our yard and handle everything quickly.",
    author: "Mike R.",
    company: "R&M Logistics",
    rating: 5,
  },
  {
    quote: "The PM program keeps our trucks on the road. Professional, reliable, and they actually show up when they say they will.",
    author: "Sarah T.",
    company: "Capital Freight",
    rating: 5,
  },
  {
    quote: "Finding the right parts used to be a nightmare. FleetForge sources exactly what we need, fast.",
    author: "James L.",
    company: "Owner-Operator",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We serve all of Northern Virginia including Ashburn, Sterling, Leesburg, Herndon, Reston, Chantilly, Fairfax, Tysons, Alexandria, Arlington, Manassas, and Woodbridge.",
  },
  {
    question: "Do you offer 24/7 emergency service?",
    answer: "Our regular hours are 7:00 AM to 9:00 PM, seven days a week. We don't offer 24/7 emergency roadside service, but we respond quickly during business hours.",
  },
  {
    question: "How quickly can you respond to a service call?",
    answer: "Most service calls are answered within 30 minutes, and we can typically be on-site within 1-2 hours depending on your location and our current schedule.",
  },
  {
    question: "Do you work on all truck brands?",
    answer: "Yes, we service all major commercial truck brands including International, Freightliner, Peterbilt, Kenworth, Volvo, Mack, Isuzu, Hino, and more.",
  },
  {
    question: "Can you source hard-to-find parts?",
    answer: "Absolutely. We have extensive supplier relationships and can source OEM and aftermarket parts quickly, often same-day or next-day delivery.",
  },
  {
    question: "Do you offer fleet contracts?",
    answer: "Yes! We offer customized fleet maintenance contracts with priority scheduling, discounted rates, and dedicated account management. Contact us for a quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, checks, and can set up net terms for qualified commercial accounts.",
  },
  {
    question: "Are you insured?",
    answer: "Yes, we are fully insured with commercial liability coverage for your peace of mind.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hero-pattern">
        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                <TruckIcon className="w-4 h-4" />
                Northern Virginia's Trusted Mobile Truck Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              Mobile Truck Repair{' '}
              <span className="text-gradient-orange">&</span>{' '}
              Parts Support
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8"
            >
              Reduce downtime. Skip the tow. We come to your yard or lot with professional repairs,
              scheduled maintenance, and parts you can count on.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="tel:5712062249" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call/Text Now
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Request Service
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Trust Row */}
      <section className="py-8 border-y border-border bg-navy-light">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {trustItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="section-container">
          <SectionHeader
            badge="Services"
            title="Everything Your Fleet Needs"
            subtitle="From emergency repairs to scheduled maintenance, we keep your trucks moving."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group card-elevated p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10"
          >
            <Button variant="outline" asChild>
              <Link to="/services" className="flex items-center gap-2">
                View All Services
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Fleet Contracts CTA */}
      <section className="py-24 bg-gradient-card border-y border-border">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                Fleet Contracts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Maximize Uptime with a{' '}
                <span className="text-gradient-orange">Fleet Contract</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Get priority service, scheduled PM visits, and predictable maintenance costs.
                We work with owner-operators and commercial fleets of all sizes.
              </p>
              <ul className="space-y-3 mb-8">
                {['Priority scheduling & response', 'Discounted service rates', 'Dedicated account manager', 'Customized PM schedules'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="hero" asChild>
                <Link to="/fleet-contracts">Learn More About Fleet Contracts</Link>
              </Button>
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
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="section-container">
          <SectionHeader
            badge="Testimonials"
            title="Trusted by Fleets Across NoVA"
            subtitle="Don't just take our word for it—hear from operators we've helped."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card-elevated p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-card border-y border-border">
        <div className="section-container">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our services."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-elevated px-6 border-none"
                >
                  <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline py-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Keep Your{' '}
              <span className="text-gradient-orange">Fleet Moving?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for fast, professional mobile truck service anywhere in Northern Virginia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="tel:5712062249" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (571) 206-2249
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Request Service Online</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
