import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';
import { config } from '@dotenvx/dotenvx';
import chalk from 'chalk';
import clipboard from 'clipboardy';

config({
  convention: 'nextjs',
  quiet: true,
});

export async function getJwt() {
  const args = process.argv.slice(2);
  const email = z.email().parse(args[0] || process.env.EMAIL);
  const password = z.string().parse(args[1] || process.env.PASSWORD);

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PUBLISHABLE_KEY!
  );

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  const { user, session } = data;

  console.log(chalk.bold.cyan('\nSession\n'));
  console.log(`${chalk.dim('User ID:')}   ${user?.id ?? '—'}`);
  console.log(`${chalk.dim('Email:')}     ${user?.email ?? '—'}`);
  await clipboard.write(session.access_token);
  console.log(chalk.bold.cyan('\nJWT') + chalk.dim(' (copied to clipboard)\n'));
  console.log(session.access_token);
}
