import { cn } from '@/packages/utils';
import { Loader } from '@mantine/core';
import type { ReactNode } from 'react';

export function LoadingIndicator({
  className,
  title = 'Atualizando...',
}: {
  className?: string;
  title?: ReactNode;
}) {
  return (
    <div
      className={cn(
        'text-dimmed bg-body flex items-center gap-1.5 rounded-full border py-0.5 text-xs font-bold uppercase',
        typeof title === 'string' ? 'pr-2.5 pl-1' : 'px-1',
        className
      )}
    >
      <Loader size="xs" className="after:border-[3px]!" />
      {title}
    </div>
  );
}
