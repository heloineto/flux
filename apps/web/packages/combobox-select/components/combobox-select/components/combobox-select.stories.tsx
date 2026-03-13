import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { ComboboxSelectMultipleValue } from './combobox-select';
import { ComboboxSelect } from './combobox-select';

const meta = {
  title: 'ComboboxSelect',
  component: ComboboxSelect,
  args: {
    items: [],
    value: { selectAll: false, selectBlank: false, selectedIds: [] },
    onChange: () => {},
  },
} satisfies Meta<typeof ComboboxSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { id: '1', label: 'React', type: 'data' as const },
  { id: '2', label: 'Angular', type: 'data' as const },
  { id: '3', label: 'Svelte', type: 'data' as const },
  { id: '4', label: 'Vue', type: 'data' as const },
  { id: '5', label: 'Ember', type: 'data' as const },
  { id: '6', label: 'Backbone', type: 'data' as const },
  { id: '7', label: 'Preact', type: 'data' as const },
  { id: '8', label: 'Inferno', type: 'data' as const },
  { id: '9', label: 'Aurelia', type: 'data' as const },
  { id: '10', label: 'Meteor', type: 'data' as const },
];

const initialValue: ComboboxSelectMultipleValue = {
  selectAll: false,
  selectBlank: false,
  selectedIds: [],
};

export const Default: Story = {
  args: {
    items,
    value: initialValue,
    onChange: () => {},
  },
  render: () => {
    const [value, setValue] = useState(initialValue);
    return <ComboboxSelect items={items} value={value} onChange={setValue} />;
  },
};

export const Usage: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    return (
      <div style={{ padding: 40 }}>
        <ComboboxSelect
          items={items}
          value={value}
          onChange={setValue}
          placeholder="Select frameworks"
        />
      </div>
    );
  },
};

export const SingleType: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <div style={{ padding: 40 }}>
        <ComboboxSelect
          type="single"
          items={items}
          value={value}
          onChange={setValue}
          placeholder="Select a framework"
        />
      </div>
    );
  },
};

export const BottomOfPage: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    return (
      <div style={{ padding: 40 }}>
        <div style={{ height: 1200 }} />
        <ComboboxSelect
          items={items}
          value={value}
          onChange={setValue}
          placeholder="Select frameworks"
        />
        <div style={{ height: 1200 }} />
      </div>
    );
  },
};

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState<ComboboxSelectMultipleValue>({
      selectAll: false,
      selectBlank: false,
      selectedIds: ['1', '2'],
    });
    return (
      <div style={{ padding: 40, maxWidth: 400 }}>
        <ComboboxSelect
          items={items}
          value={value}
          onChange={setValue}
          clearable
          placeholder="Clearable default"
        />
        <ComboboxSelect
          items={items}
          value={{ selectAll: false, selectBlank: false, selectedIds: ['1'] }}
          onChange={() => {}}
          clearable
          disabled
          placeholder="Clearable disabled"
          mt="md"
        />
        <ComboboxSelect
          items={items}
          value={{ selectAll: false, selectBlank: false, selectedIds: ['1'] }}
          onChange={() => {}}
          clearable
          readOnly
          placeholder="Clearable read only"
          mt="md"
        />
      </div>
    );
  },
};

export const ClearButtonSizes: Story = {
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
    return (
      <div style={{ padding: 40, maxWidth: 300 }}>
        {sizes.map((size) => (
          <ComboboxSelect
            key={size}
            items={items}
            value={{
              selectAll: false,
              selectBlank: false,
              selectedIds: ['1', '2'],
            }}
            onChange={() => {}}
            clearable
            placeholder="Select frameworks"
            size={size}
            mt={size !== 'xs' ? 'md' : undefined}
          />
        ))}
      </div>
    );
  },
};

export const AllowBlank: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    return (
      <div style={{ padding: 40 }}>
        <ComboboxSelect
          items={items}
          value={value}
          onChange={setValue}
          allowBlank
          placeholder="Select with blank option"
        />
      </div>
    );
  },
};

