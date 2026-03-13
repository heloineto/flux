import type { CustomCellRendererProps } from 'ag-grid-react';
import { Badge, useComputedColorScheme } from '@mantine/core';
import type { MantineColor } from '@mantine/core';
import type { ReactNode } from 'react';

function hashCode(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}

const defaultColors: MantineColor[] = [
  'blue',
  'cyan',
  'grape',
  'green',
  'indigo',
  'lime',
  'orange',
  'pink',
  'red',
  'teal',
  'violet',
];

function getColor(name: unknown, colors: MantineColor[] = defaultColors) {
  if (typeof name !== 'string') return 'gray';

  const hash = hashCode(name);
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

export function BadgeCellRenderer({
  value,
  label,
  color,
  leftSection,
}: CustomCellRendererProps & {
  label?: string;
  color?: string;
  leftSection?: ReactNode;
}) {
  const computedColorScheme = useComputedColorScheme();

  return (
    <Badge
      variant={computedColorScheme === 'dark' ? 'light' : 'outline'}
      color={color || getColor(value)}
      leftSection={leftSection}
    >
      {label || value}
    </Badge>
  );
}
