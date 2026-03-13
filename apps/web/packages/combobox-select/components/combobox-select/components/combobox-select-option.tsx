import type { MantineSize } from '@mantine/core';
import { Checkbox, Group, Highlight } from '@mantine/core';
import type { ComboboxSelectItem } from './combobox-select';

export type ComboboxSelectOptionProps = {
  item: ComboboxSelectItem;
  checked: boolean;
  indeterminate?: boolean;
  search?: string;
  size: MantineSize | (string & {});
};

export function ComboboxSelectOption({
  item,
  checked,
  search,
  indeterminate,
  size,
}: ComboboxSelectOptionProps) {
  return (
    <Group h="100%" gap="sm" wrap="nowrap">
      <Checkbox
        className="pointer-events-none"
        checked={checked}
        indeterminate={indeterminate}
        readOnly
        aria-hidden
        tabIndex={-1}
        size={size}
      />
      <Highlight
        className="truncate"
        highlight={search || ''}
        size={size}
        fz="var(--combobox-option-fz)"
        lh="var(--mantine-line-height)"
      >
        {item.label}
      </Highlight>
    </Group>
  );
}
