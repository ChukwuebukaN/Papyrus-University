import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  addStudent(id: number, createStudentDto: CreateStudentDto) {
    return this.prisma.student.create({
      data: createStudentDto,
    });
  }

  getStudents() {
    return this.prisma.student.findMany();
  }

  getStudentById(id: number) {
    return this.prisma.student.findUnique({ where: { id } });
  }

  updateStudentById(id: number, updateStudentDto: UpdateStudentDto) {
    return this.prisma.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  deleteStudentById(id: number) {
    return this.prisma.student.delete({ where: { id } });
  }
}
