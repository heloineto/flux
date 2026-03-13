import type { User } from '@supabase/supabase-js';
import { createAuthContext } from '@/packages/auth';

export const { useAuth, AuthProvider } = createAuthContext<User>();
