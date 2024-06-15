import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { Roles, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.role = Roles.USER;
    createUserDto.createdAt = new Date();
    createUserDto.updatedAt = new Date();
    try {
      const user = await this.prisma.user.create({
        data: createUserDto,
      });
      if (!user) return { statusCode: 500, error: 'User not created' };
      return {
        statusCode: 201,
        message: 'User created successfully',
        data: user,
      };
    } catch (error) {
      if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
        return {
          statusCode: 403,
          error: 'Email already exists',
        };
      }
    }
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  findOne(email: string): Promise<User | null> {
    if (!email) return Promise.reject('No email provided');
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  findOneById(id: string): Promise<User | null> {
    if (!id) return Promise.reject('No id provided');
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    if (!id) return 'No id provided';
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  delete(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
