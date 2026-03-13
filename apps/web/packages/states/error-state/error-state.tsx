import type { AlertProps } from '@mantine/core';
import { Alert, Button, Group } from '@mantine/core';
import { WarningIcon } from '@phosphor-icons/react/dist/ssr';
import type { ReactNode } from 'react';

export interface ErrorStateQuery {
  isFetching: boolean;
  refetch?: () => void;
  error?: unknown;
}

export interface ErrorStateProps extends AlertProps {
  title?: string;
  error?: unknown;
  query?: ErrorStateQuery | ErrorStateQuery[];
  children?: ReactNode;
  icon?: ReactNode;
}

// FUTURE: Create size prop to better render larger components, or/and use media queries
export function ErrorState({
  query,
  title: titleProp,
  children,
  icon,
  ...rest
}: ErrorStateProps) {
  const isEmpty =
    query === undefined && (children === undefined || children === null);

  const title = titleProp ?? 'Ocorreu um erro';

  const hasRefetch =
    query !== undefined && Array.isArray(query)
      ? query.some((q) => q.refetch)
      : !!query?.refetch;

  return (
    <Alert
      color="red"
      icon={icon ?? <WarningIcon size="2.75rem" weight="bold" />}
      title={title}
      variant="light"
      {...rest}
    >
      {!isEmpty ? (
        <Group gap="xs">
          {hasRefetch ? (
            <Button
              color="gray"
              loading={
                !Array.isArray(query)
                  ? query?.isFetching
                  : query.some((q) => q.isFetching)
              }
              onClick={() => {
                if (Array.isArray(query)) {
                  for (const q of query) q.refetch?.();
                } else {
                  query?.refetch?.();
                }
              }}
              size="xs"
              variant="light"
            >
              Tentar de novo
            </Button>
          ) : null}
          {children}
        </Group>
      ) : null}
    </Alert>
  );
}
