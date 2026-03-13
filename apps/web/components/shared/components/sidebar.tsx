'use client';

import { SidebarUser } from '@/components/shared/components/sidebar-user';
import Link from 'next/link';
import { Sidebar as OriginalSidebar, SidebarItem } from '@/shared/ui/app-shell';
import { useRoutes } from '../hooks/use-routes';

export const SIDEBAR_COLLAPSED_WIDTH = '3.25rem';
export const SIDEBAR_EXPANDED_WIDTH = '14rem';
export const SIDEBAR_BREAKPOINT = 'lg';

export function Sidebar() {
  const routes = useRoutes();

  return (
    <OriginalSidebar
      expanded
      collapsedWidth={SIDEBAR_COLLAPSED_WIDTH}
      expandedWidth={SIDEBAR_EXPANDED_WIDTH}
      breakpoint={SIDEBAR_BREAKPOINT}
    >
      <div className="flex grow flex-col">
        <div className="flex grow flex-col gap-1.5">
          {routes.map((route) => (
            <SidebarItem
              key={route.href}
              label={route.label}
              icon={route.icon}
              href={route.href}
              component={Link}
            />
          ))}
        </div>
        <div className="dark:bg-dark-400 m-2 h-px bg-gray-300" />
        <SidebarUser />
      </div>
    </OriginalSidebar>
  );
}
