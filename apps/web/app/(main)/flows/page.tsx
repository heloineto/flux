import type { Metadata } from 'next';
import { FlowsPage } from '@/pages/flows';

export const metadata: Metadata = {
  title: 'Flows',
};

export default function Page() {
  return <FlowsPage />;
}
