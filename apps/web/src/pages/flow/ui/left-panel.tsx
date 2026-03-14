'use client';

import { LeftPanelHeader } from './left-panel-header';
import { LeftPanelLayers } from './left-panel-layers';
import { LeftPanelPages } from './left-panel-pages';

type LayerType = 'connector' | 'sim' | 'event' | 'frame' | 'image';

interface Layer {
  id: string;
  name: string;
  type: LayerType;
  children?: Layer[];
  isLocked?: boolean;
}

interface Page {
  id: string;
  name: string;
  isActive?: boolean;
}

interface LeftPanelProps {
  projectName?: string;
  projectStatus?: string;
  plan?: string;
  pages?: Page[];
  layers?: Layer[];
  onAddPage?: () => void;
  onSelectPage?: (id: string) => void;
  onSelectLayer?: (id: string) => void;
}

const defaultPages: Page[] = [
  { id: '1', name: 'Produtos' },
  { id: '2', name: 'Panificadora Zen - Chatbot' },
  { id: '3', name: 'Panificadora Zen - Chatbot V0', isActive: true },
  { id: '4', name: 'Componentes' },
  { id: '5', name: 'Design System' },
];

const defaultLayers: Layer[] = [
  { id: 'l1', name: 'Sim', type: 'sim' },
  { id: 'l2', name: 'Connector line', type: 'connector' },
  { id: 'l3', name: 'Connector line', type: 'connector' },
  { id: 'l4', name: 'Connector line', type: 'connector' },
  { id: 'l5', name: 'Connector line', type: 'connector' },
  { id: 'l6', name: 'Connector line', type: 'connector' },
  { id: 'l7', name: 'Sim', type: 'sim' },
  { id: 'l8', name: 'Connector line', type: 'connector' },
  { id: 'l9', name: 'Connector line', type: 'connector' },
  { id: 'l10', name: 'Event', type: 'event' },
  {
    id: 'l11',
    name: 'Frame 2',
    type: 'frame',
    children: [
      { id: 'l12', name: 'Event', type: 'event' },
      { id: 'l13', name: 'Connector line', type: 'connector' },
      { id: 'l14', name: 'Event', type: 'event' },
      { id: 'l15', name: 'Connector line', type: 'connector' },
      { id: 'l16', name: 'Connector line', type: 'connector' },
    ],
  },
  { id: 'l17', name: 'image 13', type: 'image', isLocked: true },
  { id: 'l18', name: 'Connector line', type: 'connector' },
  { id: 'l19', name: 'Event', type: 'event' },
  { id: 'l20', name: 'Event', type: 'event' },
  { id: 'l21', name: 'Event', type: 'event' },
];

export function LeftPanel({
  projectName = 'Zen - Chatbot',
  projectStatus = 'Drafts',
  plan = 'Free',
  pages = defaultPages,
  layers = defaultLayers,
  onAddPage,
  onSelectPage,
  onSelectLayer,
}: LeftPanelProps) {
  return (
    <aside className="dark:bg-dark-700 flex h-screen w-72 flex-col border-r border-gray-200 bg-white dark:border-gray-700">
      <LeftPanelHeader
        projectName={projectName}
        projectStatus={projectStatus}
        plan={plan}
      />
      <LeftPanelPages
        pages={pages}
        onAddPage={onAddPage}
        onSelectPage={onSelectPage}
      />
      <LeftPanelLayers layers={layers} onSelectLayer={onSelectLayer} />
    </aside>
  );
}
