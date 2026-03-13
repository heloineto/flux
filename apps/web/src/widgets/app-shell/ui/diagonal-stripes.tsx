import { cn } from '@/shared/lib/utils';
import type { ComponentProps } from 'react';

export function DiagonalStripes({
  className,
  style,
  ...rest
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'border-x-(--pattern-fg) bg-fixed [--pattern-fg:var(--color-gray-100)] dark:[--pattern-fg:var(--color-dark-500)]',
        className
      )}
      style={{
        backgroundSize: '10px 10px',
        backgroundImage:
          'repeating-linear-gradient(315deg, var(--pattern-fg) 0, var(--pattern-fg) 1px, transparent 0, transparent 50%)',
        ...style,
      }}
      {...rest}
    />
  );
}
