import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateInstructorDto } from "./dto/create-instructor.dto";
//import { UpdateInstructorDto } from "./dto/update-instructor.dto";
import { DatabaseService } from "../database/database.service";

@Injectable()
export class InstructorService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createInstructorDto: CreateInstructorDto, userId: string) {
    const user = await this.databaseService.user.findUnique({
      where: { id: userId }
    });
    if (!user) throw new NotFoundException("User not registered");

    const instructor = this.databaseService.instructiorProfile.create({
      data: {
        id: userId,
        email: user.email,
        name: createInstructorDto.name,
        isVarified: createInstructorDto.isVarified,
        isSchoolManager: createInstructorDto.isSchoolManager,
        affilatedSchoolId: createInstructorDto.affilatedSchoold
      }
    });
    return {
      message: "Instructor profile created succesfully",
      instructor: instructor
    };
  }

  findAll() {
    return `This action returns all instructor`;
  }

  async findAllUnvarifiedInstructors(managerId) {
    const manager = await this.databaseService.instructiorProfile.findUnique({
      where: {
        id: managerId
      },
      include: {
        affilatedSchool: true
      }
    });

    const teachers = await this.databaseService.instructiorProfile.findMany({
      where: {
        affilatedSchoolId: manager.affilatedSchoolId,
        isVarified: false
      }
    });

    return teachers;
  }

  async approveInstructor(instructorId: string) {
    await this.databaseService.instructiorProfile.update({
      data: {
        isVarified: true
      },
      where: {
        id: instructorId
      }
    });

    return {
      message: "Instructor approved"
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} instructor`;
  }

  // update(id: number, updateInstructorDto: UpdateInstructorDto) {
  //   return `This action updates a #${id} instructor`;
  // }

  remove(id: number) {
    return `This action removes a #${id} instructor`;
  }
}
