import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateStudentDto } from "./dto/create-student.dto";
//import { UpdateStudentDto } from "./dto/update-student.dto";
import { DatabaseService } from "../database/database.service";

@Injectable()
export class StudentService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createStudentDto: CreateStudentDto, userId: string) {
    const user = await this.databaseService.user.findUnique({
      where: { id: userId }
    });
    if (!user) throw new NotFoundException("User not registered");
    const student = await this.databaseService.studentProfile.create({
      data: {
        id: userId,
        contacts: createStudentDto.contacts,
        age: createStudentDto.age,
        enrolledIn: createStudentDto.grade,
        name: createStudentDto.name,
        email: user.email,
        isVolunteer: createStudentDto.isVolunteer
          ? createStudentDto.isVolunteer
          : false
      }
    });

    return {
      message: "Student profile created",
      student: student
    };
  }

  async findAll() {
    return this.databaseService.studentProfile.findMany({});
  }

  findOne(id: string) {
    return this.databaseService.studentProfile.findUnique({
      where: { id: id }
    });
  }

  // update(id: number, updateStudentDto: UpdateStudentDto) {
  //   return `This action updates a #${id} student`;
  // }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
