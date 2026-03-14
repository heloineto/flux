import { TreeStructureIcon } from '@phosphor-icons/react/dist/ssr';
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
    <a
      href={`/flows/${id}`}
      className="dark:border-dark-500 cursor-pointer overflow-hidden rounded-md border"
    >
      <div className="dark:bg-dark-800 dark:border-dark-500 aspect-16/10 border-b bg-gray-100" />

      <div className="mt-2 flex items-center gap-3 px-2.5 pb-2.5">
        <div className="flex size-8 items-center justify-center rounded-sm bg-blue-500">
          <TreeStructureIcon size={16} />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-500">
            {formatRelativeTime(updatedAt)}
          </p>
        </div>
      </div>
    </a>
  );
}
