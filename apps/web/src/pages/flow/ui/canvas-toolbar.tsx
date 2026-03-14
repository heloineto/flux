'use client';

import { HighlighterIcon } from './highlighter-icon';
import { MarkerIcon } from './marker-icon';
import { ToolButton } from './tool-button';
import { tools } from './tools';

interface CanvasToolbarProps {
  activeTool: string;
  onToolSelect: (id: string) => void;
}

export function CanvasToolbar({ activeTool, onToolSelect }: CanvasToolbarProps) {
  return (
    <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
      <div className="dark:bg-dark-700 flex items-center gap-1 rounded-xl bg-white p-2 shadow-lg">
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
