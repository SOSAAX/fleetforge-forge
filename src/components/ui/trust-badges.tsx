import { Shield, Clock, FileCheck, Truck, BadgeCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const trustItems = [
  { icon: Shield, text: 'Fully Insured' },
  { icon: Truck, text: 'Mobile Service' },
  { icon: Clock, text: 'Fast Response' },
  { icon: FileCheck, text: 'Professional Invoicing' },
  { icon: BadgeCheck, text: 'Fleet Discounts' },
];

interface TrustBadgesProps {
  variant?: 'inline' | 'compact';
  className?: string;
}

export function TrustBadges({ variant = 'inline', className = '' }: TrustBadgesProps) {
  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {trustItems.slice(0, 4).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/50 rounded-full border border-border/50"
          >
            <item.icon className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-foreground">{item.text}</span>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap justify-center gap-6 md:gap-10 ${className}`}>
      {trustItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2 text-muted-foreground">
          <item.icon className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">{item.text}</span>
        </div>
      ))}
    </div>
  );
}
