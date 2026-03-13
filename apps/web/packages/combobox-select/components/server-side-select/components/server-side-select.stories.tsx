import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { ServerSideSelectQuery } from './server-side-select';
import { ServerSideSelect } from './server-side-select';
import type {
  ComboboxSelectItem,
  ComboboxSelectMultipleValue,
} from '../../combobox-select';

const meta = {
  title: 'ServerSideSelect',
  component: ServerSideSelect,
  args: {
    query: {
      data: { pages: [{ data: [] }] },
      hasNextPage: false,
      isFetchingNextPage: false,
      fetchNextPage: () => {},
    },
    value: { selectAll: false, selectBlank: false, selectedIds: [] },
    onChange: () => {},
  },
} satisfies Meta<typeof ServerSideSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const allItems: ComboboxSelectItem[] = [
  { id: '1', label: 'React', type: 'data' },
  { id: '2', label: 'Angular', type: 'data' },
  { id: '3', label: 'Svelte', type: 'data' },
  { id: '4', label: 'Vue', type: 'data' },
  { id: '5', label: 'Ember', type: 'data' },
  { id: '6', label: 'Backbone', type: 'data' },
  { id: '7', label: 'Preact', type: 'data' },
  { id: '8', label: 'Inferno', type: 'data' },
  { id: '9', label: 'Aurelia', type: 'data' },
  { id: '10', label: 'Meteor', type: 'data' },
];

const initialValue: ComboboxSelectMultipleValue = {
  selectAll: false,
  selectBlank: false,
  selectedIds: [],
};

function makeStaticQuery(items: ComboboxSelectItem[]): ServerSideSelectQuery {
  return {
    data: { pages: [{ data: items }] },
    hasNextPage: false,
    isFetchingNextPage: false,
    fetchNextPage: () => {},
  };
}

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    return (
      <ServerSideSelect
        query={makeStaticQuery(allItems)}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Usage: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    return (
      <div style={{ padding: 40 }}>
        <ServerSideSelect
          query={makeStaticQuery(allItems)}
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
        <ServerSideSelect
          type="single"
          query={makeStaticQuery(allItems)}
          value={value}
          onChange={setValue}
          placeholder="Select a framework"
        />
      </div>
    );
  },
};

export const InfiniteScroll: Story = {
  render: () => {
    const pageSize = 4;
    const [value, setValue] = useState(initialValue);
    const [loadedPages, setLoadedPages] = useState(1);
    const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);

    const totalPages = Math.ceil(allItems.length / pageSize);
    const pages = Array.from({ length: loadedPages }, (_, pageIndex) => ({
      data: allItems.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize),
    }));

    const query: ServerSideSelectQuery = {
      data: { pages },
      hasNextPage: loadedPages < totalPages,
      isFetchingNextPage,
      fetchNextPage: () => {
        if (isFetchingNextPage || loadedPages >= totalPages) return;
        setIsFetchingNextPage(true);
        setTimeout(() => {
          setLoadedPages((prev) => prev + 1);
          setIsFetchingNextPage(false);
        }, 800);
      },
    };

    return (
      <div style={{ padding: 40 }}>
        <ServerSideSelect
          query={query}
          value={value}
          onChange={setValue}
          placeholder="Scroll to load more"
        />
      </div>
    );
  },
};

export const FetchingNextPage: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    const query: ServerSideSelectQuery = {
      data: { pages: [{ data: allItems.slice(0, 4) }] },
      hasNextPage: true,
      isFetchingNextPage: true,
      fetchNextPage: () => {},
    };
    return (
      <div style={{ padding: 40 }}>
        <ServerSideSelect
          query={query}
          value={value}
          onChange={setValue}
          placeholder="Loading more..."
        />
      </div>
    );
  },
};

export const NothingFound: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    return (
      <div style={{ padding: 40 }}>
        <ServerSideSelect
          query={makeStaticQuery([])}
          value={value}
          onChange={setValue}
          nothingFoundMessage="Nenhuma opção encontrada"
          placeholder="No items available"
        />
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
        <ServerSideSelect
          query={makeStaticQuery(allItems)}
          value={value}
          onChange={setValue}
          clearable
          placeholder="Clearable default"
        />
        <ServerSideSelect
          query={makeStaticQuery(allItems)}
          value={{ selectAll: false, selectBlank: false, selectedIds: ['1'] }}
          onChange={() => {}}
          clearable
          disabled
          placeholder="Clearable disabled"
          mt="md"
        />
        <ServerSideSelect
          query={makeStaticQuery(allItems)}
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

export const AllowBlank: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    return (
      <div style={{ padding: 40 }}>
        <ServerSideSelect
          query={makeStaticQuery(allItems)}
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
        <ServerSideSelect
          type="single"
          query={makeStaticQuery(allItems)}
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
      <ServerSideSelect
        query={makeStaticQuery(allItems)}
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
      <ServerSideSelect
        query={makeStaticQuery(allItems)}
        value={{ selectAll: false, selectBlank: false, selectedIds: ['1'] }}
        onChange={() => {}}
        disabled
        placeholder="Disabled"
      />
    </div>
  ),
};

export const ControlledSearch: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    const [search, setSearch] = useState('Re');
    return (
      <div style={{ padding: 40 }}>
        <ServerSideSelect
          query={makeStaticQuery(allItems)}
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

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<ComboboxSelectMultipleValue>({
      selectAll: false,
      selectBlank: false,
      selectedIds: ['1'],
    });
    return (
      <div style={{ padding: 40 }}>
        <ServerSideSelect
          query={makeStaticQuery(allItems)}
          value={value}
          onChange={setValue}
        />
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
        <ServerSideSelect
          type="single"
          query={makeStaticQuery(allItems)}
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

export const MultiplePages: Story = {
  render: () => {
    const [value, setValue] = useState(initialValue);
    const query: ServerSideSelectQuery = {
      data: {
        pages: [
          { data: allItems.slice(0, 4) },
          { data: allItems.slice(4, 8) },
          { data: allItems.slice(8) },
        ],
      },
      hasNextPage: false,
      isFetchingNextPage: false,
      fetchNextPage: () => {},
    };
    return (
      <div style={{ padding: 40 }}>
        <ServerSideSelect
          query={query}
          value={value}
          onChange={setValue}
          placeholder="Multiple pages loaded"
        />
      </div>
    );
  },
};
