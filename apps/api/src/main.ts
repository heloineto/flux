import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { ConfigService } from '@/common/infrastructure/config/config.service';
import { DocsSetup } from '@/core/presentation/http/docs.setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  DocsSetup.setup(app);

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const webUrl = configService.get('WEB_URL');
  const docsUrl = configService.get('DOCS_URL');

  app.enableCors({
    origin: [webUrl, docsUrl],
    credentials: true,
  });

  await app.listen(port);
}

void bootstrap();
