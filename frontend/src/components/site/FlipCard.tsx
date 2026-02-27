import { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export default function FlipCard({ front, back, className = '' }: FlipCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    // For reduced motion, show both sides stacked
    return (
      <div className={`space-y-4 ${className}`}>
        <div>{front}</div>
        <div className="border-t border-border pt-4">{back}</div>
      </div>
    );
  }

  return (
    <div className={`flip-card h-full ${className}`}>
      <div className="flip-card-inner h-full">
        <div className="flip-card-front h-full">
          {front}
        </div>
        <div className="flip-card-back h-full">
          {back}
        </div>
      </div>
    </div>
  );
}
