import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Header,
} from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RoomEntity } from './entities/room.entity';

@Controller('rooms')
@ApiTags('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post('/add')
  @Header('content-type', 'application/json')
  @ApiCreatedResponse({ type: RoomEntity })
  addRoom(@Param('id') id: string, @Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.addRoom(+id, createRoomDto);
  }

  @Get()
  @Header('content-type', 'application/json')
  @ApiOkResponse({ type: RoomEntity, isArray: true })
  public getRooms() {
    return this.roomsService.getRooms();
  }

  @Get(':id')
  @Header('content-type', 'application/json')
  @ApiOkResponse({ type: RoomEntity })
  getRoomById(@Param('id') id: string) {
    return this.roomsService.getRoomById(+id);
  }

  @Patch(':id')
  @Header('content-type', 'application/json')
  @ApiOkResponse({ type: RoomEntity })
  updateRoomById(
    @Param('id') id: string,
    @Body() updateRoomDto: UpdateRoomDto,
  ) {
    return this.roomsService.updateRoomById(+id, updateRoomDto);
  }

  @Delete(':id')
  @Header('content-type', 'application/json')
  @ApiOkResponse({ type: RoomEntity })
  deleteRoomById(@Param('id') id: string) {
    return this.roomsService.deleteRoomById(+id);
  }
}
