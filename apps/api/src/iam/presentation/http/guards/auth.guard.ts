import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, firstValueFrom } from 'rxjs';
import { AuthType } from '@/iam/domain/auth-type';
import { AUTH_TYPE_KEY } from '@/iam/presentation/http/decorators/auth.decorator';
import { BearerGuard } from '@/iam/presentation/http/guards/bearer.guard';
import { OrganizacaoGuard } from '@/iam/presentation/http/guards/organizacao.guard';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly defaultAuthType = AuthType.Bearer;
  private readonly authTypeGuardMap: Record<
    AuthType,
    CanActivate | CanActivate[]
  >;

  constructor(
    private readonly reflector: Reflector,
    private readonly bearerGuard: BearerGuard,
    private readonly organizacaoGuard: OrganizacaoGuard
  ) {
    this.authTypeGuardMap = {
      [AuthType.Bearer]: [this.bearerGuard, this.organizacaoGuard],
      [AuthType.None]: { canActivate: () => true },
    };
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const authTypes = this.reflector.getAllAndOverride<AuthType[]>(
      AUTH_TYPE_KEY,
      [context.getHandler(), context.getClass()]
    ) ?? [this.defaultAuthType];

    const guards = authTypes.map((type) => this.authTypeGuardMap[type]).flat();

    for (const guard of guards) {
      const canActivateResult = await guard.canActivate(context);
      let canActivate: boolean;

      if (canActivateResult instanceof Observable) {
        canActivate = await firstValueFrom(canActivateResult);
      } else {
        canActivate = canActivateResult;
      }

      if (!canActivate) {
        throw new UnauthorizedException();
      }
    }

    return true;
  }
}
