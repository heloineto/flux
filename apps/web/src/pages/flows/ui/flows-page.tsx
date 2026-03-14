import { FlowsGrid } from './flows-grid';

type Flow = {
  id: string;
  name: string;
  authorId: string;
  tenantId: string;
  createdAt: string;
  updatedAt: string;
};

const MOCK_FLOWS: Flow[] = [
  {
    id: '1',
    name: 'Customer Onboarding',
    authorId: 'u1',
    tenantId: 't1',
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-03-10T14:30:00Z',
  },
  {
    id: '2',
    name: 'Lead Qualification',
    authorId: 'u1',
    tenantId: 't1',
    createdAt: '2025-02-01T09:00:00Z',
    updatedAt: '2025-03-08T11:00:00Z',
  },
  {
    id: '3',
    name: 'Support Ticket Triage',
    authorId: 'u2',
    tenantId: 't1',
    createdAt: '2025-02-10T08:30:00Z',
    updatedAt: '2025-03-05T16:45:00Z',
  },
  {
    id: '4',
    name: 'Invoice Processing',
    authorId: 'u1',
    tenantId: 't1',
    createdAt: '2025-02-20T12:00:00Z',
    updatedAt: '2025-03-01T09:15:00Z',
  },
  {
    id: '5',
    name: 'Employee Offboarding',
    authorId: 'u3',
    tenantId: 't1',
    createdAt: '2025-03-01T10:00:00Z',
    updatedAt: '2025-03-12T13:00:00Z',
  },
];

export function FlowsPage() {
  return (
    <div className="flex flex-col gap-8 p-5">
      <h2 className="text-2xl font-bold">Flows</h2>
      <FlowsGrid flows={MOCK_FLOWS} />
    </div>
  );
}
