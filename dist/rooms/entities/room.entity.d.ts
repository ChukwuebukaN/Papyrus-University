import { Room } from '@prisma/client';
export declare class RoomEntity implements Room {
    id: number;
    roomName: string;
    maximumStudents: number;
    hostelId: number;
    createdAt: Date;
    updatedAt: Date;
}
