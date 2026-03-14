import { loader, multiple } from 'fumadocs-core/source';
import { openapiPlugin, openapiSource } from 'fumadocs-openapi/server';
import { docs } from '@/.source/server';
import { openapi } from './openapi';

export const source = loader(
  multiple({
    docs: docs.toFumadocsSource(),
    openapi: await openapiSource(openapi, { baseDir: 'openapi' }),
  }),
  {
    baseUrl: '/docs',
    plugins: [openapiPlugin()],
  }
);
