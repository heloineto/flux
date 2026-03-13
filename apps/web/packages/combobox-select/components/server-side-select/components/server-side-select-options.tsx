import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import type {
  ServerSideSelectItem,
  ServerSideSelectQuery,
} from './server-side-select';
import { useVirtualizer } from '@tanstack/react-virtual';
import type { MantineSize, ScrollAreaProps } from '@mantine/core';
import { ComboboxEmpty, ComboboxOption, ScrollArea } from '@mantine/core';
import type { ServerSideSelectOptionProps } from './server-side-select-option';
import { ServerSideSelectOption } from './server-side-select-option';

const DEFAULT_OPTION_HEIGHT = 36;

export interface ServerSideSelectOptionsProps {
  query: ServerSideSelectQuery;
  items: ServerSideSelectItem[];
  search: string;
  isOptionChecked: (item: ServerSideSelectItem) => {
    checked: boolean;
    indeterminate?: boolean;
  };
  size: MantineSize | (string & {});
  renderOption?: (props: ServerSideSelectOptionProps) => ReactNode;
  optionHeight?: number;
  withScrollArea?: boolean;
  maxDropdownHeight?: React.CSSProperties['maxHeight'];
  scrollAreaProps?: ScrollAreaProps;
}

export function ServerSideSelectOptions({
  query,
  items,
  search,
  isOptionChecked,
  size,
  renderOption,
  optionHeight = DEFAULT_OPTION_HEIGHT,
  withScrollArea = true,
  maxDropdownHeight = 220,
  scrollAreaProps,
}: ServerSideSelectOptionsProps) {
  const parentRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: query.hasNextPage ? items.length + 1 : items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => optionHeight,
    overscan: 15,
  });

  const virtualItems = virtualizer.getVirtualItems();

  useEffect(
    () => {
      const lastItem = virtualItems[virtualItems.length - 1];

      if (lastItem === undefined) return;

      if (
        lastItem.index >= items.length - 1 &&
        query.hasNextPage &&
        !query.isFetchingNextPage
      ) {
        query.fetchNextPage();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps --- This is the correct way to do it
    [
      query.hasNextPage,
      query.fetchNextPage,
      query.isFetchingNextPage,
      items.length,
      virtualItems,
    ]
  );

  const RenderOption = renderOption ?? ServerSideSelectOption;

  const virtualizedContent = (
    <div
      className="relative"
      style={{
        height: virtualizer.getTotalSize(),
        width: '100%',
      }}
    >
      {virtualItems.map((virtualItem) => {
        const isLoaderRow = virtualItem.index > items.length - 1;
        const item = items[virtualItem.index];

        return (
          <div
            key={virtualItem.index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {isLoaderRow ? (
              <ComboboxEmpty h={optionHeight}>
                {query.hasNextPage
                  ? 'Carregando mais...'
                  : 'Nada mais para carregar'}
              </ComboboxEmpty>
            ) : (
              <ComboboxOption className="h-full" value={item.id} active={true}>
                <RenderOption
                  item={item}
                  search={search}
                  size={size}
                  {...isOptionChecked(item)}
                />
              </ComboboxOption>
            )}
          </div>
        );
      })}
    </div>
  );

  if (withScrollArea) {
    return (
      <ScrollArea
        viewportRef={parentRef}
        viewportProps={{
          style: {
            maxHeight: maxDropdownHeight,
          },
        }}
        {...scrollAreaProps}
      >
        {virtualizedContent}
      </ScrollArea>
    );
  }

  return (
    <div
      className={withScrollArea ? undefined : 'overflow-auto'}
      style={{
        maxHeight: withScrollArea ? undefined : maxDropdownHeight,
      }}
      ref={parentRef}
    >
      {virtualizedContent}
    </div>
  );
}
