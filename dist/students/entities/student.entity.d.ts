import { Student } from '@prisma/client';
export declare class StudentEntity implements Student {
    id: number;
    registrationId: number;
    password: string;
    fullName: string;
    age: number;
    department: string;
    roomId: number;
    createdAt: Date;
    updatedAt: Date;
}
