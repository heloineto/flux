'use client';

import { SimpleGrid, Stack } from '@mantine/core';
import { useState } from 'react';
import { EmptyState } from '@/shared/ui/states';
import { CreateFlowCard } from './create-flow-card';
import { FlowCard } from './flow-card';
import { FlowsSearch } from './flows-search';

type Flow = {
  id: string;
  name: string;
  authorId: string;
  tenantId: string;
  createdAt: string;
  updatedAt: string;
};

type FlowsGridProps = {
  flows: Flow[];
};

export function FlowsGrid({ flows }: FlowsGridProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = flows.filter((flow) =>
    flow.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasFilters = searchQuery.length > 0;

  return (
    <Stack gap="md">
      <FlowsSearch onSearch={setSearchQuery} />
      {filtered.length === 0 ? (
        <EmptyState
          hasFilters={hasFilters}
          title={hasFilters ? 'No flows found' : 'No flows yet'}
          description={
            hasFilters
              ? 'Try a different search term'
              : 'Create your first flow to get started'
          }
        />
      ) : (
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
          {filtered.map((flow) => (
            <FlowCard
              id={flow.id}
              key={flow.id}
              name={flow.name}
              updatedAt={flow.updatedAt}
            />
          ))}
          <CreateFlowCard />
        </SimpleGrid>
      )}
    </Stack>
  );
}
