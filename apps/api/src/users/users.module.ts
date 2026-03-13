import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '@/users/application/ports/user.repository.port';
import { UserEntity } from '@/users/domain/user.entity';
import { TypeOrmUserRepository } from '@/users/infrastructure/typeorm/typeorm-user.repository';
import { UsersController } from '@/users/presentation/http/users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [{ provide: UserRepository, useClass: TypeOrmUserRepository }],
  controllers: [UsersController],
})
export class UsersModule {}
