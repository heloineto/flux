import { useMatches } from '@mantine/core';
import type { ReactNode } from 'react';
import { Aside as OriginalAside } from '@/packages/app-shell';

export const ASIDE_WIDTH = '24rem';
export const ASIDE_BREAKPOINT = 'lg';

export function Aside({ children }: { children: ReactNode }) {
  const size = useMatches({
    base: 'calc(100dvw - 3rem)',
    xs: ASIDE_WIDTH,
  });

  return (
    <OriginalAside breakpoint={ASIDE_BREAKPOINT} drawerProps={{ size }}>
      {children}
    </OriginalAside>
  );
}
