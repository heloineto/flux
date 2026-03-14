import { TextInput } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr';

type FlowsSearchProps = {
  onSearch: (query: string) => void;
};

export function FlowsSearch({ onSearch }: FlowsSearchProps) {
  return (
    <TextInput
      leftSection={<MagnifyingGlassIcon size={16} />}
      onChange={(event) => onSearch(event.currentTarget.value)}
      placeholder="Search flows..."
    />
  );
}
