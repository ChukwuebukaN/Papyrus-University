import { Room } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class RoomEntity implements Room {
  @ApiProperty()
  id: number;

  @ApiProperty()
  roomName: string;

  @ApiProperty()
  maximumStudents: number;

  @ApiProperty()
  hostelId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
