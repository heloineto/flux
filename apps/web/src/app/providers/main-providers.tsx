'use client';

import type { ReactNode } from 'react';
import { createClient } from '@/shared/api/supabase/client';
import { useSessionQuery, useUserQuery } from '@/shared/auth';
import { AuthProvider } from '@/shared/auth/context';
import { AsideProvider, SidebarProvider } from '@/shared/ui/app-shell';
import { useCurrentRoute } from '@/shared/config';

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
