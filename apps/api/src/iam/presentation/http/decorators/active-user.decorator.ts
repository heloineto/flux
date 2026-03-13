import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import type { Request } from 'express';
import { REQUEST_USER_KEY } from '@/iam/presentation/http/iam.constants';
import {
  ActiveUserSchema,
  type ActiveUserType,
} from '@/iam/domain/active-user';

export const ActiveUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): ActiveUserType => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return ActiveUserSchema.parse(request[REQUEST_USER_KEY]);
  }
);
