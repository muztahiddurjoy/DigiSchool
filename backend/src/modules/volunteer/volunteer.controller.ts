import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Req
} from "@nestjs/common";
import { VolunteerService } from "./volunteer.service";
import { CreateVolunteerDto } from "./dto/create-volunteer.dto";
//import { UpdateVolunteerDto } from "./dto/update-volunteer.dto";
import { Request } from "express";

@Controller("volunteer")
export class VolunteerController {
  constructor(private readonly volunteerService: VolunteerService) {}

  @Post()
  async create(
    @Body() createVolunteerDto: CreateVolunteerDto,
    @Req() req: Request
  ) {
    const user = req.user as { id: string };
    if (user) return this.volunteerService.create(createVolunteerDto, user.id);
    else return this.volunteerService.create(createVolunteerDto);
  }

  @Get()
  async findAll() {
    return this.volunteerService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.volunteerService.findOne(+id);
  }

  // @Patch(":id")
  // update(
  //   @Param("id") id: string,
  //   @Body() updateVolunteerDto: UpdateVolunteerDto
  // ) {
  //   return this.volunteerService.update(+id, updateVolunteerDto);
  // }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.volunteerService.remove(+id);
  }
}
