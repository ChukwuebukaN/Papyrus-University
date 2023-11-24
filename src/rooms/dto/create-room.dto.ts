import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomDto {
  @ApiProperty()
  roomName: string;

  @ApiProperty()
  maximumStudents: number;

  @ApiProperty()
  hostelId: number;
}
