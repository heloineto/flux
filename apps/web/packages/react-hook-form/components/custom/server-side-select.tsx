'use client';

import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';
import type {
  ServerSideSelectProps as $ServerSideSelectProps,
  ServerSideSelectType,
} from '@packages/combobox-select';
import { ServerSideSelect as $ServerSideSelect } from '@packages/combobox-select';

export type ServerSideSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TType extends ServerSideSelectType = 'multiple',
> = UseControllerProps<TFieldValues> &
  Omit<$ServerSideSelectProps<TType>, 'value' | 'error' | 'onChange'>;

export function ServerSideSelect<
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
}: ServerSideSelectProps<TFieldValues, TType>) {
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
    <$ServerSideSelect<TType>
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
