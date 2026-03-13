import type { MantineSize } from '@mantine/core';
import { CubeIcon } from '@phosphor-icons/react/dist/ssr';
import type { ComponentProps, ReactNode } from 'react';
import classes from './empty-state.module.css';

export interface EmptyStateProps extends ComponentProps<'div'> {
  title?: string;
  description?: string | null;
  button?: ReactNode;
  icon?: ReactNode;
  size?: MantineSize;
  horizontal?: boolean;
  hasFilters?: boolean;
}

export function EmptyState({
  button,
  title,
  description: descriptionProp,
  icon,
  horizontal = false,
  className,
  hasFilters = false,
  size,
  ...rest
}: EmptyStateProps) {
  const _title = title ?? (!hasFilters ? 'Nada aqui' : 'Nada encontrado');

  let description;

  if (descriptionProp === null) {
    description = null;
  } else if (descriptionProp === undefined) {
    description = !hasFilters
      ? 'Adicione um novo item para começar'
      : 'Tente remover ou modificar os filtros';
  } else {
    description = descriptionProp;
  }

  return (
    <div
      className={className ? `${className} ${classes.root}` : classes.root}
      data-horizontal={horizontal}
      data-size={size}
      {...rest}
    >
      <div className={classes.iconWrapper}>{icon ?? <CubeIcon />}</div>
      <div className={classes.content}>
        <div className={classes.textWrapper}>
          <h3 className={classes.title}>{_title}</h3>
          {description ? (
            <div className={classes.description}>{description}</div>
          ) : null}
        </div>
        <div>{button}</div>
      </div>
    </div>
  );
}
