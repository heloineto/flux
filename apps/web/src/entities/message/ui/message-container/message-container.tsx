import type { ReactNode } from 'react';
import classes from './message-container.module.css';

export interface MessageContainerProps {
  direction: 'sent' | 'received';
  position?: 'right' | 'left';
  children: ReactNode;
}

export function MessageContainer({
  direction,
  position = direction === 'sent' ? 'right' : 'left',
  children,
}: MessageContainerProps) {
  return (
    <div
      className={classes.root}
      data-position={position}
      data-direction={direction}
    >
      {children}
    </div>
  );
}
