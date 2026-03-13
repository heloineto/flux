import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const FlowResponseSchema = z.strictObject({
  id: z.string(),
  name: z.string(),
  authorId: z.string(),
  tenantId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export class FlowResponseDto extends createZodDto(FlowResponseSchema) {}
