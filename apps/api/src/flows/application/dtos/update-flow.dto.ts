import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const UpdateFlowSchema = z.strictObject({
  name: z.string().min(1).optional(),
});

export class UpdateFlowDto extends createZodDto(UpdateFlowSchema) {}
