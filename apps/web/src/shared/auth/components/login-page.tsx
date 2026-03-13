'use client';

import { createClient } from '@/shared/api/supabase/client';
import { useRouter } from 'next/navigation';
import type { ComponentProps, FormEvent, ReactNode } from 'react';
import { useState } from 'react';
import { Button, PasswordInput, TextInput, Title } from '@mantine/core';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';

export function LoginPage({
  className,
  whatsAppUrl,
  title,
  backgroundImage,
  logo,
  defaultRoute,
  ...props
}: ComponentProps<'div'> & {
  whatsAppUrl?: string;
  title: string;
  backgroundImage?: string;
  defaultRoute: string;
  logo: ReactNode;
}) {
  const [email, setEmail] = useState(() => {
    return process.env.NEXT_PUBLIC_EMAIL ?? '';
  });
  const [password, setPassword] = useState(() => {
    return process.env.NEXT_PUBLIC_PASSWORD ?? '';
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      router.push(defaultRoute);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn('flex min-h-dvh flex-1', className)} {...props}>
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-96 lg:w-96">
          <div>
            {logo}

            <Title
              order={2}
              mt="lg"
              className="text-2xl/9 font-bold tracking-tight"
            >
              {title}
            </Title>
          </div>

          <div className="mt-10 mb-8">
            <form onSubmit={handleLogin}>
              <TextInput
                label="Email"
                withAsterisk={false}
                placeholder="email@example.com"
                size="md"
                radius="md"
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <PasswordInput
                label="Password"
                withAsterisk={false}
                placeholder="Your password"
                mt="md"
                size="md"
                radius="md"
                id="password"
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button
                type="submit"
                fullWidth
                mt="xl"
                size="md"
                radius="md"
                loading={isLoading}
              >
                Sign in
              </Button>
            </form>
          </div>
        </div>
      </div>
      {backgroundImage && (
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            alt=""
            src={backgroundImage}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 0vw, 50vw"
            priority
          />
        </div>
      )}
    </div>
  );
}