export const AllowDeselectFalse: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>('1');
    return (
      <div style={{ padding: 40 }}>
        <ComboboxSelect
          type="single"
          items={items}
          value={value}
          onChange={setValue}
          allowDeselect={false}
          placeholder="Cannot deselect"
        />
      </div>
    );
  },
};

export const ReadOnly: Story = {
  render: () => (
    <div style={{ padding: 40 }}>
      <ComboboxSelect
        items={items}
        value={{
          selectAll: false,
          selectBlank: false,
          selectedIds: ['1', '3'],
        }}
        onChange={() => {}}
        readOnly
        placeholder="Read only"
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ padding: 40 }}>
      <ComboboxSelect
        items={items}
        value={{ selectAll: false, selectBlank: false, selectedIds: ['1'] }}
        onChange={() => {}}
        disabled
        placeholder="Disabled"
      />
    </div>
  ),
};

export const NothingFound: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    return (
      <div style={{ padding: 40 }}>
        <ComboboxSelect
          items={[]}
          value={value}
          onChange={setValue}
          nothingFoundMessage="Nenhuma opção encontrada"
          placeholder="No items available"
        />
      </div>
    );
  },
};

export const LongOptions: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    const longItems = [
      {
        id: '1',
        label: 'Option that is so long that it collapses to the next line',
        type: 'data' as const,
      },
      { id: '2', label: 'React', type: 'data' as const },
    ];
    return (
      <div style={{ padding: 40, maxWidth: 300 }}>
        <ComboboxSelect
          items={longItems}
          value={value}
          onChange={setValue}
          placeholder="Select option"
        />
      </div>
    );
  },
};

export const WithinForm: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.warn('Form submitted');
        }}
        style={{ padding: 40 }}
      >
        <ComboboxSelect
          items={items}
          value={value}
          onChange={setValue}
          name="frameworks"
          placeholder="Select frameworks"
        />
        <button type="submit" style={{ marginTop: 8 }}>
          Submit
        </button>
      </form>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<ComboboxSelectMultipleValue>({
      selectAll: false,
      selectBlank: false,
      selectedIds: ['1'],
    });
    return (
      <div style={{ padding: 40 }}>
        <ComboboxSelect items={items} value={value} onChange={setValue} />
        <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
          <button
            onClick={() =>
              setValue({ selectAll: true, selectBlank: false, selectedIds: [] })
            }
          >
            Select All
          </button>
          <button onClick={() => setValue(initialValue)}>Clear</button>
        </div>
      </div>
    );
  },
};

export const ControlledSingle: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>('1');
    return (
      <div style={{ padding: 40 }}>
        <ComboboxSelect
          type="single"
          items={items}
          value={value}
          onChange={setValue}
        />
        <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
          <button onClick={() => setValue('2')}>Angular</button>
          <button onClick={() => setValue(null)}>Null</button>
        </div>
      </div>
    );
  },
};

export const ControlledSearch: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    const [search, setSearch] = useState('Re');
    return (
      <div style={{ padding: 40 }}>
        <ComboboxSelect
          items={items}
          value={value}
          onChange={setValue}
          search={search}
          onSearchChange={setSearch}
          placeholder="Controlled search"
        />
      </div>
    );
  },
};

export const Unstyled: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    return (
      <div style={{ padding: 40 }}>
        <ComboboxSelect
          items={items}
          value={value}
          onChange={setValue}
          unstyled
          placeholder="Unstyled"
        />
      </div>
    );
  },
};

export const ItemsChangingOverTime: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    const [currentItems, setCurrentItems] = useState(items.slice(0, 3));
    return (
      <div style={{ padding: 40 }}>
        <ComboboxSelect
          items={currentItems}
          value={value}
          onChange={setValue}
          placeholder="Select frameworks"
        />
        <button
          style={{ marginTop: 8 }}
          onClick={() => setCurrentItems(items.slice(3, 6))}
        >
          Update items
        </button>
      </div>
    );
  },
};
