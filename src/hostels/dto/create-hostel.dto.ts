import { ApiProperty } from '@nestjs/swagger';

export class CreateHostelDto {
  @ApiProperty()
  hostelName: string;

  @ApiProperty()
  maximumRooms: number;

  @ApiProperty({ required: false, default: false })
  available?: boolean = false;
}
