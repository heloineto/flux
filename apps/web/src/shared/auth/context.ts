'use client';

import { createAuthContext } from '@packages/auth';
import type { User } from '@supabase/supabase-js';

export const { useAuth, AuthProvider } = createAuthContext<User>();
