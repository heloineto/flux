'use client';

import { ActionIcon } from '@mantine/core';
import { HighlighterIcon } from './highlighter-icon';
import { MarkerIcon } from './marker-icon';
import { ToolButton } from './tool-button';
import { tools } from './tools';
import {
  HandGrabbingIcon,
  NavigationArrowIcon,
} from '@phosphor-icons/react/dist/ssr';

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
      <div className="dark:bg-dark-700 flex items-center gap-1 rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
        <ActionIcon variant="light" size="lg">
          <NavigationArrowIcon className="size-5" />
        </ActionIcon>
        <ActionIcon variant="transparent" size="lg">
          <HandGrabbingIcon className="size-5" />
        </ActionIcon>

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
