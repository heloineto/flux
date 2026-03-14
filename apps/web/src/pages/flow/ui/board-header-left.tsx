'use client';

import { CopyIcon } from '@phosphor-icons/react';

export function BoardHeaderLeft() {
  return (
    <div className="absolute top-4 left-4 z-10">
      <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-md dark:bg-dark-700">
        <button className="flex items-center gap-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="3" width="8" height="8" rx="2" fill="#A855F7" />
            <rect
              x="13"
              y="3"
              width="8"
              height="8"
              rx="2"
              fill="#A855F7"
              opacity="0.6"
            />
            <rect
              x="3"
              y="13"
              width="8"
              height="8"
              rx="2"
              fill="#A855F7"
              opacity="0.4"
            />
            <rect
              x="13"
              y="13"
              width="8"
              height="8"
              rx="2"
              fill="#A855F7"
              opacity="0.2"
            />
          </svg>
          <svg
            viewBox="0 0 24 24"
            className="size-3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="h-4 w-px bg-gray-200 dark:bg-dark-400" />
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Untitled</span>
        <span className="rounded-sm bg-violet-100 px-1.5 py-0.5 text-xs font-medium text-violet-600 dark:bg-violet-900 dark:text-violet-300">
          Free
        </span>
        <div className="h-4 w-px bg-gray-200 dark:bg-dark-400" />
        <button className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
          <CopyIcon className="size-4" />
        </button>
      </div>
    </div>
  );
}
