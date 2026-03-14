import { Card, Stack, Text } from '@mantine/core';
import { PlusIcon } from '@phosphor-icons/react/dist/ssr';

export function CreateFlowCard() {
  return (
    <Card
      withBorder
      padding="lg"
      style={{
        cursor: 'pointer',
        borderStyle: 'dashed',
      }}
    >
      <Stack
        align="center"
        gap="xs"
        justify="center"
        style={{ height: '100%', minHeight: 80 }}
      >
        <PlusIcon size={24} />
        <Text fw={500} size="sm">
          Create new flow
        </Text>
      </Stack>
    </Card>
  );
}
