'use client';

import {
  BezierCurveIcon,
  ChatCircleIcon,
  CursorIcon,
  HandIcon,
  NoteIcon,
  PlusIcon,
  ShapesIcon,
  SquareIcon,
  SquaresFourIcon,
  TableIcon,
  TextTIcon,
} from '@phosphor-icons/react';
import { cn } from '@/shared/lib/utils';

function MarkerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 20L7 17M7 17L16 8L19 5C19.5523 4.44772 19.5523 3.55228 19 3C18.4477 2.44772 17.5523 2.44772 17 3L14 6L5 15M7 17L5 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 6L16 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HighlighterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="4"
        width="8"
        height="16"
        rx="1"
        fill="#F9A8D4"
        stroke="#F9A8D4"
        strokeWidth="1"
      />
      <rect
        x="6"
        y="16"
        width="8"
        height="4"
        rx="1"
        fill="#9CA3AF"
        stroke="#9CA3AF"
        strokeWidth="1"
      />
    </svg>
  );
}

const tools = [
  { id: 'select', icon: CursorIcon, label: 'Select', active: true },
  { id: 'hand', icon: HandIcon, label: 'Hand tool' },
  { id: 'marker', type: 'marker' as const },
  { id: 'highlighter', type: 'highlighter' as const },
  { id: 'shape', icon: SquareIcon, label: 'Shape', hasSubmenu: true },
  { id: 'connector', icon: BezierCurveIcon, label: 'Connector' },
  { id: 'text', icon: TextTIcon, label: 'Text' },
  { id: 'sticky', icon: NoteIcon, label: 'Sticky note' },
  { id: 'table', icon: TableIcon, label: 'Table' },
  { id: 'stamp', icon: ShapesIcon, label: 'Stamp' },
  { id: 'comment', icon: ChatCircleIcon, label: 'Comment' },
  { id: 'widgets', icon: SquaresFourIcon, label: 'Widgets' },
  { id: 'more', icon: PlusIcon, label: 'More tools' },
];

function SubmenuIndicator() {
  return (
    <span className="absolute right-1 bottom-1 size-1.5">
      <svg viewBox="0 0 6 6" fill="currentColor" className="size-full">
        <path d="M0 6L6 6L6 0C6 3.31371 3.31371 6 0 6Z" />
      </svg>
    </span>
  );
}

interface ToolButtonProps {
  toolId: string;
  activeTool: string;
  onSelect: (id: string) => void;
  children: React.ReactNode;
  hasSubmenu?: boolean;
}

function ToolButton({
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
          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-dark-500 dark:hover:text-gray-100'
      )}
    >
      {children}
      {hasSubmenu && <SubmenuIndicator />}
    </button>
  );
}

interface CanvasToolbarProps {
  activeTool: string;
  onToolSelect: (id: string) => void;
}

export function CanvasToolbar({
  activeTool,
  onToolSelect,
}: CanvasToolbarProps) {
  return (
    <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-xl bg-white p-2 shadow-lg dark:bg-dark-700">
        {tools.map((tool) => {
          if (tool.type === 'marker') {
            return (
              <ToolButton
                key={tool.id}
                toolId={tool.id}
                activeTool={activeTool}
                onSelect={onToolSelect}
              >
                <MarkerIcon className="size-5" />
              </ToolButton>
            );
          }

          if (tool.type === 'highlighter') {
            return (
              <ToolButton
                key={tool.id}
                toolId={tool.id}
                activeTool={activeTool}
                onSelect={onToolSelect}
              >
                <HighlighterIcon className="size-6" />
              </ToolButton>
            );
          }

          const Icon = tool.icon!;
          return (
            <ToolButton
              key={tool.id}
              toolId={tool.id}
              activeTool={activeTool}
              onSelect={onToolSelect}
              hasSubmenu={tool.hasSubmenu}
            >
              <Icon className="size-5" />
            </ToolButton>
          );
        })}
      </div>
    </div>
  );
}
