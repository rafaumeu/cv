import React from 'react';
import { cn } from '@/lib/utils';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-lg font-bold text-gray-800', className)}
      {...props}
    />
  )
);

CardTitle.displayName = 'CardTitle';