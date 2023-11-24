import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class StudentsService {
    private prisma;
    constructor(prisma: PrismaService);
    addStudent(id: number, createStudentDto: CreateStudentDto): import(".prisma/client").Prisma.Prisma__StudentClient<import("@prisma/client/runtime").GetResult<{
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
    getStudentById(id: number): import(".prisma/client").Prisma.Prisma__StudentClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        registrationId: number;
        password: string;
        fullName: string;
        age: number;
        department: string;
        roomId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    updateStudentById(id: number, updateStudentDto: UpdateStudentDto): import(".prisma/client").Prisma.Prisma__StudentClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        registrationId: number;
        password: string;
        fullName: string;
        age: number;
        department: string;
        roomId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    deleteStudentById(id: number): import(".prisma/client").Prisma.Prisma__StudentClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        registrationId: number;
        password: string;
        fullName: string;
        age: number;
        department: string;
        roomId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
