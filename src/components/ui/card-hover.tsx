
import React from 'react';
import { cn } from '@/lib/utils';

interface CardHoverProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

const CardHover = React.forwardRef<HTMLDivElement, CardHoverProps>(
  ({ className, delay = 0, ...props }, ref) => {
    const delayClass = delay ? `delay-${delay}` : '';

    return (
      <div
        ref={ref}
        className={cn(
          "opacity-0 animate-fade-in animate-once",
          delayClass,
          "card-hover",
          className
        )}
        {...props}
      />
    );
  }
);

CardHover.displayName = "CardHover";

export { CardHover };
