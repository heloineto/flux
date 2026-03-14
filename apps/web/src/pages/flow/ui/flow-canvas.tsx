'use client';

import { useCallback, useRef } from 'react';
import {
  Background,
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from '@xyflow/react';
import type {
  ColorMode,
  Connection,
  Edge,
  FinalConnectionState,
  Node,
} from '@xyflow/react';
import { useMantineColorScheme } from '@mantine/core';

import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '0',
    type: 'input',
    data: { label: 'Node' },
    position: { x: 0, y: 50 },
  },
];

const initialEdges: Edge[] = [];
const nodeOrigin: [number, number] = [0.5, 0];

let nodeId = 1;
function getNextId() {
  return `${nodeId++}`;
}

function toReactFlowColorMode(scheme: string): ColorMode {
  if (scheme === 'auto') return 'system';
  if (scheme === 'dark') return 'dark';
  return 'light';
}

function FlowCanvasInner() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();
  const { colorScheme } = useMantineColorScheme();
  const colorMode = toReactFlowColorMode(colorScheme);

  const onConnect = useCallback(
    (params: Connection) => setEdges((prev) => addEdge(params, prev)),
    [setEdges]
  );

  const onConnectEnd = useCallback(
    (event: MouseEvent | TouchEvent, connectionState: FinalConnectionState) => {
      if (connectionState.isValid) return;

      const id = getNextId();
      const touch = 'changedTouches' in event ? event.changedTouches[0] : event;
      const position = screenToFlowPosition({
        x: touch.clientX,
        y: touch.clientY,
      });

      setNodes((prev) => [
        ...prev,
        {
          id,
          position,
          data: { label: `Node ${id}` },
          origin: [0.5, 0] as [number, number],
        },
      ]);
      setEdges((prev) => [
        ...prev,
        { id, source: connectionState.fromNode!.id, target: id },
      ]);
    },
    [screenToFlowPosition, setNodes, setEdges]
  );

  return (
    <div ref={wrapperRef} className="size-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectEnd={onConnectEnd}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={nodeOrigin}
        colorMode={colorMode}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}

export function FlowCanvas() {
  return (
    <ReactFlowProvider>
      <FlowCanvasInner />
    </ReactFlowProvider>
  );
}
