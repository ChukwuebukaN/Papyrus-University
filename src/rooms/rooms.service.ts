import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomsService {
  constructor(private prisma: PrismaService) {}

  addRoom(id: number, createRoomDto: CreateRoomDto) {
    return this.prisma.room.create({
      data: createRoomDto,
    });
  }

  getRooms() {
    return this.prisma.room.findMany({
      include: {
        students: true,
      },
    });
  }

  getRoomById(id: number) {
    return this.prisma.room.findUnique({
      where: { id },
      include: {
        students: true,
      },
    });
  }

  updateRoomById(id: number, updateRoomDto: UpdateRoomDto) {
    return this.prisma.room.update({
      where: { id },
      data: updateRoomDto,
    });
  }

  deleteRoomById(id: number) {
    return this.prisma.room.delete({ where: { id } });
  }
}
