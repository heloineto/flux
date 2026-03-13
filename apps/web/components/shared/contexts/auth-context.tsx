import type { User } from '@supabase/supabase-js';
import { createAuthContext } from '@/shared/auth';

export const { useAuth, AuthProvider } = createAuthContext<User>();
