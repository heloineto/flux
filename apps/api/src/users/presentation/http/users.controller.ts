import { Controller, Get } from '@nestjs/common';
import { ZodSerializerDto } from 'nestjs-zod';
import { UserResponseDto } from '@/users/application/dtos/user-response.dto';
import { UserRepository } from '@/users/application/ports/user.repository.port';
import type { UserEntity } from '@/users/domain/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userRepository: UserRepository) {}

  @Get()
  @ZodSerializerDto(UserResponseDto)
  findAll(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }
}
