'use client';

import { useState } from 'react';
import { RightPanelIsland } from './right-panel-island';
import { Toolbar } from './toolbar';
import { LeftPanel } from './left-panel';
import { FlowCanvas } from './flow-canvas';
import { ZoomControls } from './zoom-controls';
import { useCanvasMode } from './use-canvas-mode';

interface Props {
  flowId: string;
}

export function FlowPage({ flowId: _flowId }: Props) {
  const { canvasMode, setCanvasMode } = useCanvasMode();
  const [zoom, setZoom] = useState(100);

  return (
    <div className="flex h-screen w-full">
      <LeftPanel />
      <div className="relative grow overflow-hidden">
        <FlowCanvas />
        <RightPanelIsland />
        <Toolbar canvasMode={canvasMode} onCanvasModeChange={setCanvasMode} />
        <ZoomControls
          zoom={zoom}
          onZoomIn={() => setZoom(Math.min(200, zoom + 10))}
          onZoomOut={() => setZoom(Math.max(10, zoom - 10))}
        />
      </div>
    </div>
  );
}
