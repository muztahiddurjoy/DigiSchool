import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Req
} from "@nestjs/common";
import { StudentService } from "./student.service";
import { CreateStudentDto } from "./dto/create-student.dto";
//import { UpdateStudentDto } from "./dto/update-student.dto";
import { Request } from "express";

@Controller("student")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(
    @Body() createStudentDto: CreateStudentDto,
    @Req() req: Request
  ) {
    const user = req.user as { id: string };
    return this.studentService.create(createStudentDto, user.id);
  }

  @Get()
  async findAll() {
    return this.studentService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.studentService.findOne(id);
  }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateStudentDto: UpdateStudentDto) {
  //   return this.studentService.update(+id, updateStudentDto);
  // }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.studentService.remove(+id);
  }
}
