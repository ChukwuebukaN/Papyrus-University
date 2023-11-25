import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Header,
} from '@nestjs/common';
import { HostelsService } from './hostels.service';
import { CreateHostelDto } from './dto/create-hostel.dto';
import { UpdateHostelDto } from './dto/update-hostel.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { HostelEntity } from './entities/hostel.entity';

@Controller('hostels')
@ApiTags('hostels')
export class HostelsController {
  constructor(private readonly hostelsService: HostelsService) {}

  @Post('/add')
  @Header('content-type', 'application/json')
  @ApiCreatedResponse({ type: HostelEntity })
  addHostel(@Body() createHostelDto: CreateHostelDto) {
    return this.hostelsService.addHostel(createHostelDto);
  }

  @Get()
  @Header('content-type', 'application/json')
  @ApiOkResponse({ type: HostelEntity, isArray: true })
  public getHostels() {
    return this.hostelsService.getHostels();
  }

  @Get(':id')
  @Header('content-type', 'application/json')
  @ApiOkResponse({ type: HostelEntity })
  getHostelById(@Param('id') id: string) {
    return this.hostelsService.getHostelById(+id);
  }

  @Patch(':id')
  @Header('content-type', 'application/json')
  @ApiOkResponse({ type: HostelEntity })
  updateHostelById(
    @Param('id') id: string,
    @Body() updateHostelDto: UpdateHostelDto,
  ) {
    return this.hostelsService.updateHostelById(+id, updateHostelDto);
  }

  @Delete(':id')
  @Header('content-type', 'application/json')
  @ApiOkResponse({ type: HostelEntity })
  deleteHostelById(@Param('id') id: string) {
    return this.hostelsService.deleteHostelById(+id);
  }

  @Get('search/:filter')
  @Header('content-type', 'application/json')
  @ApiOkResponse({ type: HostelEntity, isArray: true })
  public searchHostels(@Param('filter') filter: string) {
    return this.hostelsService.searchHostels(filter);
  }

  @Get(':id/students')
  @Header('content-type', 'application/json')
  @ApiOkResponse({ type: HostelEntity })
  getStudentsInHostelById(@Param('id') id: string) {
    return this.hostelsService.getStudentsInHostelById(+id);
  }

  @Patch(':id/reassign/:studentId')
  @Header('content-type', 'application/json')
  @ApiOkResponse({ type: HostelEntity })
  updateStudentsInHostelById(
    @Param('id') id: string,
    @Param('studentId') studentId: string,
    // @Body() updateHostelDto: UpdateHostelDto,
  ) {
    return this.hostelsService.updateStudentsInHostelById(
      Number(id),
      Number(studentId),
    );
  }
}
