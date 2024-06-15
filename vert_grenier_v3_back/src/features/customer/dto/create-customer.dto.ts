import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty({ description: 'The civilian title of the Customer.' })
  civ: string;

  @ApiProperty({ description: 'The first name of the Customer.' })
  firstName: string;

  @ApiProperty({ description: 'The first name of the Customer.' })
  lastname: string;

  @ApiProperty({ description: 'The email of the Customer.' })
  email: string;

  @ApiProperty({ description: 'The password of the Customer.' })
  password: string;

  @ApiProperty({ description: 'The phone number of the Customer.' })
  phone: string;

  @ApiProperty({ description: 'The address of the Customer.' })
  address: string;

  @ApiProperty({ description: 'The postal code of the Customer.' })
  zipcode: string;

  @ApiProperty({ description: 'The city of the Customer.' })
  city: string;

  @ApiProperty({ description: 'Customer created at' })
  createdAt: Date;

  @ApiProperty({ description: 'Customer updated at' })
  updatedAt: Date;
}
