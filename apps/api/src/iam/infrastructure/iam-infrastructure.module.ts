import { Module } from '@nestjs/common';
import { SupabaseModule } from '@/iam/infrastructure/supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  exports: [SupabaseModule],
})
export class IamInfrastructureModule {}
