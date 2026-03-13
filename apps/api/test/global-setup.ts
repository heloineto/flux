import { execSync } from 'node:child_process';

export function setup() {
  execSync(
    'docker compose --env-file .env.test -f docker-compose.test.yml up -d --wait',
    { stdio: 'inherit' }
  );
}

export function teardown() {
  execSync(
    'docker compose --env-file .env.test -f docker-compose.test.yml down',
    { stdio: 'inherit' }
  );
}
