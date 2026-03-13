import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantRepository } from '@/tenants/application/ports/tenant.repository.port';
import { TenantEntity } from '@/tenants/domain/tenant.entity';
import { TypeOrmTenantRepository } from '@/tenants/infrastructure/typeorm/typeorm-tenant.repository';
import { TenantsController } from '@/tenants/presentation/http/tenants.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TenantEntity])],
  providers: [{ provide: TenantRepository, useClass: TypeOrmTenantRepository }],
  controllers: [TenantsController],
})
export class TenantsModule {}
