
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  delay?: number;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, title, subtitle, delay = 0, children, ...props }, ref) => {
    const delayClass = delay ? `delay-${delay}` : '';

    return (
      <section
        ref={ref}
        className={cn("py-12 md:py-16", className)}
        {...props}
      >
        <div className={cn("opacity-0 animate-fade-in animate-once", delayClass)}>
          {title && (
            <h2 className="text-3xl font-display font-bold mb-3 tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-muted-foreground mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
