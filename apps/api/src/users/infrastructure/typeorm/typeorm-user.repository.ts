import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from '@/users/application/ports/user.repository.port';
import { UserEntity } from '@/users/domain/user.entity';

@Injectable()
export class TypeOrmUserRepository extends UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repo: Repository<UserEntity>,
  ) {
    super();
  }

  findAll(): Promise<UserEntity[]> {
    return this.repo.find();
  }
}
