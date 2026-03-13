import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ConfigModule } from '@/common/infrastructure/config/config.module';
import { ConfigService } from '@/common/infrastructure/config/config.service';
import { HealthController } from '@/core/presentation/http/health.controller';

@Module({})
export class CoreModule {
  static forRoot(): DynamicModule {
    return {
      module: CoreModule,
      imports: [
        ConfigModule,
        TypeOrmModule.forRootAsync({
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.get('POSTGRES_HOST'),
            port: configService.get('POSTGRES_PORT'),
            username: configService.get('POSTGRES_USER'),
            password: configService.get('POSTGRES_PASSWORD'),
            database: configService.get('POSTGRES_DATABASE'),
            namingStrategy: new SnakeNamingStrategy(),
            autoLoadEntities: true,
          }),
        }),
      ],
      controllers: [HealthController],
    };
  }
}
