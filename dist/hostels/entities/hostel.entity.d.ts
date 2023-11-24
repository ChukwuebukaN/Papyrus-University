import { Hostel } from '@prisma/client';
export declare class HostelEntity implements Hostel {
    id: number;
    hostelName: string;
    maximumRooms: number;
    available: boolean;
    createdAt: Date;
    updatedAt: Date;
}
