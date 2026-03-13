import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import {
  HEADER_ORGANIZACAO_ID_KEY,
  REQUEST_ORGANIZACAO_ID_KEY,
  REQUEST_USER_KEY,
} from '@/iam/presentation/http/iam.constants';
import type { ActiveUserType } from '@/iam/domain/active-user';
import { z } from 'zod';

@Injectable()
export class OrganizacaoGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const user = request[REQUEST_USER_KEY] as ActiveUserType | undefined;

    if (user === undefined) {
      throw new UnauthorizedException('User not found');
    }

    if (user.organizacaoIds.length === 0) {
      throw new ForbiddenException('User has no organizations');
    }

    let organizacaoId: string;

    if (user.organizacaoIds.length === 1) {
      organizacaoId = user.organizacaoIds[0];
    } else {
      organizacaoId = this.getOrganizacaoFromHeader(request, user);
    }

    request[REQUEST_ORGANIZACAO_ID_KEY] = organizacaoId;

    return true;
  }

  private getOrganizacaoFromHeader(
    request: Request,
    user: ActiveUserType
  ): string {
    const parseResult = z
      .string()
      .safeParse(request.headers[HEADER_ORGANIZACAO_ID_KEY]);

    if (!parseResult.success) {
      throw new BadRequestException('Could not get organization from header');
    }

    const organizacaoId = parseResult.data;
    const isMember = this.getIsOrganizacaoMember(user, organizacaoId);

    if (!isMember) {
      throw new ForbiddenException('User is not a member of the organization');
    }

    return organizacaoId;
  }

  private getIsOrganizacaoMember(
    user: ActiveUserType,
    organizacaoId: string
  ): boolean {
    return user.organizacaoIds.includes(organizacaoId);
  }
}
