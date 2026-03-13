'use client';

import type { Factory, InputVariant } from '@mantine/core';
import type {
  ComboboxSelectItem,
  ComboboxSelectProps,
  ComboboxSelectStylesNames,
  ComboboxSelectType,
} from '../../combobox-select';
import { ComboboxSelect } from '../../combobox-select';
import { ServerSideSelectOptions } from './server-side-select-options';

export type { ComboboxSelectItemType as ServerSideSelectItemType } from '../../combobox-select';
export type { ComboboxSelectItem as ServerSideSelectItem } from '../../combobox-select';
export type { ComboboxSelectType as ServerSideSelectType } from '../../combobox-select';
export type { ComboboxSelectMultipleValue as ServerSideSelectMultipleValue } from '../../combobox-select';
export type { ComboboxSelectValue as ServerSideSelectValue } from '../../combobox-select';
export type { ComboboxSelectStylesNames as ServerSideSelectStylesNames } from '../../combobox-select';

export interface ServerSideSelectQuery {
  data?: { pages: { data: ComboboxSelectItem[] }[] };
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

export interface ServerSideSelectProps<
  Type extends ComboboxSelectType = 'multiple',
> extends Omit<ComboboxSelectProps<Type>, 'items' | 'renderOptions'> {
  query: ServerSideSelectQuery;
}

export type ServerSideSelectFactory = Factory<{
  props: ServerSideSelectProps;
  ref: HTMLInputElement;
  stylesNames: ComboboxSelectStylesNames;
  variant: InputVariant;
}>;

type ServerSideSelectComponent = <Type extends ComboboxSelectType = 'multiple'>(
  props: ServerSideSelectProps<Type> & {
    ref?: React.ForwardedRef<HTMLInputElement>;
  }
) => React.JSX.Element;

function ServerSideSelectInner<Type extends ComboboxSelectType = 'multiple'>({
  query,
  ...rest
}: ServerSideSelectProps<Type>) {
  const items: ComboboxSelectItem[] =
    query.data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <ComboboxSelect
      {...rest}
      items={items}
      renderOptions={(renderProps) => (
        <ServerSideSelectOptions query={query} {...renderProps} />
      )}
    />
  );
}

export const ServerSideSelect =
  ServerSideSelectInner as ServerSideSelectComponent;
