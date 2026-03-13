import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const UserResponseSchema = z.strictObject({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});

export class UserResponseDto extends createZodDto(UserResponseSchema) {}
