import type { ActiveUserType } from '@/iam/domain/active-user';

export abstract class TokenValidator {
  abstract validate(token: string): Promise<ActiveUserType>;
}
