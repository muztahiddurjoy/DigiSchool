import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req
} from "@nestjs/common";
import { SchoolService } from "./school.service";
import { CreateSchoolDto } from "./dto/create-school.dto";
import { AccessTokenGuard } from "../auth/auth.guard";
import { Request } from "express";
//import { UpdateSchoolDto } from "./dto/update-school.dto";

@Controller("school")
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  async create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolService.create(createSchoolDto);
  }

  @Get()
  async findAll() {
    return this.schoolService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.schoolService.findOne(id);
  }

  @UseGuards(AccessTokenGuard)
  @Get("/:id/enroll")
  async enroll(@Param("id") id: string, @Req() req: Request) {
    const user = req.user as { id: string };
    return this.schoolService.enroll(id, user.id);
  }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
  //   return this.schoolService.update(+id, updateSchoolDto);
  // }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.schoolService.remove(+id);
  }
}
