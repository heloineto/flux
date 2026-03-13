import type {
  ComboboxSelectItem,
  ComboboxSelectMultipleValue,
} from '../components/combobox-select';

export function isOptionChecked({
  item,
  value,
  allowBlank,
}: {
  item: ComboboxSelectItem;
  value: ComboboxSelectMultipleValue;
  allowBlank: boolean;
}) {
  if (item.type === 'select-all') {
    if (!value.selectAll) {
      return { checked: false };
    }

    if (value.selectedIds.length > 0 || (!value.selectBlank && allowBlank)) {
      return { checked: true, indeterminate: true };
    }

    return { checked: true };
  }

  if (item.type === 'blank') return { checked: value.selectBlank };

  const isSelected = value.selectedIds.includes(item.id);

  return { checked: isSelected !== value.selectAll };
}
