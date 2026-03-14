import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { cleanupOpenApiDoc } from 'nestjs-zod';
import type { OpenAPIObject } from '@nestjs/swagger';

export class DocsSetup {
  static getDocument(app: INestApplication): OpenAPIObject {
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

    return cleanupOpenApiDoc(SwaggerModule.createDocument(app, config));
  }

  static setup(app: INestApplication) {
    const document = DocsSetup.getDocument(app);
    SwaggerModule.setup('swagger', app, document, {
      swaggerUiEnabled: false,
      jsonDocumentUrl: 'openapi/json',
      yamlDocumentUrl: 'openapi/yaml',
    });
  }
}
