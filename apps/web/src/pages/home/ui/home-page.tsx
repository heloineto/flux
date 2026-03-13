'use client';

import { useState } from 'react';
import { BoardHeaderLeft } from './board-header-left';
import { BoardHeaderRight } from './board-header-right';
import { CanvasToolbar } from './canvas-toolbar';
import { ZoomControls } from './zoom-controls';

export function HomePage() {
  const [activeTool, setActiveTool] = useState('select');
  const [zoom, setZoom] = useState(100);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#FAFAFA]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, #D1D5DB 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <BoardHeaderLeft />
      <BoardHeaderRight />

      <CanvasToolbar activeTool={activeTool} onToolSelect={setActiveTool} />

      <ZoomControls
        zoom={zoom}
        onZoomIn={() => setZoom(Math.min(200, zoom + 10))}
        onZoomOut={() => setZoom(Math.max(10, zoom - 10))}
      />
    </div>
  );
}
