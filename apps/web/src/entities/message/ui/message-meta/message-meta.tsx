import type { MessageProps } from '../../model/types';
import classes from './message-meta.module.css';
import { MessageReceipt } from './components/message-receipt';
import { cn } from '@/shared/lib/utils';

export interface MessageMetaProps extends Pick<
  MessageProps,
  'showReceipt' | 'status' | 'time'
> {
  className?: string;
}

export function MessageMeta({
  className,
  time,
  showReceipt: showReceiptProp = true,
  status,
}: MessageMetaProps) {
  const showReceipt =
    showReceiptProp && status !== null && status !== undefined;

  if (time === null || time === undefined) {
    if (!showReceipt) return null;
  }

  return (
    <div className={cn(className, classes.meta)}>
      {time !== null && time !== undefined ? (
        <span className={classes.time}>{time}</span>
      ) : null}
      {showReceipt && status !== null && status !== undefined ? (
        <MessageReceipt status={status} />
      ) : null}
    </div>
  );
}
