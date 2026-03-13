import { ConfigService } from '@/common/infrastructure/config/config.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';
import type { ActiveUserType } from '@/iam/domain/active-user';
import { TokenValidator } from '@/iam/application/ports/token-validator.port';

const supabaseClaimsSchema = z.object({
  sub: z.string(),
  email: z.string(),
  role: z.string(),
  app_metadata: z.object({
    // TODO: Change to ONLY string in the future
    organizacao_ids: z.array(z.union([z.number(), z.string()])),
  }),
});

@Injectable()
export class SupabaseTokenValidator implements TokenValidator {
  constructor(private readonly configService: ConfigService) {}

  async validate(token: string): Promise<ActiveUserType> {
    const supabase = createClient(
      this.configService.get('SUPABASE_URL'),
      this.configService.get('SUPABASE_PUBLISHABLE_KEY')
    );

    const { data, error } = await supabase.auth.getClaims(token);

    if (error !== null) {
      throw new UnauthorizedException('Error getting claims from Supabase');
    }

    if (data === null) {
      throw new UnauthorizedException('No data returned from Supabase');
    }

    const parseResult = supabaseClaimsSchema.safeParse(data.claims);

    if (!parseResult.success) {
      throw new UnauthorizedException(z.prettifyError(parseResult.error));
    }

    return {
      id: parseResult.data.sub,
      email: parseResult.data.email,
      // TODO: Change to ONLY string in the future
      organizacaoIds: parseResult.data.app_metadata.organizacao_ids.map(String),
    };
  }
}
