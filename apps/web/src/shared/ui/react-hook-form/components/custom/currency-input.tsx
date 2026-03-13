import {
  type FieldValues,
  type UseControllerProps,
  useController,
} from 'react-hook-form';
import type { CurrencyInputProps as $CurrencyInputProps } from '@/shared/lib/mantine';
import { CurrencyInput as $CurrencyInput } from '@/shared/lib/mantine';

export type CurrencyInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$CurrencyInputProps, 'value' | 'onChange'> & {
    onChange?: (value: number) => void;
  };

export function CurrencyInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: CurrencyInputProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$CurrencyInput
      value={value}
      onChange={(output) => {
        fieldOnChange(output);
        onChange?.(output);
      }}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  );
}
