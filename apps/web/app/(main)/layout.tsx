import type { ReactNode } from 'react';
import { MainProviders } from '@/app/providers';
import { AppShell } from '@/widgets/app-shell';

export const dynamic = 'force-dynamic';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <MainProviders>
      <AppShell>{children}</AppShell>
    </MainProviders>
  );
}
