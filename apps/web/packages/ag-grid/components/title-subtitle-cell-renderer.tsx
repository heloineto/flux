import type { CustomCellRendererProps } from 'ag-grid-react';

export function TitleSubtitleCellRenderer({
  title,
  subtitle,
}: CustomCellRendererProps & {
  title?: string | null;
  subtitle?: string | null;
}) {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="truncate leading-none font-medium">{title}</div>
      <div className="text-dimmed truncate text-sm leading-none">
        {subtitle}
      </div>
    </div>
  );
}
