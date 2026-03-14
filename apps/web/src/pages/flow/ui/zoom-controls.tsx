'use client';

import {
  MinusIcon,
  PlusIcon,
  QuestionIcon,
} from '@phosphor-icons/react/dist/ssr';

interface ZoomControlsProps {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

export function ZoomControls({
  zoom: _zoom,
  onZoomIn,
  onZoomOut,
}: ZoomControlsProps) {
  return (
    <div className="absolute right-4 bottom-6 z-10">
      <div className="flex items-center gap-2">
        <div className="dark:bg-dark-700 flex items-center rounded-lg bg-white shadow-md">
          <button
            onClick={onZoomOut}
            className="flex size-9 items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <MinusIcon className="size-4" />
          </button>
          <button
            onClick={onZoomIn}
            className="flex size-9 items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <PlusIcon className="size-4" />
          </button>
        </div>
        <button className="dark:bg-dark-700 flex size-9 items-center justify-center rounded-lg bg-white text-gray-500 shadow-md hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
          <QuestionIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}
