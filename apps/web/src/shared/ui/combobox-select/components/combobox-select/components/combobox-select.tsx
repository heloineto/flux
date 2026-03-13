'use client';

import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import {
  Combobox,
  InputBase,
  factory,
  useCombobox,
  useProps,
  useResolvedStylesApi,
} from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import type { ComboboxSelectOptionProps } from './combobox-select-option';
import {
  comboboxSelectMultipleInitialValue,
  defaultRenderOptions,
  getDisplayText,
  onOptionSubmit as handleOptionSubmit,
  isOptionChecked,
} from '../utils';
import type {
  BoxProps,
  ComboboxLikeProps,
  ElementProps,
  Factory,
  InputClearButtonProps,
  InputVariant,
  MantineColor,
  MantineSize,
  StylesApiProps,
  __BaseInputProps,
  __InputStylesNames,
} from '@mantine/core';
import type { ScrollAreaProps } from '@mantine/core';

export type ComboboxSelectItemType = 'select-all' | 'blank' | 'data';

export type ComboboxSelectItem = {
  id: string;
  label: string;
  type: ComboboxSelectItemType;
  data?: unknown;
};

export type ComboboxSelectType = 'multiple' | 'single';

export type ComboboxSelectMultipleValue = {
  selectAll: boolean;
  selectBlank: boolean;
  selectedIds: string[];
};

export type ComboboxSelectValue<Type extends ComboboxSelectType = 'multiple'> =
  Type extends 'single' ? string | null : ComboboxSelectMultipleValue;

export type ComboboxSelectStylesNames =
  | __InputStylesNames
  | 'dropdown'
  | 'option'
  | 'empty'
  | 'searchInput';

export interface ComboboxSelectOptionsRenderProps {
  items: ComboboxSelectItem[];
  isOptionChecked: (item: ComboboxSelectItem) => {
    checked: boolean;
    indeterminate?: boolean;
  };
  search: string;
  size: MantineSize | (string & {});
  renderOption?: (props: ComboboxSelectOptionProps) => ReactNode;
  optionHeight?: number;
  withScrollArea?: boolean;
  maxDropdownHeight?: React.CSSProperties['maxHeight'];
  scrollAreaProps?: ScrollAreaProps;
}

export interface ComboboxSelectProps<
  Type extends ComboboxSelectType = 'multiple',
>
  extends
    BoxProps,
    __BaseInputProps,
    ComboboxLikeProps,
    StylesApiProps<ComboboxSelectFactory>,
    ElementProps<'input', 'onChange' | 'size' | 'value' | 'defaultValue'> {
  /** Determines whether blank selection is allowed */
  allowBlank?: boolean;

  /** Selection type - multiple allows multiple selections, single allows only one */
  type?: Type;

  /** Controlled component value */
  value: ComboboxSelectValue<Type>;

  /** Called when value changes */
  onChange: (value: ComboboxSelectValue<Type>) => void;

  /** Called when the clear button is clicked */
  onClear?: () => void;

  /** If set, it becomes possible to deselect value by clicking on the selected option */
  allowDeselect?: boolean;

  /** If set, the clear button is displayed in the right section when the component has value */
  clearable?: boolean;

  /** Props passed down to the clear button */
  clearButtonProps?: InputClearButtonProps;

  /** A function to render content of the option, replaces the default content of the option */
  renderOption?: (props: ComboboxSelectOptionProps) => ReactNode;

  /** Height of each option in the dropdown */
  optionHeight?: number;

  /** Props passed down to the underlying `ScrollArea` component in the dropdown */
  scrollAreaProps?: ScrollAreaProps;

  /** Controls color of the default chevron, by default depends on the color scheme */
  chevronColor?: MantineColor;

  /** If set, the highlighted option is selected when the input loses focus @default `false` */
  autoSelectOnBlur?: boolean;

  /** If set, the dropdown opens when the input receives focus @default `false` */
  openOnFocus?: boolean;

  /** Controlled search value */
  search?: string;

  /** Default search value */
  defaultSearch?: string;

  /** Called when search changes */
  onSearchChange?: (search: string) => void;

  /** Data items to display in the dropdown (select-all and blank items are added automatically) */
  items: ComboboxSelectItem[];

  /** Custom options renderer; defaults to a simple non-virtualized list */
  renderOptions?: (props: ComboboxSelectOptionsRenderProps) => ReactNode;

  /** Message displayed when no options are found */
  nothingFoundMessage?: React.ReactNode;

  /** Controls maximum height of the dropdown */
  maxDropdownHeight?: React.CSSProperties['maxHeight'];

  /** Determines whether the dropdown should have a scroll area */
  withScrollArea?: boolean;

  /** Props passed down to the hidden input */
  hiddenInputProps?: Omit<React.ComponentPropsWithoutRef<'input'>, 'value'>;
}

