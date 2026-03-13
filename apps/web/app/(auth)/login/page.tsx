import { LoginPage } from '@/packages/auth';
import { DEFAULT_ROUTE } from '@/lib/constants';

export default function Page() {
  return (
    <LoginPage
      title="Flux - Sign in"
      logo={<div className="text-xl font-semibold">Flux</div>}
      defaultRoute={DEFAULT_ROUTE}
    />
  );
}
