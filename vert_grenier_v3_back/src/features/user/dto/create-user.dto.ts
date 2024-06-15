import { ApiProperty } from '@nestjs/swagger';
import { Roles } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({ description: 'The email of the user.' })
  email: string;

  @ApiProperty({ description: 'The first name of the user.' })
  firstname: string;

  @ApiProperty({ description: 'The first name of the user.' })
  lastname: string;

  @ApiProperty({ description: 'The password of the user.' })
  password: string;

  @ApiProperty({ description: 'The role of the user.' })
  role: Roles;

  @ApiProperty({ description: 'user created at' })
  createdAt: Date;

  @ApiProperty({ description: 'user updated at' })
  updatedAt: Date;
}
