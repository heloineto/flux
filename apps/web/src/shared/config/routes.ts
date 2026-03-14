import type { Icon } from '@phosphor-icons/react';
import { ChatCircleIcon } from '@phosphor-icons/react/dist/ssr';

export type Route = {
  label: string;
  href: string;
  icon: Icon;
  children?: Route[];
  public?: boolean;
  hasAside?: boolean;
};

export const routes = {
  FLOWS: {
    label: 'Flows',
    href: '/flows',
    icon: ChatCircleIcon,
  },
};
