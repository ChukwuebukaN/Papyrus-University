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
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { StudentEntity } from './entities/student.entity';

@Controller('students')
@ApiTags('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('/add')
  @Header('content-type', 'application/json')
  @ApiCreatedResponse({ type: StudentEntity })
  addStudent(
    @Param('id') id: string,
    @Body() createStudentDto: CreateStudentDto,
  ) {
    return this.studentsService.addStudent(+id, createStudentDto);
  }

  @Get()
  @Header('content-type', 'application/json')
  @ApiOkResponse({ type: StudentEntity, isArray: true })
  public getStudents() {
    return this.studentsService.getStudents();
  }

  @Get(':id')
  @Header('content-type', 'application/json')
  @ApiOkResponse({ type: StudentEntity })
  getStudentById(@Param('id') id: string) {
    return this.studentsService.getStudentById(+id);
  }

  @Patch(':id')
  @Header('content-type', 'application/json')
  @ApiOkResponse({ type: StudentEntity })
  updateStudentById(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentsService.updateStudentById(+id, updateStudentDto);
  }

  @Delete(':id')
  @Header('content-type', 'application/json')
  @ApiOkResponse({ type: StudentEntity })
  deleteStudentById(@Param('id') id: string) {
    return this.studentsService.deleteStudentById(+id);
  }
}
