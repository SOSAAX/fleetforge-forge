import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

export const Footer = () => {
  return (
    <footer className="bg-navy-light border-t border-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <div>
                <span className="font-bold text-lg text-foreground">FleetForge</span>
                <span className="text-muted-foreground text-sm block -mt-1">Truck Solutions</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional mobile truck repair, preventative maintenance, and parts support for Northern Virginia fleets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</Link>
              <Link to="/fleet-contracts" className="text-muted-foreground hover:text-primary transition-colors text-sm">Fleet Contracts</Link>
              <Link to="/parts" className="text-muted-foreground hover:text-primary transition-colors text-sm">Parts & Supplies</Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link>
            </nav>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Service Area</h3>
            <div className="flex items-start gap-2 mb-3">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground text-sm">
                Ashburn, Sterling, Leesburg, Herndon, Reston, Chantilly, Fairfax, Tysons, Alexandria, Arlington, Manassas, Woodbridge
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              <p className="text-muted-foreground text-sm">Mon-Sun: 7:00 AM - 9:00 PM</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:5712062249" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4 text-primary" />
                (571) 206-2249
              </a>
              <a href="mailto:info@fleetforgetrucks.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4 text-primary" />
                info@fleetforgetrucks.com
              </a>
              <a href="https://fleetforgetrucks.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                fleetforgetrucks.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} FleetForge Truck Solutions. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Serving Northern Virginia with pride.
          </p>
        </div>
      </div>
    </footer>
  );
};
