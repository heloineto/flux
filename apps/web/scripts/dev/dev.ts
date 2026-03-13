const port = process.env.PORT || 7000;

export async function dev() {
  const args = process.argv.slice(2);

  const _nextProcess = await Bun.spawn(
    ['next', 'dev', '-p', port.toString(), ...args],
    {
      stdout: 'inherit',
      stderr: 'inherit',
    }
  ).exited;
}
