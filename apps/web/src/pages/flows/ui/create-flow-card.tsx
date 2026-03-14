import { Card } from '@mantine/core';
import { PlusIcon } from '@phosphor-icons/react/dist/ssr';

export function CreateFlowCard() {
  return (
    <Card
      withBorder
      padding="lg"
      style={{
        cursor: 'pointer',
        borderStyle: 'dashed',
      }}
    >
      <div className="flex h-full min-h-[80px] flex-col items-center justify-center gap-2">
        <PlusIcon size={24} />
        <span className="text-sm font-medium">Create new flow</span>
      </div>
    </Card>
  );
}
