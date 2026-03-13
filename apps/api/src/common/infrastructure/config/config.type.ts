import { z } from 'zod';

export const ConfigSchema = z.object({
  PORT: z.coerce.number().default(7100),
  MODE: z.enum(['development', 'test', 'production']),

  POSTGRES_HOST: z.string().min(1),
  POSTGRES_PORT: z.coerce.number(),
  POSTGRES_USER: z.string().min(1),
  POSTGRES_PASSWORD: z.string().min(1),
  POSTGRES_DATABASE: z.string().min(1),

  WEB_URL: z.url(),

  SUPABASE_URL: z.url(),
  SUPABASE_PUBLISHABLE_KEY: z.string().min(1),
});

export type Config = z.infer<typeof ConfigSchema>;
