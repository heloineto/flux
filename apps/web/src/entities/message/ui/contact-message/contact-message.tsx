import { Avatar } from '@mantine/core';
import { MessageMeta } from '../message-meta';
import { MessageBubble } from '../message-bubble';
import type { MessageProps } from '../../model/types';
import classes from './contact-message.module.css';

export interface ContactMessageProps extends MessageProps {
  name: string;
}

export function ContactMessage({
  direction,
  showReceipt = direction === 'sent',
  status,
  time,
  name,
  ...rest
}: ContactMessageProps) {
  return (
    <MessageBubble direction={direction} {...rest}>
      <div className={classes.contact}>
        <Avatar />
        <div className={classes.name}>{name}</div>
        <MessageMeta
          className={classes.meta}
          showReceipt={showReceipt}
          status={status}
          time={time}
        />
      </div>
      <div className={classes.buttons}>
        <button className={classes.button} type="button">
          Message
        </button>
      </div>
    </MessageBubble>
  );
}
