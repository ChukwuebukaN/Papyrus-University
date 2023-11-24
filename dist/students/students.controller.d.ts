import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    addStudent(id: string, createStudentDto: CreateStudentDto): import(".prisma/client").Prisma.Prisma__StudentClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        registrationId: number;
        password: string;
        fullName: string;
        age: number;
        department: string;
        roomId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    getStudents(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        registrationId: number;
        password: string;
        fullName: string;
        age: number;
        department: string;
        roomId: number;
    }, unknown> & {})[]>;
    getStudentById(id: string): import(".prisma/client").Prisma.Prisma__StudentClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        registrationId: number;
        password: string;
        fullName: string;
        age: number;
        department: string;
        roomId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    updateStudentById(id: string, updateStudentDto: UpdateStudentDto): import(".prisma/client").Prisma.Prisma__StudentClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        registrationId: number;
        password: string;
        fullName: string;
        age: number;
        department: string;
        roomId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    deleteStudentById(id: string): import(".prisma/client").Prisma.Prisma__StudentClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        registrationId: number;
        password: string;
        fullName: string;
        age: number;
        department: string;
        roomId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
