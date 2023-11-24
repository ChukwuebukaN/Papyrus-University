import { Hostel } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class HostelEntity implements Hostel {
  @ApiProperty()
  id: number;

  @ApiProperty()
  hostelName: string;

  @ApiProperty()
  maximumRooms: number;

  @ApiProperty()
  available: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
