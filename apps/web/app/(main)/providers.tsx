'use client';

import type { ReactNode } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useSessionQuery, useUserQuery } from '@/packages/auth';
import { AuthProvider } from '@/components/shared/contexts/auth-context';
import { AsideProvider, SidebarProvider } from '@/packages/app-shell';
import { useCurrentRoute } from '@/components/shared/hooks/use-current-route';

export function Providers({ children }: { children: ReactNode }) {
  const supabase = createClient();

  const userQuery = useUserQuery(supabase);
  const sessionQuery = useSessionQuery(supabase);
  const currentRoute = useCurrentRoute();

  return (
    <AuthProvider
      sessionQuery={sessionQuery}
      userQuery={userQuery}
      profileQuery={userQuery}
    >
      <SidebarProvider>
        <AsideProvider defaultHasAside={currentRoute?.hasAside}>
          {children}
        </AsideProvider>
      </SidebarProvider>
    </AuthProvider>
  );
}
