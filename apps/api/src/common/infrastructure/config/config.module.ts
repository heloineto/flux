import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ApplicationConfig } from '@/common/application/ports/application-config.port';
import { ConfigSchema } from '@/common/infrastructure/config/config.type';
import { ConfigService } from '@/common/infrastructure/config/config.service';
import { ApplicationConfigService } from '@/common/infrastructure/config/application-config.service';

function getEnvFilePath(): string[] {
  switch (process.env.NODE_ENV) {
    case 'production':
      return ['.env.production.local', '.env.production', '.env'];
    case 'test':
      return ['.env.test.local', '.env.test', '.env'];
    default:
      return ['.env.development.local', '.env.development', '.env'];
  }
}

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: getEnvFilePath(),
      validate: (env) => ConfigSchema.parse(env),
      isGlobal: true,
    }),
  ],
  providers: [
    ConfigService,
    { provide: ApplicationConfig, useClass: ApplicationConfigService },
  ],
  exports: [ConfigService, ApplicationConfig],
})
export class ConfigModule {}
