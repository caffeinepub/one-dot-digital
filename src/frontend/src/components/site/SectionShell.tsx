import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionShellProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionShell({ id, children, className }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn('py-20 md:py-32 scroll-mt-20', className)}
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
