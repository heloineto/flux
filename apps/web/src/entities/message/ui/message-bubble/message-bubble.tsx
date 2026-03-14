import type { ReactNode } from 'react';
import clsx from 'clsx';
import type { MessageProps } from '../../model/types';
import classes from './message-bubble.module.css';
import { TailLeft } from './components/tail-left';
import { TailRight } from './components/tail-right';

export interface MessageBubbleProps extends Pick<
  MessageProps,
  'direction' | 'position'
> {
  children: ReactNode;
  className?: string;
  classNames?: {
    root?: string;
    tail?: string;
  };
}

export function MessageBubble({
  className,
  classNames,
  direction,
  position = direction === 'sent' ? 'right' : 'left',
  children,
}: MessageBubbleProps) {
  return (
    <div
      className={classes.container}
      data-position={position}
      data-direction={direction}
    >
      <div
        className={clsx(className, classNames?.root, classes.root)}
        data-position={position}
        data-direction={direction}
      >
        {children}
        {position === 'right' ? (
          <TailRight className={clsx(classNames?.tail, classes.tail)} />
        ) : (
          <TailLeft className={clsx(classNames?.tail, classes.tail)} />
        )}
      </div>
    </div>
  );
}
