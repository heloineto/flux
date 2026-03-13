import type { Metadata } from 'next';
import { AgentsPage } from '@/pages/agents';

export const metadata: Metadata = {
  title: 'Agents',
};

export default async function Page() {
  return <AgentsPage />;
}
