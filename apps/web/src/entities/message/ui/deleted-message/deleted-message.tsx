import { Prohibit } from '@phosphor-icons/react/dist/ssr';
import { MessageBubble } from '../message-bubble';
import { MessageMeta } from '../message-meta';
import type { MessageProps } from '../../model/types';
import { MessageMetaPlaceholder } from '../message-meta';
import classes from './deleted-message.module.css';

export interface DeletedMessageProps extends MessageProps {}

export function DeletedMessage({
  direction,
  position,
  time,
}: DeletedMessageProps) {
  return (
    <MessageBubble
      classNames={{ root: classes.bubble }}
      direction={direction}
      position={position}
    >
      <Prohibit className={classes.icon} />
      <span className={classes.text}>Eliminaste este mensaje</span>
      <MessageMetaPlaceholder time={time} />
      <MessageMeta className={classes.meta} time={time} />
    </MessageBubble>
  );
}
