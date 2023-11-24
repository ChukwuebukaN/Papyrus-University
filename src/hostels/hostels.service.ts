import { Injectable } from '@nestjs/common';
import { CreateHostelDto } from './dto/create-hostel.dto';
import { UpdateHostelDto } from './dto/update-hostel.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HostelsService {
  constructor(private prisma: PrismaService) {}

  addHostel(createHostelDto: CreateHostelDto) {
    return this.prisma.hostel.create({
      data: createHostelDto,
    });
  }

  getHostels() {
    return this.prisma.hostel.findMany({
      include: {
        rooms: true,
      },
    });
  }

  getHostelById(id: number) {
    return this.prisma.hostel.findUnique({
      where: { id },
      include: {
        rooms: true,
      },
    });
  }

  updateHostelById(id: number, updateHostelDto: UpdateHostelDto) {
    return this.prisma.hostel.update({
      where: { id },
      data: updateHostelDto,
    });
  }

  deleteHostelById(id: number) {
    return this.prisma.hostel.delete({ where: { id } });
  }

  searchHostels(filter: string) {
    if (filter === 'available') {
      return this.prisma.hostel.findMany({ where: { available: true } });
    } else {
      return this.prisma.hostel.findMany({ where: { available: false } });
    }
  }
}
