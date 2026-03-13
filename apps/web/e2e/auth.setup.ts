import { test as setup } from '@playwright/test';
import path from 'node:path';
import { z } from 'zod';

const authFile = path.join(__dirname, '..', 'playwright', '.auth', 'user.json');

setup('authenticate', async ({ page }) => {
  await page.goto('/login');

  const email = z
    .email({ message: 'E2E_TEST_EMAIL is required' })
    .parse(process.env.E2E_TEST_EMAIL);
  const password = z
    .string()
    .min(1, { message: 'E2E_TEST_PASSWORD is required' })
    .parse(process.env.E2E_TEST_PASSWORD);

  await page.getByRole('textbox', { name: 'E-mail' }).fill(email);
  await page.getByRole('textbox', { name: 'Senha' }).fill(password);
  await page.getByRole('button', { name: 'Entrar' }).click();

  await page.waitForURL('**/login');

  await page.context().storageState({ path: authFile });
});
