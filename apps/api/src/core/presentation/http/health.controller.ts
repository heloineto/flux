import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthType } from '@/iam/domain/auth-type';
import { Auth } from '@/iam/presentation/http/decorators/auth.decorator';

@Auth(AuthType.None)
@Controller('health')
export class HealthController {
  @Get()
  @HttpCode(HttpStatus.OK)
  check() {
    return { status: 'ok' };
  }
}
