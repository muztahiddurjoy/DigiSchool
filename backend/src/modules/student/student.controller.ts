import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Req,
  Put,
  UseGuards,
  Res
} from "@nestjs/common";
import { StudentService } from "./student.service";
import { CreateStudentDto } from "./dto/create-student.dto";
//import { UpdateStudentDto } from "./dto/update-student.dto";
import { Request, Response } from "express";
import { AccessTokenGuard } from "../auth/auth.guard";

@Controller("student")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @UseGuards(AccessTokenGuard)
  async create(
    @Body() createStudentDto: CreateStudentDto,
    @Req() req: Request
  ) {
    console.log(req);
    const user = req.user as { id: string };
    return this.studentService.create(createStudentDto, user.id);
  }

  @Get()
  async findAll() {
    return this.studentService.findAll();
  }

  @Put("/get-varified")
  async getVarified(@Req() req: Request) {
    const user = req.user as { id: string };
    return this.studentService.getVerified(user.id);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.studentService.findOne(id);
  }

  @Get(":id/id-card")
  async generateIdCard(@Param("id") id: string, @Res() res: Response) {
    const fileBuffer = await this.studentService.generateIdCard(id);
    const b64 = fileBuffer.toString("base64");
    const mimeType = "image/png"; // e.g., image/png
    res.send(`<img src="data:${mimeType};base64,${b64}" />`);
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
