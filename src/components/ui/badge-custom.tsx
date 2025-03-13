
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface BadgeCustomProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'destructive';
}

const BadgeCustom = React.forwardRef<HTMLDivElement, BadgeCustomProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <Badge
        ref={ref}
        variant={variant}
        className={cn(
          "px-2.5 py-0.5 text-xs font-medium rounded-full",
          className
        )}
        {...props}
      >
        {children}
      </Badge>
    );
  }
);

BadgeCustom.displayName = "BadgeCustom";

export { BadgeCustom };
