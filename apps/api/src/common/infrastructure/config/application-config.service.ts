import { Injectable } from '@nestjs/common';
import {
  type AppMode,
  ApplicationConfig,
} from '@/common/application/ports/application-config.port';
import { ConfigService } from '@/common/infrastructure/config/config.service';

@Injectable()
export class ApplicationConfigService implements ApplicationConfig {
  constructor(private readonly configService: ConfigService) {}

  getMode(): AppMode {
    return this.configService.get('MODE');
  }

  getWebUrl(): string {
    return this.configService.get('WEB_URL');
  }
}
