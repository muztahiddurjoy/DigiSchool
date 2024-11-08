import { Injectable } from "@nestjs/common";
import { CreateDonationDto } from "./dto/create-donation.dto";
//import { UpdateDonationDto } from "./dto/update-donation.dto";
import { DatabaseService } from "../database/database.service";
import { CreateMaterialRequestDto } from "./dto/create-material-request.dto";

@Injectable()
export class DonationService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(
    createDonationDto: CreateDonationDto,
    donorId: string,
    materialRequestId: string
  ) {
    const donation = this.databaseService.donation.create({
      data: {
        donatorName: createDonationDto.donatorName,
        donatorUserId: donorId,
        materialType: createDonationDto.materialType,
        materialRequestId: materialRequestId,
        money: createDonationDto.money,
        materials: createDonationDto.materials
      },
      include: {
        donator: true,
        materialRequest: true
      }
    });
    return {
      message: "donation done",
      donation: donation
    };
  }

  async requestMaterials(
    schoolId: string,
    createMaterialRequestDto: CreateMaterialRequestDto
  ) {
    const materialRequest = await this.databaseService.materialRequest.create({
      data: {
        message: createMaterialRequestDto.message,
        schoolId: schoolId,
        materialType: createMaterialRequestDto.materialType
      }
    });

    return {
      message: "materials requested",
      request: materialRequest
    };
  }

  async findAll() {
    return this.databaseService.donation.findMany({
      include: {
        donator: true,
        materialRequest: true
      }
    });
  }

  async findAllMaterialRequests() {
    return this.databaseService.materialRequest.findMany({
      include: {
        donationsRecieved: true,
        requestedBySchool: true
      }
    });
  }

  async findOne(id: string) {
    return this.databaseService.donation.findUnique({
      where: {
        id: id
      },
      include: {
        donator: true,
        materialRequest: true
      }
    });
  }

  async findOneMaterialRequest(id: string) {
    return this.databaseService.materialRequest.findUnique({
      where: {
        id: id
      },
      include: {
        donationsRecieved: true,
        requestedBySchool: true
      }
    });
  }

  // update(id: number, updateDonationDto: UpdateDonationDto) {
  //   return `This action updates a #${id} donation`;
  // }

  remove(id: number) {
    return `This action removes a #${id} donation`;
  }
}
