import { Injectable } from "@nestjs/common";
import { CreateVolunteerDto } from "./dto/create-volunteer.dto";
//import { UpdateVolunteerDto } from "./dto/update-volunteer.dto";
import { DatabaseService } from "../database/database.service";
import { randomUUID } from "crypto";

@Injectable()
export class VolunteerService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createVolunteerDto: CreateVolunteerDto, userId?: string) {
    const volunteer = this.databaseService.volunteerProfile.create({
      data: {
        name: createVolunteerDto.name,
        studentId: userId ? userId : null,
        id: userId ? userId : randomUUID()
      }
    });
    return {
      message: "Volunteer created successfully",
      volunteer: volunteer
    };
  }

  async findAll() {
    return this.databaseService.volunteerProfile.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} volunteer`;
  }

  // update(id: number, updateVolunteerDto: UpdateVolunteerDto) {
  //   return `This action updates a #${id} volunteer`;
  // }

  remove(id: number) {
    return `This action removes a #${id} volunteer`;
  }
}
