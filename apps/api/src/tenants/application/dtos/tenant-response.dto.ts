import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const TenantResponseSchema = z.strictObject({
  id: z.string(),
  name: z.string(),
});

export class TenantResponseDto extends createZodDto(TenantResponseSchema) {}
