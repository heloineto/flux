import { z } from 'zod';
import type { ComboboxSelectValue } from '../components/combobox-select';

export const comboboxSelectMultipleSchema = z.object({
  selectAll: z.boolean(),
  selectBlank: z.boolean(),
  selectedIds: z.array(z.string()),
});

export const comboboxSelectSingleSchema = z.union([
  z.string(),
  z.literal('blank'),
  z.null(),
]);

export const comboboxSelectMultipleInitialValue: ComboboxSelectValue<'multiple'> =
  {
    selectAll: false,
    selectBlank: false,
    selectedIds: [],
  };

export const comboboxSelectSingleInitialValue: ComboboxSelectValue<'single'> =
  null;
