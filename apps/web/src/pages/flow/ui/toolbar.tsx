'use client';

import { ActionIcon, Tooltip } from '@mantine/core';
import {
  HandGrabbingIcon,
  NavigationArrowIcon,
} from '@phosphor-icons/react/dist/ssr';

export type CanvasMode = 'select' | 'hand';

interface ToolbarProps {
  canvasMode: CanvasMode;
  onCanvasModeChange: (mode: CanvasMode) => void;
}

export function Toolbar({ canvasMode, onCanvasModeChange }: ToolbarProps) {
  const isSelect = canvasMode === 'select';
  const isHand = canvasMode === 'hand';

  return (
    <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2">
      <div className="dark:bg-dark-700 flex items-center gap-1 rounded-lg border border-gray-100 bg-white shadow-sm">
        <div className="mr-4 border-r border-gray-200 p-2">
          <Tooltip label="Select (V)" position="top" withArrow>
            <ActionIcon
              variant={isSelect ? 'light' : 'transparent'}
              size="lg"
              onClick={() => onCanvasModeChange('select')}
            >
              <NavigationArrowIcon className="size-5" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Hand tool (H)" position="top" withArrow>
            <ActionIcon
              variant={isHand ? 'light' : 'transparent'}
              size="lg"
              onClick={() => onCanvasModeChange('hand')}
            >
              <HandGrabbingIcon className="size-5" />
            </ActionIcon>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
