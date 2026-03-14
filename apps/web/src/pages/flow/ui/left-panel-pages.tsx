import { PlusIcon } from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/shared/lib/utils';

interface Page {
  id: string;
  name: string;
  isActive?: boolean;
}

interface LeftPanelPagesProps {
  pages: Page[];
  onAddPage?: () => void;
  onSelectPage?: (id: string) => void;
}

export function LeftPanelPages({
  pages,
  onAddPage,
  onSelectPage,
}: LeftPanelPagesProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Pages
        </span>
        <button
          onClick={onAddPage}
          className="rounded-sm p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Add page"
        >
          <PlusIcon className="size-4 text-gray-400" />
        </button>
      </div>
      <div className="pb-2">
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => onSelectPage?.(page.id)}
            className={cn(
              'w-full px-3 py-1.5 text-left text-sm transition-colors',
              page.isActive
                ? 'bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300'
                : 'text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800'
            )}
          >
            {page.name}
          </button>
        ))}
      </div>
    </div>
  );
}
