import { Controller, Get } from '@nestjs/common';
import { ZodSerializerDto } from 'nestjs-zod';
import { TenantResponseDto } from '@/tenants/application/dtos/tenant-response.dto';
import { TenantRepository } from '@/tenants/application/ports/tenant.repository.port';
import type { TenantEntity } from '@/tenants/domain/tenant.entity';

@Controller('tenants')
export class TenantsController {
  constructor(private readonly tenantRepository: TenantRepository) {}

  @Get()
  @ZodSerializerDto(TenantResponseDto)
  findAll(): Promise<TenantEntity[]> {
    return this.tenantRepository.findAll();
  }
}
