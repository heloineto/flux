import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { cleanupOpenApiDoc } from 'nestjs-zod';
import { apiReference } from '@scalar/nestjs-api-reference';

export class DocsSetup {
  static setup(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Flux API')
      .setDescription('API para dados eleitorais e estatísticas de candidatos')
      .setVersion('1.0')
      .addBearerAuth()
      .addTag(
        'Filtros e ordenação',
        [
          '### Ordenação',
          'Use o parâmetro `order`. Ele utiliza uma lista de colunas e direções separadas por vírgulas.',
          '```bash',
          '/people?order=age # ascending por padrão',
          '/people?order=age.desc,height.asc',
          '```',
          '### Filtros',
          'Filtre adicionando condições às colunas. Por exemplo:',
          '```bash',
          '/people?age=25 # Pessoas com 25 anos de idade',
          '/people?age=25,26 # Pessoas com 25 ou 26 anos de idade',
          '/people?age=gte.18&student=is.true # Pessoas com mais de 18 anos e são estudantes',
          '```',
        ].join('\n')
      )
      .build();

    const document = cleanupOpenApiDoc(
      SwaggerModule.createDocument(app, config)
    );

    SwaggerModule.setup('swagger', app, document, {
      swaggerUiEnabled: false,
      jsonDocumentUrl: 'openapi/json',
      yamlDocumentUrl: 'openapi/yaml',
    });

    app.use(
      '/docs',
      apiReference({
        content: document,
        title: 'Flux - Documentação da API',
        hideClientButton: true,
        hiddenClients: true,
        customCss: 'a[href="https://www.scalar.com"] { opacity: 0; }',
        authentication: {
          preferredSecurityScheme: 'bearer',
        },
      })
    );
  }
}
