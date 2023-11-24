"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostelsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let HostelsService = class HostelsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    addHostel(createHostelDto) {
        return this.prisma.hostel.create({
            data: createHostelDto,
        });
    }
    getHostels() {
        return this.prisma.hostel.findMany({
            include: {
                rooms: true,
            },
        });
    }
    getHostelById(id) {
        return this.prisma.hostel.findUnique({
            where: { id },
            include: {
                rooms: true,
            },
        });
    }
    updateHostelById(id, updateHostelDto) {
        return this.prisma.hostel.update({
            where: { id },
            data: updateHostelDto,
        });
    }
    deleteHostelById(id) {
        return this.prisma.hostel.delete({ where: { id } });
    }
    searchHostels(filter) {
        if (filter === 'available') {
            return this.prisma.hostel.findMany({ where: { available: true } });
        }
        else {
            return this.prisma.hostel.findMany({ where: { available: false } });
        }
    }
};
exports.HostelsService = HostelsService;
exports.HostelsService = HostelsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HostelsService);
//# sourceMappingURL=hostels.service.js.map