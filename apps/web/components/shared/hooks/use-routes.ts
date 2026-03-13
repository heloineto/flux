import { useMemo } from 'react';
import { type Route, routes } from '../utils/routes';

export function useRoutes(): Route[] {
  return useMemo(() => Object.values(routes), []);
}
