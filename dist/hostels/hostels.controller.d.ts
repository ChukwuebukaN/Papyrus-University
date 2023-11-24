import { HostelsService } from './hostels.service';
import { CreateHostelDto } from './dto/create-hostel.dto';
import { UpdateHostelDto } from './dto/update-hostel.dto';
export declare class HostelsController {
    private readonly hostelsService;
    constructor(hostelsService: HostelsService);
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
    getHostelById(id: string): import(".prisma/client").Prisma.Prisma__HostelClient<{
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
    updateHostelById(id: string, updateHostelDto: UpdateHostelDto): import(".prisma/client").Prisma.Prisma__HostelClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        hostelName: string;
        maximumRooms: number;
        available: boolean;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    deleteHostelById(id: string): import(".prisma/client").Prisma.Prisma__HostelClient<import("@prisma/client/runtime").GetResult<{
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
