import type {
  ComboboxSelectItem,
  ComboboxSelectMultipleValue,
  ComboboxSelectType,
} from '../components/combobox-select';

export function onOptionSubmit({
  itemId,
  items,
  value,
  onChange,
  allowBlank,
  type,
  setSelectedItemCache,
  allowDeselect = true,
}: {
  itemId: string;
  items: ComboboxSelectItem[];
  value: ComboboxSelectMultipleValue;
  onChange: (value: ComboboxSelectMultipleValue) => void;
  allowBlank: boolean;
  type: ComboboxSelectType;
  setSelectedItemCache: (item: ComboboxSelectItem | null) => void;
  allowDeselect?: boolean;
}) {
  const item = items.find((i) => i.id === itemId);

  if (!item) {
    throw new Error(`Item with id ${itemId} not found`);
  }

  if (item.type === 'select-all') {
    if (type === 'single') {
      throw new Error('Select all is not supported in single type');
    }

    const newSelectAll = !value.selectAll;
    onChange({
      selectAll: newSelectAll,
      selectBlank: newSelectAll && allowBlank,
      selectedIds: [],
    });
    return;
  }

  if (item.type === 'blank') {
    if (type === 'single') {
      onChange({
        selectAll: false,
        selectBlank: true,
        selectedIds: [],
      });
      setSelectedItemCache(item);
      return;
    }

    onChange({
      ...value,
      selectBlank: !value.selectBlank,
    });
    return;
  }

  if (type === 'single') {
    const isSelected = value.selectedIds.includes(item.id);
    const shouldDeselect = allowDeselect && isSelected;
    onChange({
      selectAll: false,
      selectBlank: false,
      selectedIds: shouldDeselect ? [] : [item.id],
    });
    setSelectedItemCache(shouldDeselect ? null : item);
    return;
  }

  const isSelected = value.selectedIds.includes(item.id);

  let newSelectedIds: string[];

  if (isSelected && allowDeselect) {
    newSelectedIds = value.selectedIds.filter((id: string) => id !== item.id);
  } else if (isSelected && !allowDeselect) {
    newSelectedIds = value.selectedIds;
  } else {
    newSelectedIds = [...value.selectedIds, item.id];
  }

  onChange({
    ...value,
    selectedIds: newSelectedIds,
  });
}
