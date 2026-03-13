import type { UserEntity } from '@/users/domain/user.entity';

export abstract class UserRepository {
  abstract findAll(): Promise<UserEntity[]>;
}
