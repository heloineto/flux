'use client';

import type { ServerSideSelectItem } from '@/packages/combobox-select';
import { createClient } from '@/lib/supabase/client';
import { useDebouncedValue } from '@mantine/hooks';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { z } from 'zod';

// FUTURE: Make this type-safe
export type DatabaseSelectFilter = {
  column: string;
  operator: 'in' | 'not.in';
  value: string[] | number[];
};

export type DatabaseSelectOrder = {
  column: string;
  ascending?: boolean;
  nullsFirst?: boolean;
};

export function useDatabaseSelectQuery({
  table,
  schema = 'public',
  mainColumn,
  idColumn = 'id',
  searchColumns = [mainColumn],
  search,
  filters,
  order,
}: {
  table: string;
  schema?: string;
  mainColumn: string;
  idColumn?: string;
  search: string;
  searchColumns?: string[];
  order?: DatabaseSelectOrder[];
  filters?: DatabaseSelectFilter[];
}) {
  const supabase = createClient();
  const [debouncedSearch] = useDebouncedValue(search, 300);

  const params = {
    table_name: table,
    p_schema: schema,
    search: debouncedSearch,
    search_columns: searchColumns,
    filters: filters,
    p_order: order,
    p_limit: 100,
  };

  const responseSchema = z.array(
    z.looseObject({
      [idColumn]: z.union([z.number(), z.string()]),
      [mainColumn]: z.string(),
    })
  );

  return useInfiniteQuery({
    queryKey: ['fetch_database_options', params],
    queryFn: async ({ pageParam = 0 }) => {
      const result = await supabase
        .rpc('fetch_database_options', {
          ...params,
          p_offset: pageParam * params.p_limit,
        })
        .throwOnError();

      const data = responseSchema.parse(result.data);

      const items: ServerSideSelectItem[] = data.map((item) => {
        return {
          id: item[idColumn].toString(),
          label: item[mainColumn] as string,
          type: 'data',
          data: item,
        };
      });

      return {
        data: items,
        nextCursor: items.length === params.p_limit ? pageParam + 1 : undefined,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: 0,
    placeholderData: keepPreviousData,
  });
}

export type DatabaseSelectQuery = ReturnType<typeof useDatabaseSelectQuery>;
