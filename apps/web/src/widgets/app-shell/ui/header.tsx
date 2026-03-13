import { SIDEBAR_BREAKPOINT } from './sidebar';
import { ASIDE_BREAKPOINT } from './aside';
import { Header as OriginalHeader } from '@/shared/ui/app-shell';
import Link from 'next/link';

export function Header() {
  return (
    <OriginalHeader
      asideBreakpoint={ASIDE_BREAKPOINT}
      sidebarBreakpoint={SIDEBAR_BREAKPOINT}
      leftSection={
        <Link className="flex items-center gap-2 pr-1 font-semibold" href="/">
          Flux
        </Link>
      }
    />
  );
}
