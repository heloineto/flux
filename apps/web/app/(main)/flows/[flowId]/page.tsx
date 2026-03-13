import type { Metadata } from 'next';
import { FlowPage } from '@/pages/flow';

export const metadata: Metadata = {
  title: 'Flow',
};

interface Props {
  params: Promise<{ flowId: string }>;
}

export default async function Page({ params }: Props) {
  const { flowId } = await params;

  return <FlowPage flowId={flowId} />;
}
