import { CreateHostelDto } from './dto/create-hostel.dto';
import { UpdateHostelDto } from './dto/update-hostel.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class HostelsService {
    private prisma;
    constructor(prisma: PrismaService);
    addHostel(createHostelDto: CreateHostelDto): import(".prisma/client").Prisma.Prisma__HostelClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        hostelName: string;
        maximumRooms: number;
        available: boolean;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    getHostels(): import(".prisma/client").Prisma.PrismaPromise<({
        rooms: (import("@prisma/client/runtime").GetResult<{
            id: number;
            roomName: string;
            maximumStudents: number;
            hostelId: number;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        hostelName: string;
        maximumRooms: number;
        available: boolean;
    }, unknown> & {})[]>;
    getHostelById(id: number): import(".prisma/client").Prisma.Prisma__HostelClient<{
        rooms: (import("@prisma/client/runtime").GetResult<{
            id: number;
            roomName: string;
            maximumStudents: number;
            hostelId: number;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        hostelName: string;
        maximumRooms: number;
        available: boolean;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    updateHostelById(id: number, updateHostelDto: UpdateHostelDto): import(".prisma/client").Prisma.Prisma__HostelClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        hostelName: string;
        maximumRooms: number;
        available: boolean;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    deleteHostelById(id: number): import(".prisma/client").Prisma.Prisma__HostelClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        hostelName: string;
        maximumRooms: number;
        available: boolean;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    searchHostels(filter: string): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        hostelName: string;
        maximumRooms: number;
        available: boolean;
    }, unknown> & {})[]>;
}
