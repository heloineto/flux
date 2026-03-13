import { ComboboxOption, ScrollArea } from '@mantine/core';
import { ComboboxSelectOption } from '../components/combobox-select-option';
import type { ComboboxSelectOptionsRenderProps } from '../components/combobox-select';

export function defaultRenderOptions({
  items,
  isOptionChecked: checkOption,
  search,
  size,
  renderOption,
  withScrollArea = true,
  maxDropdownHeight = 220,
  scrollAreaProps,
}: ComboboxSelectOptionsRenderProps) {
  const RenderOption = renderOption ?? ComboboxSelectOption;
  const content = items.map((item) => (
    <ComboboxOption key={item.id} value={item.id} active>
      <RenderOption
        item={item}
        search={search}
        size={size}
        {...checkOption(item)}
      />
    </ComboboxOption>
  ));

  if (withScrollArea) {
    return (
      <ScrollArea
        viewportProps={{ style: { maxHeight: maxDropdownHeight } }}
        {...scrollAreaProps}
      >
        {content}
      </ScrollArea>
    );
  }

  return (
    <div className="overflow-auto" style={{ maxHeight: maxDropdownHeight }}>
      {content}
    </div>
  );
}
