import { ScrollArea } from '@mantine/core';
import {
  CallMessage,
  ContactMessage,
  DeletedMessage,
  ImageMessage,
  MessageBubble,
  MessageReply,
  TextMessage,
} from '@/entities/message';
import { RichText } from '@/shared/ui/rich-text';
import classes from './message-list.module.css';

export function MessageList() {
  return (
    <div className={classes.root}>
      <div className={classes.background} />
      <ScrollArea
        h="100dvh"
        type="always"
        scrollbarSize={10}
        classNames={{
          thumb: classes.scrollThumb,
        }}
        styles={{
          scrollbar: {
            backgroundColor: 'transparent',
          },
        }}
      >
        <div className="flex min-h-dvh flex-col">
          <div className={classes.spacer} />
          <ContactMessage
            name="My guy"
            direction="sent"
            status="read"
            time="00:00"
          />
          <ImageMessage
            direction="sent"
            status="read"
            time="00:00"
            src="/40x40.jpg"
          />
          <TextMessage
            direction="sent"
            status="read"
            time="00:00"
            text="Hello world! Hi there!"
          />
          <MessageBubble direction="sent" className="p-[3px]">
            <MessageReply />
          </MessageBubble>
          <CallMessage
            type="audio"
            duration="4 min"
            direction="received"
            time="14:57"
          />
          <CallMessage
            type="video"
            duration="44 min"
            direction="received"
            time="16:41"
          />
          <CallMessage
            type="audio"
            duration="44 min"
            direction="sent"
            time="16:41"
          />
          <CallMessage
            type="video"
            duration="44 min"
            direction="sent"
            time="16:41"
          />
          <DeletedMessage direction="sent" position="right" time="10:05" />
          <MessageBubble direction="sent">
            <RichText text="Check out this link: https://example.com" />
          </MessageBubble>
          <MessageBubble direction="sent">
            <RichText text="*bold* _italic_ ~strike~ `code`" />
          </MessageBubble>
        </div>
      </ScrollArea>
    </div>
  );
}
