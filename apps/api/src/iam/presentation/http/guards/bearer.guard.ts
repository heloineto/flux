import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import { TokenValidator } from '@/iam/application/ports/token-validator.port';
import { REQUEST_USER_KEY } from '@/iam/presentation/http/iam.constants';

@Injectable()
export class BearerGuard implements CanActivate {
  constructor(private readonly tokenValidator: TokenValidator) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    request[REQUEST_USER_KEY] = await this.tokenValidator.validate(token);

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
