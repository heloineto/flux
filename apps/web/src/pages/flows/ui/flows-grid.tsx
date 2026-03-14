'use client';

import { useState } from 'react';
import { EmptyState } from '@packages/states';
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
    <div className="flex flex-col gap-4">
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((flow) => (
            <FlowCard
              id={flow.id}
              key={flow.id}
              name={flow.name}
              updatedAt={flow.updatedAt}
            />
          ))}
          <CreateFlowCard />
        </div>
      )}
    </div>
  );
}
