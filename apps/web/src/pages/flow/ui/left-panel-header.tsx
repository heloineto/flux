import { CaretDownIcon, SquareIcon } from '@phosphor-icons/react/dist/ssr';

interface LeftPanelHeaderProps {
  projectName: string;
  projectStatus: string;
  plan: string;
}

export function LeftPanelHeader({
  projectName,
  projectStatus,
  plan,
}: LeftPanelHeaderProps) {
  return (
    <div className="border-b border-gray-200 p-3 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-1.5 rounded-sm px-2 py-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {projectName}
          </span>
          <CaretDownIcon className="size-3.5 text-gray-400" />
        </button>
        <button className="rounded-sm p-1.5 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
          <SquareIcon className="size-4 text-gray-400" />
        </button>
      </div>
      <div className="mt-1.5 flex items-center gap-2 px-2">
        <span className="text-xs text-gray-500">{projectStatus}</span>
        <span className="rounded-sm bg-violet-100 px-1.5 py-0.5 text-xs font-medium text-violet-600 dark:bg-violet-900 dark:text-violet-300">
          {plan}
        </span>
      </div>
    </div>
  );
}
