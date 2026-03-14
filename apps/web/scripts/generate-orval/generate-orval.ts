import type { Options } from 'orval';
import { defineConfig, generate } from 'orval';
import { rm } from 'node:fs/promises';

const config = defineConfig({
  'react-query': {
    input: {
      target: `${process.env.NEXT_PUBLIC_API_URL}/openapi/json`,
    },
    output: {
      prettier: true,
      mode: 'tags-split',
      httpClient: 'axios',
      target: 'lib/orval/clients/react-query',
      schemas: {
        type: 'typescript',
        path: 'lib/orval/models',
      },
      client: 'react-query',
      override: {
        mutator: {
          path: 'lib/api-instance.ts',
          name: 'apiInstance',
        },
        query: {
          useQuery: true,
          useInvalidate: true,
        },
      },
    },
  },
  axios: {
    input: {
      target: `${process.env.NEXT_PUBLIC_API_URL}/openapi/json`,
    },
    output: {
      prettier: true,
      mode: 'tags-split',
      httpClient: 'axios',
      target: 'lib/orval/clients/axios',
      schemas: {
        type: 'typescript',
        path: 'lib/orval/models',
      },
      client: 'axios',
      override: {
        mutator: {
          path: 'lib/api-instance.ts',
          name: 'apiInstance',
        },
      },
    },
  },
});

export async function generateOrval() {
  await rm('lib/orval', { recursive: true, force: true });

  for (const options of Object.values(config) as Options[]) {
    await generate(options);
  }
}
