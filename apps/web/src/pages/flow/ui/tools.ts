import {
  BezierCurveIcon,
  ChatCircleIcon,
  CursorIcon,
  HandIcon,
  NoteIcon,
  PlusIcon,
  ShapesIcon,
  SquareIcon,
  SquaresFourIcon,
  TableIcon,
  TextTIcon,
} from '@phosphor-icons/react/dist/ssr';

export const tools = [
  { id: 'select', icon: CursorIcon, label: 'Select', active: true },
  { id: 'hand', icon: HandIcon, label: 'Hand tool' },
  { id: 'marker', type: 'marker' as const },
  { id: 'highlighter', type: 'highlighter' as const },
  { id: 'shape', icon: SquareIcon, label: 'Shape', hasSubmenu: true },
  { id: 'connector', icon: BezierCurveIcon, label: 'Connector' },
  { id: 'text', icon: TextTIcon, label: 'Text' },
  { id: 'sticky', icon: NoteIcon, label: 'Sticky note' },
  { id: 'table', icon: TableIcon, label: 'Table' },
  { id: 'stamp', icon: ShapesIcon, label: 'Stamp' },
  { id: 'comment', icon: ChatCircleIcon, label: 'Comment' },
  { id: 'widgets', icon: SquaresFourIcon, label: 'Widgets' },
  { id: 'more', icon: PlusIcon, label: 'More tools' },
];
