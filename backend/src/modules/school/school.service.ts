import { Injectable } from "@nestjs/common";
import { CreateSchoolDto } from "./dto/create-school.dto";
//import { UpdateSchoolDto } from "./dto/update-school.dto";
import { DatabaseService } from "../database/database.service";

@Injectable()
export class SchoolService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createSchoolDto: CreateSchoolDto) {
    const school = await this.databaseService.school.create({
      data: {
        name: createSchoolDto.name
      }
    });
    //connect to grades
    createSchoolDto.grades.forEach(async (grade) => {
      await this.databaseService.school.update({
        where: { id: school.id },
        data: {
          grades: {
            connect: {
              name: grade
            }
          }
        }
      });
    });
    return "This action adds a new school";
  }

  async joinSchool(schoolId: string, instructorId: string) {
    await this.databaseService.instructiorProfile.update({
      where: {
        id: instructorId
      },
      data: {
        affilatedSchoolId: schoolId
      }
    });
    return {
      message: "Joined as an instructor"
    };
  }

  findAll() {
    return `This action returns all school`;
  }

  async becomeManager(schoolId: string, instructorId: string) {
    await this.databaseService.instructiorProfile.update({
      where: {
        id: instructorId
      },
      data: {
        isSchoolManager: true
      }
    });
    return {
      message: "Joined as an instructor"
    };
  }

  async findOne(id: string) {
    return this.databaseService.school.findUnique({
      where: {
        id: id
      },
      include: {
        insturctors: true,
        materialRequests: true,
        grades: true
      }
    });
  }

  // update(id: number, updateSchoolDto: UpdateSchoolDto) {
  //   return `This action updates a #${id} school`;
  // }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
