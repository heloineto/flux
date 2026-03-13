'use client';

import type { ReactElement, ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import { Tooltip } from '@mantine/core';
import type { Column, IHeaderParams } from 'ag-grid-community';
import { cn } from '@/shared/lib/utils';
import { ArrowDownIcon, ArrowUpIcon } from '@phosphor-icons/react/dist/ssr';

function getAlignment(column: Column) {
  if (column.getColDef().headerClass === 'ag-right-aligned-header') {
    return 'right';
  }

  return 'left';
}

interface CustomHeaderProps extends IHeaderParams {
  icon?: ReactElement;
  alignment?: 'left' | 'right';
  tooltip?: ReactNode;
}

export function CustomHeader({
  displayName,
  icon,
  alignment: alignmentProp,
  tooltip,
  ...props
}: CustomHeaderProps) {
  const [currentSort, setCurrentSort] = useState<'asc' | 'desc' | null>(null);

  const alignment = alignmentProp ?? getAlignment(props.column);

  useEffect(() => {
    if (props.column === undefined || props.column === null) return;

    const onSortChanged = () => {
      const sort = props.column.getSort();
      setCurrentSort(sort ?? null);
    };

    props.column.addEventListener('sortChanged', onSortChanged);
    onSortChanged();
    return () => {
      props.column.removeEventListener('sortChanged', onSortChanged);
    };
  }, [props.column]);

  const headerContent = (
    <button
      className={cn(
        'flex w-full items-center gap-1',
        alignment === 'right'
          ? 'flex-row-reverse justify-start'
          : 'justify-start',
        props.enableSorting ? 'cursor-pointer' : ''
      )}
      type="button"
      onClick={() => {
        if (props.enableSorting && typeof props.setSort === 'function') {
          props.setSort(currentSort === 'asc' ? 'desc' : 'asc');
        }
      }}
    >
      <div className="flex items-center gap-1">
        {icon && <span>{icon}</span>}
        {displayName}
      </div>
      {props.enableSorting && currentSort ? (
        <div>
          {currentSort === 'asc' ? (
            <ArrowUpIcon className="size-3.5" />
          ) : (
            <ArrowDownIcon className="size-3.5" />
          )}
        </div>
      ) : null}
    </button>
  );

  if (tooltip !== undefined) {
    return (
      <Tooltip label={tooltip} withArrow>
        {headerContent}
      </Tooltip>
    );
  }

  return headerContent;
}
