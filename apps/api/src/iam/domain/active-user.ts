import { z } from 'zod';

export const ActiveUserSchema = z.object({
  id: z.string(),
  email: z.string(),
  organizacaoIds: z.array(z.string()),
});

export type ActiveUserType = z.infer<typeof ActiveUserSchema>;
