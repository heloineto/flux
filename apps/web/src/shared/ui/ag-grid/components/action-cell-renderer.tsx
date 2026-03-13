'use client';

import React from 'react';
import { ActionIcon, Tooltip } from '@mantine/core';
import { PencilSimpleIcon, TrashIcon } from '@phosphor-icons/react/dist/ssr';
import type { CustomCellRendererProps } from 'ag-grid-react';

export function ActionCellRenderer<TData>({
  data,
  onEdit,
  onDelete,
}: CustomCellRendererProps<TData> & {
  onEdit: (data: TData) => void;
  onDelete: (data: TData) => void;
}) {
  if (data === undefined || data === null) return null;

  return (
    <div className="flex h-full items-center justify-end gap-1">
      <Tooltip label="Editar" position="top" withArrow>
        <ActionIcon
          variant="light"
          color="blue"
          onClick={() => onEdit(data)}
          aria-label="Editar"
        >
          <PencilSimpleIcon size={16} weight="regular" />
        </ActionIcon>
      </Tooltip>

      <Tooltip label="Excluir" position="top" withArrow>
        <ActionIcon
          variant="light"
          color="red"
          onClick={() => onDelete(data)}
          aria-label="Excluir"
        >
          <TrashIcon size={16} weight="regular" />
        </ActionIcon>
      </Tooltip>
    </div>
  );
}
