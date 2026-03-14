import type { MessageMetaProps } from '../message-meta';
import classes from '../message-meta.module.css';

export function MessageMetaPlaceholder({
  time,
  showReceipt: showReceiptProp = true,
  status,
}: MessageMetaProps) {
  const showReceipt =
    showReceiptProp === true && status !== null && status !== undefined;

  if ((time === null || time === undefined) && !showReceipt) {
    return null;
  }

  return (
    <span className={classes.metaPlaceholder}>
      {time !== null && time !== undefined ? (
        <span className={classes.time}>{time}</span>
      ) : null}
      {showReceipt ? <span className={classes.receiptPlaceholder} /> : null}
    </span>
  );
}
