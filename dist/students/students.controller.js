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
exports.StudentsController = void 0;
const common_1 = require("@nestjs/common");
const students_service_1 = require("./students.service");
const create_student_dto_1 = require("./dto/create-student.dto");
const update_student_dto_1 = require("./dto/update-student.dto");
const swagger_1 = require("@nestjs/swagger");
const student_entity_1 = require("./entities/student.entity");
let StudentsController = class StudentsController {
    constructor(studentsService) {
        this.studentsService = studentsService;
    }
    addStudent(id, createStudentDto) {
        return this.studentsService.addStudent(+id, createStudentDto);
    }
    getStudents() {
        return this.studentsService.getStudents();
    }
    getStudentById(id) {
        return this.studentsService.getStudentById(+id);
    }
    updateStudentById(id, updateStudentDto) {
        return this.studentsService.updateStudentById(+id, updateStudentDto);
    }
    deleteStudentById(id) {
        return this.studentsService.deleteStudentById(+id);
    }
};
exports.StudentsController = StudentsController;
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiCreatedResponse)({ type: student_entity_1.StudentEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "addStudent", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiOkResponse)({ type: student_entity_1.StudentEntity, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "getStudents", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiOkResponse)({ type: student_entity_1.StudentEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "getStudentById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiOkResponse)({ type: student_entity_1.StudentEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "updateStudentById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.Header)('content-type', 'application/json'),
    (0, swagger_1.ApiOkResponse)({ type: student_entity_1.StudentEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "deleteStudentById", null);
exports.StudentsController = StudentsController = __decorate([
    (0, common_1.Controller)('students'),
    (0, swagger_1.ApiTags)('students'),
    __metadata("design:paramtypes", [students_service_1.StudentsService])
], StudentsController);
//# sourceMappingURL=students.controller.js.map