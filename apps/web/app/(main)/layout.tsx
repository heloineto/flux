import type { ReactNode } from 'react';
import { Providers } from './providers';
import { AppShell } from '@/components/shared/components/app-shell';

export const dynamic = 'force-dynamic';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <AppShell>{children}</AppShell>
    </Providers>
  );
}
