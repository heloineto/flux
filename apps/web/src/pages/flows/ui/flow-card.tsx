import { Box, Card, Flex, Text, ThemeIcon } from '@mantine/core';
import { ShareNetworkIcon } from '@phosphor-icons/react/dist/ssr';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

type FlowCardProps = {
  id: string;
  name: string;
  updatedAt: string;
};

function formatRelativeTime(dateStr: string): string {
  return `Updated ${dayjs(dateStr).fromNow(true)} ago`;
}

export function FlowCard({ id, name, updatedAt }: FlowCardProps) {
  return (
    <Card
      component="a"
      href={`/flows/${id}`}
      padding="xs"
      radius="lg"
      style={{ cursor: 'pointer', textDecoration: 'none' }}
    >
      <div className="dark:bg-dark-300 aspect-16/10 rounded-lg bg-gray-100" />

      <Flex align="center" gap="sm" px="xs" pb="xs">
        <ThemeIcon radius="xl" size="lg" color="blue" flex="0 0 auto">
          <ShareNetworkIcon size={16} />
        </ThemeIcon>

        <Box style={{ minWidth: 0 }}>
          <Text fw={500} size="sm" truncate>
            {name}
          </Text>
          <Text c="dimmed" size="xs">
            {formatRelativeTime(updatedAt)}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
