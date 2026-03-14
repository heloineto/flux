import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthType } from '@/iam/domain/auth-type';
import { Auth } from '@/iam/presentation/http/decorators/auth.decorator';

@ApiTags('Health')
@Auth(AuthType.None)
@Controller('health')
export class HealthController {
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Check API health' })
  @ApiOkResponse({ schema: { example: { status: 'ok' } } })
  check() {
    return { status: 'ok' };
  }
}
