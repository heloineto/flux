'use client';

import type { ReactNode } from 'react';
import { createClient } from '@/shared/api/supabase/client';
import { AsideProvider, SidebarProvider } from '@packages/app-shell';
import { useCurrentRoute } from '@/shared/config';
import { useSessionQuery, useUserQuery } from '@packages/auth';
import { AuthProvider } from '@/shared/auth';

export function MainProviders({ children }: { children: ReactNode }) {
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
