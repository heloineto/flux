import { createOpenAPI } from 'fumadocs-openapi/server';

const apiUrl = process.env.API_URL ?? 'http://localhost:7100';

export const openapi = createOpenAPI({
  input: [`${apiUrl}/openapi/json`],
  proxyUrl: '/api/proxy',
});
