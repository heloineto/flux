import type { JSX } from 'react';
import { PhoneIncoming, PhoneOutgoing } from '@phosphor-icons/react/dist/ssr';
import { MessageBubble } from '../message-bubble';
import { MessageMeta } from '../message-meta';
import type { MessageDirection, MessageProps } from '../../model/types';
import { VideoOutgoing } from '../icons/video-outgoing';
import { MessageMetaPlaceholder } from '../message-meta';
import { VideoIncoming } from '../icons/video-incoming';
import classes from './call-message.module.css';

const callConfig = {
  video: {
    label: {
      single: 'Videollamada',
      group: 'Videollamada grupal',
    },
  },
  audio: {
    label: {
      single: 'Llamada',
      group: 'Llamada grupal',
    },
  },
};

function renderCallIcon(
  type: 'video' | 'audio',
  direction: MessageDirection
): JSX.Element {
  if (type === 'video' && direction === 'sent')
    return <VideoOutgoing weight="fill" />;
  if (type === 'video' && direction === 'received')
    return <VideoIncoming weight="fill" />;
  if (direction === 'sent') return <PhoneOutgoing weight="fill" />;
  return <PhoneIncoming weight="fill" />;
}

const getCallLabel = (type: 'video' | 'audio', participants?: number) => {
  if (participants !== undefined) {
    return `${callConfig[type].label.group} • ${participants} contactos invitados`;
  }
  return callConfig[type].label.single;
};

export interface CallMessageProps extends Omit<MessageProps, 'status'> {
  type: 'video' | 'audio';
  duration: string;
  participants?: number;
}

export function CallMessage({
  type,
  duration,
  participants,
  direction,
  position,
  time,
}: CallMessageProps) {
  const label = getCallLabel(type, participants);

  return (
    <MessageBubble
      classNames={{ root: classes.bubble }}
      direction={direction}
      position={position}
    >
      <div className={classes.content}>
        <span className={classes.icon}>{renderCallIcon(type, direction)}</span>
        <div className={classes.textContainer}>
          <span className={classes.callType}>{label}</span>
          <span className={classes.duration}>{duration}</span>
        </div>
        <MessageMetaPlaceholder time={time} />
        <MessageMeta className={classes.meta} time={time} />
      </div>
    </MessageBubble>
  );
}
