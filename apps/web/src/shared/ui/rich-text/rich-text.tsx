import React, { type JSX } from 'react';
import classes from './rich-text.module.css';

interface Formatter {
  type: string;
  pattern: RegExp;
  component: (content: string, key: React.Key) => JSX.Element;
}

interface TextSegment {
  type: string;
  content: string;
}

const formatters: Formatter[] = [
  {
    type: 'bold',
    pattern: /\*(.+?)\*/g,
    component: (content, key) => <strong key={key}>{content}</strong>,
  },
  {
    type: 'italic',
    pattern: /_(.+?)_/g,
    component: (content, key) => <em key={key}>{content}</em>,
  },
  {
    type: 'strikethrough',
    pattern: /~(.+?)~/g,
    component: (content, key) => <del key={key}>{content}</del>,
  },
  {
    type: 'inlineCode',
    pattern: /`(.+?)`/g,
    component: (content, key) => (
      <code key={key} className={classes.inlineCode}>
        {content}
      </code>
    ),
  },
  {
    type: 'multilineCode',
    pattern: /```([\s\S]+?)```/g,
    component: (content, key) => (
      <pre key={key}>
        <code className={classes.multilineCode}>{content}</code>
      </pre>
    ),
  },
  {
    type: 'link',
    pattern: /(https?:\/\/[^\s]+)/g,
    component: (content, key) => (
      <a
        key={key}
        href={content}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        {content}
      </a>
    ),
  },
  {
    type: 'quote',
    pattern: /^>\s(.+)$/gm,
    component: (content, key) => (
      <blockquote key={key} className={classes.quote}>
        {content}
      </blockquote>
    ),
  },
  {
    type: 'bulletList',
    pattern: /^[*-]\s(.+)$/gm,
    component: (content, key) => (
      <li key={key} className={classes.bulletItem}>
        {content}
      </li>
    ),
  },
  {
    type: 'numberedList',
    pattern: /^\d+\.\s(.+)$/gm,
    component: (content, key) => (
      <li key={key} className={classes.numberedItem}>
        {content}
      </li>
    ),
  },
];

const formatText = (text: string): (string | JSX.Element)[] => {
  let result: TextSegment[] = [{ type: 'text', content: text }];

  formatters.forEach(({ type, pattern }) => {
    result = result.flatMap((segment) => {
      if (segment.type !== 'text') return [segment];

      const parts = segment.content.split(pattern);
      return parts.map((part, index) => {
        if (index % 2 === 0) return { type: 'text', content: part };
        return { type, content: part };
      });
    });
  });

  return result.map((segment, index) => {
    if (segment.type === 'text') {
      return segment.content;
    }

    const formatter = formatters.find((f) => f.type === segment.type);

    if (!formatter) {
      throw new Error(`Formatter not found for type: ${segment.type}`);
    }

    return formatter.component(segment.content, index);
  });
};

interface RichTextProps {
  text: string;
}

export function RichText({ text }: RichTextProps): JSX.Element {
  return <div className={classes.richText}>{formatText(text)}</div>;
}
