'use client';

import { SidebarUser as OriginalSidebarUser } from '@/packages/app-shell';
import { useAuth } from '../contexts/auth-context';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { LOGIN_ROUTE } from '@/lib/constants';

export function SidebarUser() {
  const { userQuery } = useAuth();

  const router = useRouter();
  const supabase = createClient();

  const onSignOut = async () => {
    await supabase.auth.signOut();
    router.push(LOGIN_ROUTE);
  };

  return (
    <OriginalSidebarUser
      onSignOut={onSignOut}
      query={userQuery}
      name={userQuery.data?.email}
      email={userQuery.data?.email}
    />
  );
}
