import { Module } from '@nestjs/common';
import { TokenValidator } from '@/iam/application/ports/token-validator.port';
import { SupabaseTokenValidator } from '@/iam/infrastructure/supabase/supabase-token-validator';

@Module({
  providers: [
    {
      provide: TokenValidator,
      useClass: SupabaseTokenValidator,
    },
  ],
  exports: [TokenValidator],
})
export class SupabaseModule {}
