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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsController = void 0;
const common_1 = require("@nestjs/common");
const rooms_service_1 = require("./rooms.service");
const create_room_dto_1 = require("./dto/create-room.dto");
const update_room_dto_1 = require("./dto/update-room.dto");
const swagger_1 = require("@nestjs/swagger");
const room_entity_1 = require("./entities/room.entity");
let RoomsController = class RoomsController {
    constructor(roomsService) {
        this.roomsService = roomsService;
    }
    addRoom(id, createRoomDto) {
        return this.roomsService.addRoom(+id, createRoomDto);
    }
    getRooms() {
        return this.roomsService.getRooms();
    }
    getRoomById(id) {
        return this.roomsService.getRoomById(+id);
    }
    updateRoomById(id, updateRoomDto) {
        return this.roomsService.updateRoomById(+id, updateRoomDto);
    }
    deleteRoomById(id) {
        return this.roomsService.deleteRoomById(+id);
    }
};
exports.RoomsController = RoomsController;
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiCreatedResponse)({ type: room_entity_1.RoomEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_room_dto_1.CreateRoomDto]),
    __metadata("design:returntype", void 0)
], RoomsController.prototype, "addRoom", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiOkResponse)({ type: room_entity_1.RoomEntity, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoomsController.prototype, "getRooms", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiOkResponse)({ type: room_entity_1.RoomEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomsController.prototype, "getRoomById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiOkResponse)({ type: room_entity_1.RoomEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_room_dto_1.UpdateRoomDto]),
    __metadata("design:returntype", void 0)
], RoomsController.prototype, "updateRoomById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiOkResponse)({ type: room_entity_1.RoomEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomsController.prototype, "deleteRoomById", null);
exports.RoomsController = RoomsController = __decorate([
    (0, common_1.Controller)('rooms'),
    (0, swagger_1.ApiTags)('rooms'),
    __metadata("design:paramtypes", [rooms_service_1.RoomsService])
], RoomsController);
//# sourceMappingURL=rooms.controller.js.map