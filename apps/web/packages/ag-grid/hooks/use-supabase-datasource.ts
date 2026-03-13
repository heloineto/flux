import { useMemo, useState } from 'react';
import type {
  IServerSideDatasource,
  IServerSideGetRowsParams,
} from 'ag-grid-community';
import type { SupabaseClient } from '@supabase/supabase-js';

export type PostgrestQueryBuilder = ReturnType<
  ReturnType<SupabaseClient['from']>['select']
>;

export interface SupabaseDatasourceProps {
  /** The query to use for the datasource */
  queryFn: () => PostgrestQueryBuilder;
  /** Function to apply additional filters to the query */
  applyFilters?: (query: PostgrestQueryBuilder) => PostgrestQueryBuilder;
}

export interface SupabaseDatasourceQuery<TData = unknown> {
  isLoading: boolean;
  isError: boolean;
  error: unknown | null;
  data: TData[] | null;
}

export interface SupabaseDatasourceReturn<
  TData = unknown,
> extends SupabaseDatasourceQuery<TData> {
  datasource: IServerSideDatasource<TData>;
}

export function useSupabaseDatasource<TData = unknown>({
  queryFn,
  applyFilters,
}: SupabaseDatasourceProps): SupabaseDatasourceReturn<TData> {
  const [query, setQuery] = useState<SupabaseDatasourceQuery<TData>>({
    isLoading: false,
    isError: false,
    error: null,
    data: null,
  });

  const datasource = useMemo(() => {
    return {
      getRows: async (params: IServerSideGetRowsParams<TData>) => {
        try {
          let query = queryFn();

          const { startRow, endRow, sortModel } = params.request;
          if (typeof startRow !== 'number' || typeof endRow !== 'number') {
            throw new Error('Start row or end row is missing');
          }

          setQuery({
            isLoading: true,
            isError: false,
            error: null,
            data: null,
          });

          if (sortModel.length > 0) {
            const sort = sortModel[0];

            query = query.order(sort.colId, {
              ascending: sort.sort === 'asc',
              nullsFirst: sort.sort === 'asc',
            });
          }

          query = query.range(startRow, endRow - 1);

          if (applyFilters) {
            query = applyFilters(query);
          }

          query = query.throwOnError();

          const response = await query;
          setQuery({
            isLoading: false,
            isError: false,
            error: null,
            data: response.data as TData[],
          });

          const rowsThisPage = (response.data as TData[] | null) ?? [];

          const limit = endRow - startRow;
          let lastRow = -1;

          if (rowsThisPage.length < limit) {
            lastRow = startRow + rowsThisPage.length;
          }

          params.success({
            rowData: rowsThisPage,
            rowCount: lastRow,
          });
        } catch (error) {
          console.error('Error loading rows:', error);
          setQuery({
            isLoading: false,
            isError: true,
            error: error,
            data: null,
          });
          params.fail();
        }
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps --- Do not include queryFn in the dependencies
  }, [applyFilters]);

  return { datasource, ...query };
}