export type ComboboxSelectFactory = Factory<{
  props: ComboboxSelectProps;
  ref: HTMLInputElement;
  stylesNames: ComboboxSelectStylesNames;
  variant: InputVariant;
}>;

const defaultProps = {
  allowBlank: false,
  type: 'multiple' as const,
  size: 'sm' as const,
  clearable: false,
  allowDeselect: true,
  placeholder: 'Selecione uma opção',
  nothingFoundMessage: 'Nenhuma opção encontrada',
  withScrollArea: true,
  maxDropdownHeight: 220,
  autoSelectOnBlur: false,
  openOnFocus: false,
} satisfies Partial<ComboboxSelectProps>;

const ComboboxSelectComponent = factory<ComboboxSelectFactory>(
  (_props, ref) => {
    const props = useProps('ComboboxSelect', defaultProps, _props);
    const {
      classNames,
      styles,
      unstyled,
      vars,
      dropdownOpened,
      defaultDropdownOpened,
      onDropdownClose,
      onDropdownOpen,
      onFocus,
      onBlur,
      onClick,
      onChange,
      onOptionSubmit,
      items,
      renderOptions,
      allowBlank,
      type,
      size,
      comboboxProps,
      renderOption,
      disabled,
      optionHeight,
      clearable,
      onClear,
      allowDeselect,
      value,
      error,
      variant,
      placeholder,
      search: searchProp,
      onSearchChange,
      defaultSearch,
      nothingFoundMessage,
      maxDropdownHeight,
      withScrollArea,
      scrollAreaProps,
      chevronColor,
      autoSelectOnBlur,
      openOnFocus,
      clearButtonProps,
      hiddenInputProps,
      name,
      form,
      readOnly,
      rightSection,
      rightSectionPointerEvents,
      id,
      autoComplete,
      attributes,
      ...others
    } = props;

    const [search, setSearch] = useUncontrolled({
      value: searchProp,
      defaultValue: defaultSearch ?? '',
      onChange: onSearchChange,
    });

    const [selectedItemCache, setSelectedItemCache] =
      useState<ComboboxSelectItem | null>(null);
    const _id = useId(id);

    let internalValue: ComboboxSelectMultipleValue;

    if (type === 'multiple') {
      internalValue = value as ComboboxSelectMultipleValue;
    } else {
      const singleValue = value as unknown as string | null;

      internalValue = {
        selectAll: false,
        selectBlank: singleValue === 'blank',
        selectedIds:
          singleValue && singleValue !== 'blank' ? [singleValue] : [],
      };
    }

    const { resolvedClassNames, resolvedStyles } =
      useResolvedStylesApi<ComboboxSelectFactory>({
        props,
        styles,
        classNames,
      });

    const combobox = useCombobox({
      opened: dropdownOpened,
      defaultOpened: defaultDropdownOpened,
      onDropdownOpen: () => {
        onDropdownOpen?.();
        combobox.focusSearchInput();
        combobox.updateSelectedOptionIndex('active', { scrollIntoView: true });
      },
      onDropdownClose: () => {
        onDropdownClose?.();
        setTimeout(combobox.resetSelectedOption, 0);
        setSearch('');
      },
    });

    const handleSearchChange = (value: string) => {
      setSearch(value);
      combobox.resetSelectedOption();
    };

    const allItems = useMemo(() => {
      const result: ComboboxSelectItem[] = [];

      if (type === 'multiple' && search === '') {
        result.push({
          id: 'all',
          label: '(Selecionar tudo)',
          type: 'select-all',
        });
      }

      if (allowBlank && search === '') {
        result.push({ id: 'blank', label: '(Em branco)', type: 'blank' });
      }

      result.push(...items);
      return result;
    }, [type, search, allowBlank, items]);

    const clearButton = (
      <Combobox.ClearButton
        {...clearButtonProps}
        onClear={() => {
          let newValue: ComboboxSelectMultipleValue;

          if (type === 'multiple') {
            newValue = comboboxSelectMultipleInitialValue;
          } else {
            newValue = null as unknown as ComboboxSelectMultipleValue;
          }

          onChange(newValue);
          setSelectedItemCache(null);
          handleSearchChange('');
          onClear?.();
        }}
      />
    );

    const _clearable =
      clearable &&
      !disabled &&
      !readOnly &&
      (internalValue.selectedIds.length > 0 || internalValue.selectAll);

    const _renderOptions = renderOptions ?? defaultRenderOptions;

    return (
      <>
        <Combobox
          store={combobox}
          __staticSelector="ComboboxSelect"
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
          readOnly={readOnly}
          size={size}
          attributes={attributes}
          keepMounted={autoSelectOnBlur}
          onOptionSubmit={(itemId) => {
            onOptionSubmit?.(itemId);
            handleOptionSubmit({
              items: allItems,
              itemId,
              value: internalValue,
              onChange: (newInternalValue) => {
                let newValue: ComboboxSelectMultipleValue;

                if (type === 'multiple') {
                  newValue = newInternalValue;
                } else {
                  newValue = (newInternalValue.selectedIds[0] ||
                    (newInternalValue.selectBlank
                      ? 'blank'
                      : null)) as unknown as ComboboxSelectMultipleValue;
                }

                onChange(newValue);
              },
              allowBlank,
              type,
              setSelectedItemCache,
              allowDeselect,
            });
          }}
          {...comboboxProps}
        >
          <Combobox.Target targetType="button" autoComplete={autoComplete}>
            <InputBase
              ref={ref}
              id={_id}
              __defaultRightSection={
                <Combobox.Chevron
                  size={size}
                  error={error}
                  unstyled={unstyled}
                  color={chevronColor}
                />
              }
              __clearSection={clearButton}
              __clearable={_clearable}
              rightSection={rightSection}
              rightSectionPointerEvents={
                rightSectionPointerEvents || (_clearable ? 'all' : 'none')
              }
              {...others}
              size={size}
              __staticSelector="ComboboxSelect"
              disabled={disabled}
              readOnly
              pointer
              value={getDisplayText({
                type,
                value: internalValue,
                allowBlank,
                selectedItemCache,
                items: allItems,
              })}
              onClick={(event) => {
                combobox.toggleDropdown();
                onClick?.(event);
              }}
              onFocus={(event) => {
                if (openOnFocus) combobox.openDropdown();
                onFocus?.(event);
              }}
              onBlur={(event) => {
                if (autoSelectOnBlur) {
                  combobox.clickSelectedOption();
                }
                onBlur?.(event);
              }}
              classNames={resolvedClassNames}
              styles={resolvedStyles}
              unstyled={unstyled}
              error={error}
              placeholder={placeholder}
              variant={variant}
              attributes={attributes}
            />
          </Combobox.Target>

          <Combobox.Dropdown hidden={readOnly || disabled}>
            <Combobox.Search
              value={search}
              onChange={(event) =>
                handleSearchChange(event.currentTarget.value)
              }
              placeholder="Pesquisar"
              leftSection={<MagnifyingGlassIcon size="1rem" weight="bold" />}
            />
            <Combobox.Options
              labelledBy={
                others.label !== null && others.label !== undefined
                  ? `${_id}-label`
                  : undefined
              }
              aria-label={
                others.label !== null && others.label !== undefined
                  ? undefined
                  : others['aria-label']
              }
            >
              {allItems.length > 0 ? (
                _renderOptions({
                  items: allItems,
                  isOptionChecked: (item) =>
                    isOptionChecked({ item, value: internalValue, allowBlank }),
                  search,
                  size,
                  renderOption,
                  optionHeight,
                  withScrollArea,
                  maxDropdownHeight,
                  scrollAreaProps,
                })
              ) : (
                <Combobox.Empty>{nothingFoundMessage}</Combobox.Empty>
              )}
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
        <Combobox.HiddenInput
          value={JSON.stringify(internalValue)}
          name={name}
          form={form}
          disabled={disabled}
          {...hiddenInputProps}
        />
      </>
    );
  }
);

type ComboboxSelectComponent = <Type extends ComboboxSelectType = 'multiple'>(
  props: ComboboxSelectProps<Type> & {
    ref?: React.ForwardedRef<HTMLInputElement>;
  }
) => React.JSX.Element;

export const ComboboxSelect =
  ComboboxSelectComponent as ComboboxSelectComponent;
