import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import type { Request } from 'express';
import { REQUEST_ORGANIZACAO_ID_KEY } from '@/iam/presentation/http/iam.constants';
import { z } from 'zod';

export const ActiveOrganizacaoId = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return z.string().parse(request[REQUEST_ORGANIZACAO_ID_KEY]);
  }
);
