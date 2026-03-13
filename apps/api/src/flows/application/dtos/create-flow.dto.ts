import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateFlowSchema = z.strictObject({
  name: z.string().min(1),
  authorId: z.uuid(),
  tenantId: z.uuid(),
});

export class CreateFlowDto extends createZodDto(CreateFlowSchema) {}
