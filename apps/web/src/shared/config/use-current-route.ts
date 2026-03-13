import { useMemo } from 'react';

import { usePathname } from 'next/navigation';
import { type Route, routes } from './routes';

export function useCurrentRoute(): Route | undefined {
  const pathname = usePathname();

  return useMemo(() => {
    return Object.values(routes).find((route) => route.href === pathname);
  }, [pathname]);
}
