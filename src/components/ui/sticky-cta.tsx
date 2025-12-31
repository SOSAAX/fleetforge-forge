import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 hidden lg:block"
        >
          <Button
            variant="hero"
            size="lg"
            className="shadow-lg glow-orange"
            asChild
          >
            <a href="tel:5712062249" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-4 bg-background/95 backdrop-blur-md border-t border-border"
        >
          <div className="flex gap-3">
            <Button variant="hero" className="flex-1" asChild>
              <a href="tel:5712062249" className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call/Text Now
              </a>
            </Button>
            <Button variant="heroOutline" className="flex-1" asChild>
              <a href="#contact-form">Request Service</a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
