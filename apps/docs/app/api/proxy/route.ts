import { openapi } from '@/lib/openapi';
import { z } from 'zod';

export const { GET, HEAD, PUT, POST, PATCH, DELETE } = openapi.createProxy({
  allowedOrigins: [z.url().parse(process.env.NEXT_PUBLIC_API_URL)],
});
