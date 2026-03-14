import { useEffect, useRef, useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import type { CanvasMode } from './toolbar';

export function useCanvasMode() {
  const [canvasMode, setCanvasMode] = useState<CanvasMode>('select');
  const previousModeRef = useRef<CanvasMode | null>(null);

  useHotkeys([
    ['V', () => setCanvasMode('select')],
    ['H', () => setCanvasMode('hand')],
    [
      'Space',
      () => {
        if (previousModeRef.current) return;
        previousModeRef.current = canvasMode;
        setCanvasMode('hand');
      },
    ],
  ]);

  useEffect(() => {
    const handleSpaceUp = (event: KeyboardEvent) => {
      if (event.code !== 'Space') return;
      if (!previousModeRef.current) return;

      event.preventDefault();
      setCanvasMode(previousModeRef.current);
      previousModeRef.current = null;
    };

    document.addEventListener('keyup', handleSpaceUp);
    return () => document.removeEventListener('keyup', handleSpaceUp);
  }, []);

  return { canvasMode, setCanvasMode };
}
