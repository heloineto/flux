# Contributing to Flux

Thanks for contributing! Please read this guide before opening issues or pull requests.

## Prerequisites

1. Install [Bun](https://bun.sh/docs/installation)
2. Install [Docker](https://docs.docker.com/get-docker/)

## Getting Started

1. Clone the repo and install dependencies: `bun install`
2. Start the development server: `bun run dev`
3. Before committing, run `bun run check` - this runs linters, formatters and tests

## How to Contribute

### Reporting Bugs

- Search existing issues before opening a new one
- Include steps to reproduce, expected behavior, and actual behavior
- Add relevant logs or screenshots if applicable

### Submitting Pull Requests

- Create a feature branch from `main` (`git checkout -b feat/your-feature`)
- Keep PRs focused - one feature or fix per PR
- Run `bun run check` before pushing
- Write a clear PR title and description explaining **what** and **why**

### Commit Messages

Use clear, descriptive commit messages. Prefer the format:

```
type: short description

Optional longer explanation
```

Common types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`

## Code Style

- Keep code clean and readable
- Max 3 levels of nesting - use early returns and extract functions
- Use descriptive variable names (no single-character names)
- Avoid nested ternaries - use if/else or extract to a function

## Port Assignments

| Port Range | Service           |
| ---------- | ----------------- |
| 7000-7099  | Frontend services |
| 7100-7199  | Backend services  |
| 7200-7299  | Databases         |
| 7300-7399  | Testing           |

---

## API

### Project Structure

We follow hexagonal architecture. Read [apps/api/docs/project-structure.md](apps/api/docs/project-structure.md) before contributing.

### Authentication

Run `bun run get-jwt` (or `bun run get-jwt <email> <password>`). The token is copied to your clipboard. Use it as `Authorization: Bearer <token>`.

### Testing

Two test types: **unit** (`bun run test:unit`) and **e2e** (`bun run test:e2e`).

#### Unit Tests

- Files: colocated with source as `*.spec.ts`
- Spin up a NestJS test module with all dependencies mocked via `vitest-mock-extended`
- Use [fishery](https://github.com/thoughtbot/fishery) factories (`src/test/factories/`) + `@faker-js/faker` to generate typed entity instances without hitting a DB
- Test only the service layer in isolation

```ts
// factory
export const apoiadorFactory = Factory.define<ApoiadorEntity>(
  ({ sequence }) => ({
    id: String(sequence),
    nome: faker.person.fullName(),
    // ...
  }),
);

// spec
apoiadorRepository.findOne.mockResolvedValue(apoiadorFactory.build());
const result = await service.findOne(orgId, id);
expect(result).toEqual(/* ... */);
```

#### E2E Tests

- Files: `test/*.e2e-spec.ts`
- `test/global-setup.ts` starts a real PostgreSQL container via `docker-compose.test.yml` (port 4301) and tears it down afterwards
- Each test boots the full `AppModule` and hits HTTP endpoints with `supertest`
- Config lives in `.env.test`

### Deployment

```bash
cd ~/flux-api && \
git fetch && \
git pull && \
sudo docker build -t flux-api . && \
sudo docker rm -f flux-api || true && \
sudo docker run -d --name flux-api --restart unless-stopped -p 3000:3000 -e PORT=3000 --env-file .env.production.local flux-api
```
