import { Student } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class StudentEntity implements Student {
  @ApiProperty()
  id: number;

  @ApiProperty()
  registrationId: number;

  @ApiProperty()
  password: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  department: string;

  @ApiProperty()
  roomId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
