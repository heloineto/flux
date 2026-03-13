'use client';

import type {
  ServerSideSelectProps,
  ServerSideSelectType,
} from '@/packages/combobox-select';
import { ServerSideSelect } from '@/packages/combobox-select';
import type {
  DatabaseSelectFilter,
  DatabaseSelectOrder,
} from '../hooks/use-database-select-query';
import { useDatabaseSelectQuery } from '../hooks/use-database-select-query';
import { useState } from 'react';

export type DatabaseSelectProps<
  TType extends ServerSideSelectType = 'multiple',
> = Omit<
  ServerSideSelectProps<TType>,
  'query' | 'search' | 'onSearchChange'
> & {
  schema?: string;
  table: string;
  mainColumn: string;
  idColumn?: string;
  searchColumns?: string[];
  filters?: DatabaseSelectFilter[];
  order?: DatabaseSelectOrder[];
};

export function DatabaseSelect<
  TType extends ServerSideSelectType = 'multiple',
>({
  schema = 'public',
  table,
  mainColumn,
  idColumn = 'id',
  searchColumns = [mainColumn],
  filters,
  order,
  ...props
}: DatabaseSelectProps<TType>) {
  const [search, setSearch] = useState('');

  const query = useDatabaseSelectQuery({
    table,
    schema,
    mainColumn,
    idColumn,
    search,
    searchColumns,
    filters,
    order,
  });

  return (
    <ServerSideSelect<TType>
      search={search}
      onSearchChange={setSearch}
      query={query}
      {...props}
    />
  );
}
