import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { IamInfrastructureModule } from '@/iam/infrastructure/iam-infrastructure.module';
import { AuthGuard } from '@/iam/presentation/http/guards/auth.guard';
import { BearerGuard } from '@/iam/presentation/http/guards/bearer.guard';
import { OrganizacaoGuard } from '@/iam/presentation/http/guards/organizacao.guard';

@Module({
  imports: [IamInfrastructureModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AuthGuard,
    BearerGuard,
    OrganizacaoGuard,
  ],
})
export class IamModule {}
