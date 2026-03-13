import { MessageBubble } from '../message-bubble';
import { MessageMeta } from '../message-meta';
import { MessageMetaPlaceholder } from '../message-meta';
import type { MessageProps } from '../../model/types';
import classes from './text-message.module.css';

export interface TextMessageProps extends MessageProps {
  text: string;
}

export function TextMessage({
  text,
  direction,
  position,
  showReceipt = direction === 'sent',
  status,
  time,
}: TextMessageProps) {
  return (
    <MessageBubble
      classNames={{ root: classes.bubble }}
      direction={direction}
      position={position}
    >
      {text}
      <MessageMetaPlaceholder
        showReceipt={showReceipt}
        status={status}
        time={time}
      />
      <MessageMeta
        className={classes.meta}
        showReceipt={showReceipt}
        status={status}
        time={time}
      />
    </MessageBubble>
  );
}
