'use client';

import type { ReactNode } from 'react';
import {
  AppShell as MantineAppShell,
  AppShellHeader as MantineAppShellHeader,
  AppShellMain as MantineAppShellMain,
  AppShellNavbar as MantineAppShellNavbar,
} from '@mantine/core';
import { SIDEBAR_BREAKPOINT, SIDEBAR_EXPANDED_WIDTH, Sidebar } from './sidebar';
import { ASIDE_BREAKPOINT, ASIDE_WIDTH } from './aside';
import { useAside } from '@/shared/ui/app-shell';
import { HEADER_HEIGHT } from '@/shared/config/constants';
import { Header } from './header';

export function AppShell({ children }: { children: ReactNode }) {
  const { hasAside } = useAside();

  return (
    <MantineAppShell
      layout="alt"
      header={{ height: HEADER_HEIGHT }}
      navbar={{
        width: SIDEBAR_EXPANDED_WIDTH,
        breakpoint: SIDEBAR_BREAKPOINT,
        collapsed: { mobile: true },
      }}
      aside={
        hasAside
          ? {
              width: ASIDE_WIDTH,
              breakpoint: ASIDE_BREAKPOINT,
              collapsed: { mobile: true },
            }
          : undefined
      }
    >
      <MantineAppShellHeader
        className="flex items-center justify-between"
        px="sm"
      >
        <Header />
      </MantineAppShellHeader>
      <MantineAppShellNavbar>
        <Sidebar />
      </MantineAppShellNavbar>
      <MantineAppShellMain className="flex">{children}</MantineAppShellMain>
    </MantineAppShell>
  );
}
