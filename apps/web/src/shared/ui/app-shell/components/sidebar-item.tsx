'use client';

import type { NavLinkProps } from '@mantine/core';
import { NavLink, createPolymorphicComponent } from '@mantine/core';
import type { Icon } from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';
import { forwardRef } from 'react';

export type SidebarItemProps = Omit<NavLinkProps, 'active'> & {
  icon?: Icon;
  active?: boolean | ((pathname: string, href?: string) => boolean);
};

const SidebarItem = createPolymorphicComponent<'a', SidebarItemProps>(
  forwardRef<HTMLAnchorElement, SidebarItemProps>(function SidebarItem(
    { icon: Icon, leftSection, active: activeProp, label, ...props },
    ref
  ) {
    const pathname = usePathname();

    let active: boolean;

    if (typeof activeProp === 'function') {
      const href = 'href' in props ? (props.href as string) : undefined;
      active = activeProp(pathname, href);
    } else if (typeof activeProp === 'boolean') {
      active = activeProp;
    } else {
      active = 'href' in props && props.href === pathname;
    }

    return (
      <NavLink
        active={active}
        {...props}
        label={
          typeof label === 'string' ? (
            <span className="dark:text-dark-100 font-medium text-gray-800">
              {label}
            </span>
          ) : (
            label
          )
        }
        leftSection={
          Icon ? (
            <Icon className="dark:text-dark-50 size-5 text-gray-900" />
          ) : (
            leftSection
          )
        }
        ref={ref}
      />
    );
  })
);

SidebarItem.displayName = 'SidebarItem';

export { SidebarItem };
