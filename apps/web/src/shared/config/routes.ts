import type { Icon } from '@phosphor-icons/react';
import { RobotIcon } from '@phosphor-icons/react/dist/ssr';

export type Route = {
  label: string;
  href: string;
  icon: Icon;
  children?: Route[];
  public?: boolean;
  hasAside?: boolean;
};

export const routes = {
  AGENTS: {
    label: 'Agents',
    href: '/agents',
    icon: RobotIcon,
  },
};
