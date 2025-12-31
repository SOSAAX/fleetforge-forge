import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo = ({ className, size = 'md' }: LogoProps) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  return (
    <div className={cn(sizes[size], 'relative', className)}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background */}
        <rect
          width="48"
          height="48"
          rx="10"
          className="fill-primary"
        />
        
        {/* Wrench-F Logo */}
        <g className="fill-primary-foreground">
          {/* Wrench head (top of F) - circular open-end wrench */}
          <path d="M14 10C14 10 12 12 12 15C12 18 14 20 17 20L32 20C33.5 20 35 18.5 35 17C35 15.5 33.5 14 32 14L20 14C18 14 16 12.5 16 10.5C16 10.5 15.5 10 14 10Z" />
          
          {/* Wrench shaft / F vertical bar */}
          <rect x="14" y="14" width="6" height="26" rx="1" />
          
          {/* F middle bar - styled like a wrench adjustment */}
          <path d="M20 26H30C31 26 32 27 32 28C32 29 31 30 30 30H20V26Z" />
          
          {/* Bottom wrench detail */}
          <circle cx="17" cy="38" r="3" className="fill-primary-foreground/30" />
        </g>
        
        {/* Accent highlight */}
        <path
          d="M32 14L35 11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="stroke-primary-foreground/50"
        />
      </svg>
    </div>
  );
};

export const LogoFull = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2 group', className)}>
      <Logo size="md" />
      <div className="hidden sm:block">
        <span className="font-bold text-lg text-foreground">FleetForge</span>
        <span className="text-muted-foreground text-sm block -mt-1">Truck Solutions</span>
      </div>
    </div>
  );
};
