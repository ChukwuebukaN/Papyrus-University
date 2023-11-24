import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
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
}
