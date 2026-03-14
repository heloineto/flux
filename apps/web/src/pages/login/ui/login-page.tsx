import { LoginPage as SharedLoginPage } from '@packages/auth';
import { DEFAULT_ROUTE } from '@/shared/config/constants';

export function LoginPage() {
  return (
    <SharedLoginPage
      title="Flux - Sign in"
      logo={<div className="text-xl font-semibold">Flux</div>}
      defaultRoute={DEFAULT_ROUTE}
    />
  );
}
