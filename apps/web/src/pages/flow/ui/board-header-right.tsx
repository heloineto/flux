'use client';

import { SquaresFourIcon, TimerIcon } from '@phosphor-icons/react';

export function BoardHeaderRight() {
  return (
    <div className="absolute top-4 right-4 z-10">
      <div className="flex items-center gap-3 rounded-lg bg-white px-3 py-2 shadow-md dark:bg-dark-700">
        <div className="flex -space-x-2">
          <div className="size-7 rounded-full border-2 border-white bg-amber-600 dark:border-dark-700" />
        </div>
        <button className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
          <SquaresFourIcon className="size-5" />
        </button>
        <div className="flex items-center gap-1.5">
          <div className="flex size-6 items-center justify-center rounded-full bg-emerald-500">
            <span className="text-xs font-medium text-white">G</span>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <TimerIcon className="size-4" />
            <span className="text-sm font-medium">03:00</span>
          </div>
        </div>
        <button className="rounded-md bg-violet-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-violet-700">
          Share
        </button>
      </div>
    </div>
  );
}
