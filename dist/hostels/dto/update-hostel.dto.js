"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHostelDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_hostel_dto_1 = require("./create-hostel.dto");
class UpdateHostelDto extends (0, swagger_1.PartialType)(create_hostel_dto_1.CreateHostelDto) {
}
exports.UpdateHostelDto = UpdateHostelDto;
//# sourceMappingURL=update-hostel.dto.js.map