/* eslint-disable jsx-a11y/alt-text --- WhatsApp does not provide it */
import { useEffect, useRef, useState } from 'react';
import { MessageBubble } from '../message-bubble';
import { MessageMeta } from '../message-meta';
import type { MessageProps } from '../../model/types';
import classes from './image-message.module.css';

const MIN_WIDTH = 240;
const MAX_WIDTH = 330;
const MIN_HEIGHT = 85;
const MAX_HEIGHT = 330;

function calculateDimensions(img: HTMLImageElement) {
  const aspectRatio = img.naturalWidth / img.naturalHeight;
  let width = MAX_WIDTH;
  let height = width / aspectRatio;

  if (height < MIN_HEIGHT) {
    height = MIN_HEIGHT;
    width = height * aspectRatio;
  } else if (height > MAX_HEIGHT) {
    height = MAX_HEIGHT;
    width = height * aspectRatio;
  }

  width = Math.max(MIN_WIDTH, Math.min(width, MAX_WIDTH));

  return { width, height };
}

export interface ImageMessageProps extends MessageProps {
  text?: string;
  src?: string;
}

export function ImageMessage({
  direction,
  showReceipt = direction === 'sent',
  status,
  time,
  text,
  src,
  ...rest
}: ImageMessageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [dimensions, setDimensions] = useState({
    width: MAX_WIDTH,
    height: MAX_HEIGHT,
  });

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    img.onload = () => setDimensions(calculateDimensions(img));
    if (img.complete) setDimensions(calculateDimensions(img));
  }, []);

  return (
    <MessageBubble className={classes.bubble} direction={direction} {...rest}>
      <div className={classes.container}>
        <div
          style={{
            height: dimensions.height,
            width: dimensions.width,
            overflow: 'hidden',
          }}
        >
          <img
            className={classes.image}
            ref={imgRef}
            src={src}
            onLoad={(event) => {
              setDimensions(calculateDimensions(event.currentTarget));
            }}
          />
        </div>
        <div className={classes.overlay}>
          <MessageMeta
            className={classes.meta}
            showReceipt={showReceipt}
            status={status}
            time={time}
          />
        </div>
      </div>
      {text}
    </MessageBubble>
  );
}
