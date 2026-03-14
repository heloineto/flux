'use client';

import { cn } from '@/shared/lib/utils';
import { SubmenuIndicator } from './submenu-indicator';

export interface ToolButtonProps {
  toolId: string;
  activeTool: string;
  onSelect: (id: string) => void;
  children: React.ReactNode;
  hasSubmenu?: boolean;
}

export function ToolButton({
  toolId,
  activeTool,
  onSelect,
  children,
  hasSubmenu,
}: ToolButtonProps) {
  return (
    <button
      onClick={() => onSelect(toolId)}
      className={cn(
        'relative flex size-9 items-center justify-center rounded-lg transition-colors',
        activeTool === toolId
          ? 'bg-violet-100 text-violet-600 dark:bg-violet-900 dark:text-violet-300'
          : 'dark:hover:bg-dark-500 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
      )}
    >
      {children}
      {hasSubmenu && <SubmenuIndicator />}
    </button>
  );
}
