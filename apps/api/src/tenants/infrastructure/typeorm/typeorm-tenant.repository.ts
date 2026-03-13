import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TenantRepository } from '@/tenants/application/ports/tenant.repository.port';
import { TenantEntity } from '@/tenants/domain/tenant.entity';

@Injectable()
export class TypeOrmTenantRepository extends TenantRepository {
  constructor(
    @InjectRepository(TenantEntity)
    private readonly repo: Repository<TenantEntity>,
  ) {
    super();
  }

  findAll(): Promise<TenantEntity[]> {
    return this.repo.find();
  }
}
