'use client';

import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { DatabaseSelectProps as $DatabaseSelectProps } from '@/packages/database-select';
import { DatabaseSelect as $DatabaseSelect } from '@/packages/database-select';
import type { ServerSideSelectType } from '@/packages/combobox-select';

export type DatabaseSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TType extends ServerSideSelectType = 'multiple',
> = UseControllerProps<TFieldValues> &
  Omit<$DatabaseSelectProps<TType>, 'value' | 'error' | 'onChange'>;

export function DatabaseSelect<
  TFieldValues extends FieldValues = FieldValues,
  TType extends ServerSideSelectType = 'multiple',
>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  disabled,
  ...props
}: DatabaseSelectProps<TFieldValues, TType>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
    fieldState: { error },
  } = useController<TFieldValues>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
    disabled,
  });

  return (
    <$DatabaseSelect<TType>
      value={value}
      onChange={(val) => {
        fieldOnChange(val);
      }}
      error={error?.message}
      disabled={disabled}
      {...field}
      {...props}
    />
  );
}
