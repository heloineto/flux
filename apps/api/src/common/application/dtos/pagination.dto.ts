import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const PaginationSchema = z.strictObject({
  skip: z.coerce
    .number()
    .int()
    .min(0)
    .optional()
    .meta({ description: 'Número de itens a serem pulados' }),
  take: z.coerce
    .number()
    .int()
    .min(1)
    .max(1000)
    .default(100)
    .meta({ description: 'Número de itens a serem retornados' }),
});

export type Pagination = z.infer<typeof PaginationSchema>;

export class PaginationDto extends createZodDto(PaginationSchema) {}
