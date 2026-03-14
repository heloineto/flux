import { Card, ThemeIcon } from '@mantine/core';
import { ShareNetworkIcon } from '@phosphor-icons/react/dist/ssr';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

type FlowCardProps = {
  id: string;
  name: string;
  updatedAt: string;
};

function formatRelativeTime(dateStr: string): string {
  return `Updated ${dayjs(dateStr).fromNow(true)} ago`;
}

export function FlowCard({ id, name, updatedAt }: FlowCardProps) {
  return (
    <Card
      component="a"
      href={`/flows/${id}`}
      padding="xs"
      radius="lg"
      style={{ cursor: 'pointer', textDecoration: 'none' }}
    >
      <div className="dark:bg-dark-300 aspect-16/10 rounded-lg bg-gray-100" />

      <div className="flex items-center gap-3 px-2.5 pb-2.5">
        <ThemeIcon radius="xl" size="lg" color="blue" flex="0 0 auto">
          <ShareNetworkIcon size={16} />
        </ThemeIcon>

        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-500">
            {formatRelativeTime(updatedAt)}
          </p>
        </div>
      </div>
    </Card>
  );
}
