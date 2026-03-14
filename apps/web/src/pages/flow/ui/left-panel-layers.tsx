import { useMemo } from 'react';
import {
  CaretDownIcon,
  CaretRightIcon,
  DiamondIcon,
  FrameCornersIcon,
  ImageIcon,
  LockIcon,
  PenIcon,
  SquareIcon,
} from '@phosphor-icons/react/dist/ssr';
import {
  type RenderTreeNodePayload,
  Tree,
  type TreeNodeData,
  getTreeExpandedState,
  useTree,
} from '@mantine/core';
import { cn } from '@/shared/lib/utils';

type LayerType = 'connector' | 'sim' | 'event' | 'frame' | 'image';

interface Layer {
  id: string;
  name: string;
  type: LayerType;
  children?: Layer[];
  isLocked?: boolean;
}

interface LeftPanelLayersProps {
  layers: Layer[];
  onSelectLayer?: (id: string) => void;
}

function getLayerIcon(type: LayerType) {
  const iconClass = 'size-3.5';

  switch (type) {
    case 'connector':
      return <PenIcon className={cn(iconClass, 'text-violet-500')} />;
    case 'sim':
      return <PenIcon className={cn(iconClass, 'text-gray-400')} />;
    case 'event':
      return <DiamondIcon className={cn(iconClass, 'text-gray-400')} />;
    case 'frame':
      return <FrameCornersIcon className={cn(iconClass, 'text-gray-400')} />;
    case 'image':
      return <ImageIcon className={cn(iconClass, 'text-gray-400')} />;
    default:
      return <SquareIcon className={cn(iconClass, 'text-gray-400')} />;
  }
}

function layersToTreeData(layers: Layer[]): TreeNodeData[] {
  return layers.map((layer) => ({
    value: layer.id,
    label: layer.name,
    nodeProps: { type: layer.type, isLocked: layer.isLocked },
    children: layer.children ? layersToTreeData(layer.children) : undefined,
  }));
}

function buildLayerMetaMap(
  layers: Layer[]
): Map<string, { type: LayerType; isLocked?: boolean }> {
  const map = new Map<string, { type: LayerType; isLocked?: boolean }>();

  function walk(items: Layer[]) {
    for (const layer of items) {
      map.set(layer.id, { type: layer.type, isLocked: layer.isLocked });
      if (layer.children) walk(layer.children);
    }
  }

  walk(layers);
  return map;
}

function LayerTreeNode({
  node,
  expanded,
  hasChildren,
  elementProps,
  level,
  metaMap,
  onSelect,
}: RenderTreeNodePayload & {
  metaMap: Map<string, { type: LayerType; isLocked?: boolean }>;
  onSelect?: (id: string) => void;
}) {
  const meta = metaMap.get(node.value);
  const type = meta?.type ?? 'sim';
  const isLocked = meta?.isLocked ?? false;

  return (
    <div
      {...elementProps}
      className={cn(
        'group flex cursor-pointer items-center gap-2 px-3 py-1.5 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800',
        type === 'connector' && 'text-violet-500'
      )}
      style={{ paddingLeft: `${12 + level * 16}px` }}
      onClick={(event) => {
        elementProps.onClick(event);
        onSelect?.(node.value);
      }}
    >
      {hasChildren && (
        <span className="-ml-1 rounded-sm p-0.5 hover:bg-gray-200 dark:hover:bg-gray-700">
          {expanded ? (
            <CaretDownIcon className="size-3 text-gray-400" />
          ) : (
            <CaretRightIcon className="size-3 text-gray-400" />
          )}
        </span>
      )}
      {getLayerIcon(type)}
      <span
        className={cn(
          'flex-1 truncate text-sm',
          type === 'connector'
            ? 'text-violet-500'
            : 'text-gray-900 dark:text-gray-100'
        )}
      >
        {node.label}
      </span>
      {isLocked && (
        <div className="flex items-center gap-1.5 opacity-60">
          <LockIcon className="size-3" />
          <svg className="size-3.5" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 8h4M10 8h4M8 2v4M8 10v4"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export function LeftPanelLayers({
  layers,
  onSelectLayer,
}: LeftPanelLayersProps) {
  const treeData = useMemo(() => layersToTreeData(layers), [layers]);
  const metaMap = useMemo(() => buildLayerMetaMap(layers), [layers]);

  const tree = useTree({
    initialExpandedState: getTreeExpandedState(treeData, ['l11']),
  });

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-3 py-2">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Layers
        </span>
      </div>
      <div className="pb-4">
        <Tree
          data={treeData}
          tree={tree}
          renderNode={(payload) => (
            <LayerTreeNode
              {...payload}
              metaMap={metaMap}
              onSelect={onSelectLayer}
            />
          )}
        />
      </div>
    </div>
  );
}
