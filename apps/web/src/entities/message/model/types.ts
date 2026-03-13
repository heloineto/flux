export type MessageStatus = 'sent' | 'delivered' | 'read';
export type MessageDirection = 'sent' | 'received';

export interface MessageProps {
  direction: MessageDirection;
  position?: 'right' | 'left';
  status?: MessageStatus;
  showReceipt?: boolean;
  time?: string;
}
