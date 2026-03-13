import type {
  ComboboxSelectItem,
  ComboboxSelectMultipleValue,
  ComboboxSelectType,
} from '../components/combobox-select';

export function getDisplayText({
  type,
  value,
  allowBlank,
  selectedItemCache,
  items,
}: {
  type: ComboboxSelectType;
  value: ComboboxSelectMultipleValue;
  allowBlank: boolean;
  selectedItemCache: ComboboxSelectItem | null;
  items: ComboboxSelectItem[];
}) {
  if (type === 'single') {
    if (value.selectBlank) {
      return '(Em branco)';
    }

    if (value.selectedIds.length === 1) {
      const selectedId = value.selectedIds[0];
      const selectedItem =
        items.find((item) => item.id === selectedId) ?? selectedItemCache;

      if (!selectedItem) {
        return `Item desconhecido (${selectedId})`;
      }

      return selectedItem.label;
    }

    return '';
  }

  let totalSelected = value.selectedIds.length;

  if (value.selectAll) {
    if (!value.selectBlank && allowBlank) {
      totalSelected += 1;
    }

    if (totalSelected === 0) return 'Todos';
    if (totalSelected === 1) return 'Todos, exceto 1 item';
    return `Todos, exceto ${totalSelected} itens`;
  }

  if (value.selectBlank) {
    totalSelected += 1;
  }

  if (totalSelected === 0) return 'Todos';
  if (totalSelected === 1) return '1 item selecionado';
  return `${totalSelected} itens selecionados`;
}
