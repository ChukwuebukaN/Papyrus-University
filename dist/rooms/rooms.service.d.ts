import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class RoomsService {
    private prisma;
    constructor(prisma: PrismaService);
    addRoom(id: number, createRoomDto: CreateRoomDto): import(".prisma/client").Prisma.Prisma__RoomClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        roomName: string;
        maximumStudents: number;
        hostelId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    getRooms(): import(".prisma/client").Prisma.PrismaPromise<({
        students: (import("@prisma/client/runtime").GetResult<{
            id: number;
            registrationId: number;
            password: string;
            fullName: string;
            age: number;
            department: string;
            roomId: number;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        roomName: string;
        maximumStudents: number;
        hostelId: number;
    }, unknown> & {})[]>;
    getRoomById(id: number): import(".prisma/client").Prisma.Prisma__RoomClient<{
        students: (import("@prisma/client/runtime").GetResult<{
            id: number;
            registrationId: number;
            password: string;
            fullName: string;
            age: number;
            department: string;
            roomId: number;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        roomName: string;
        maximumStudents: number;
        hostelId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    updateRoomById(id: number, updateRoomDto: UpdateRoomDto): import(".prisma/client").Prisma.Prisma__RoomClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        roomName: string;
        maximumStudents: number;
        hostelId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    deleteRoomById(id: number): import(".prisma/client").Prisma.Prisma__RoomClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        roomName: string;
        maximumStudents: number;
        hostelId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
