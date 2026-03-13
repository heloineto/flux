import type { TenantEntity } from '@/tenants/domain/tenant.entity';

export abstract class TenantRepository {
  abstract findAll(): Promise<TenantEntity[]>;
}
