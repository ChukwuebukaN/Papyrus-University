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
exports.HostelsController = void 0;
const common_1 = require("@nestjs/common");
const hostels_service_1 = require("./hostels.service");
const create_hostel_dto_1 = require("./dto/create-hostel.dto");
const update_hostel_dto_1 = require("./dto/update-hostel.dto");
const swagger_1 = require("@nestjs/swagger");
const hostel_entity_1 = require("./entities/hostel.entity");
let HostelsController = class HostelsController {
    constructor(hostelsService) {
        this.hostelsService = hostelsService;
    }
    addHostel(createHostelDto) {
        return this.hostelsService.addHostel(createHostelDto);
    }
    getHostels() {
        return this.hostelsService.getHostels();
    }
    getHostelById(id) {
        return this.hostelsService.getHostelById(+id);
    }
    updateHostelById(id, updateHostelDto) {
        return this.hostelsService.updateHostelById(+id, updateHostelDto);
    }
    deleteHostelById(id) {
        return this.hostelsService.deleteHostelById(+id);
    }
    searchHostels(filter) {
        return this.hostelsService.searchHostels(filter);
    }
};
exports.HostelsController = HostelsController;
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiCreatedResponse)({ type: hostel_entity_1.HostelEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hostel_dto_1.CreateHostelDto]),
    __metadata("design:returntype", void 0)
], HostelsController.prototype, "addHostel", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiOkResponse)({ type: hostel_entity_1.HostelEntity, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HostelsController.prototype, "getHostels", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiOkResponse)({ type: hostel_entity_1.HostelEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HostelsController.prototype, "getHostelById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiOkResponse)({ type: hostel_entity_1.HostelEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_hostel_dto_1.UpdateHostelDto]),
    __metadata("design:returntype", void 0)
], HostelsController.prototype, "updateHostelById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiOkResponse)({ type: hostel_entity_1.HostelEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HostelsController.prototype, "deleteHostelById", null);
__decorate([
    (0, common_1.Get)('search/:filter'),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiOkResponse)({ type: hostel_entity_1.HostelEntity, isArray: true }),
    __param(0, (0, common_1.Param)('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HostelsController.prototype, "searchHostels", null);
exports.HostelsController = HostelsController = __decorate([
    (0, common_1.Controller)('hostels'),
    (0, swagger_1.ApiTags)('hostels'),
    __metadata("design:paramtypes", [hostels_service_1.HostelsService])
], HostelsController);
//# sourceMappingURL=hostels.controller.js.map