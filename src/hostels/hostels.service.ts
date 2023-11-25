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
    } else if (filter === 'taken') {
      return this.prisma.hostel.findMany({ where: { available: false } });
    }
  }

  getStudentsInHostelById(id: number) {
    return this.prisma.hostel.findUnique({
      where: { id },
      include: {
        students: true,
      },
    });
  }

  async updateStudentsInHostelById(
    id: number,
    studentId: number,
    // newHostelId: number,
    // updateHostelDto: UpdateHostelDto,
  ) {
    const hostel = await this.getStudentsInHostelById(id);
    const students = hostel.students;
    const finalStudents = students.filter(
      (filteredStudent) => filteredStudent.id !== studentId,
    );
    return console.log(finalStudents);

    // Before Updating the students in a hostel, we also need get the newRoomId and newHostelId
    // that we want to reassign the student to.

    // now how do we add this student to a new room in the new Hostel
    // Then filter out the student from the old hostel array then update the hostel/room

    return this.prisma.hostel.update({
      where: { id },
      data: finalStudents,
    });
  }
}
