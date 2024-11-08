import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateStudentDto } from "./dto/create-student.dto";
//import { UpdateStudentDto } from "./dto/update-student.dto";
import { DatabaseService } from "../database/database.service";
import sharp from "sharp";

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
        profileImage: createStudentDto.profileImage,
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

  async getVerified(studentId: string) {
    await this.databaseService.studentProfile.update({
      where: {
        id: studentId
      },
      data: {
        isVarified: true
      }
    });

    return {
      message: "Student is varified now"
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

  async generateIdCard(studentId: string) {
    const student = await this.databaseService.studentProfile.findUnique({
      where: {
        id: studentId
      }
    });

    const width = 408;
    const height = 40;
    const name = student.name;
    const age = student.age;

    const svgName = Buffer.from(`
      <svg width="${width}" height="${height}">
          <text x="50%" y="50%" text-anchor="middle" dy="0.25em" fill="#000">${name}}</text>
      </svg>
  `);

    const svgAge = Buffer.from(`
      <svg width="${width}" height="${height}">
          <text x="50%" y="50%" text-anchor="middle" dy="0.25em" fill="#000">${age}</text>
      </svg>
  `);

    const svgId = Buffer.from(`
      <svg width="${width}" height="${height}">
          <text x="50%" y="50%" text-anchor="middle" dy="0.25em" fill="#000">${student.id}</text>
      </svg>
  `);

    const svgPhone = Buffer.from(`
      <svg width="${width}" height="${height}">
          <text x="50%" y="50%" text-anchor="middle" dy="0.25em" fill="#000">${student.contacts[0]}</text>
      </svg>
  `);

    const svgEmail = Buffer.from(`
      <svg width="${width}" height="${height}">
          <text x="50%" y="50%" text-anchor="middle" dy="0.25em" fill="#000">${student.email}</text>
      </svg>
  `);

//     const label = Buffer.from(`
//     <svg width="${width}" height="${height}">
//         <text x="50%" y="50%" text-anchor="middle" dy="0.25em" fill="#000">${svgBufferName}</text>
//     </svg>
// `);

    const fileBuffer = await sharp(
      "/Users/mdkaifibnzaman/IdeaProjects/DigiSchool/backend/src/modules/core/id_temp.png"
    )
      .composite([
        // { input: svgBufferId, left: 0, top: 180 },
        // { input: svgBufferName, left: 0, top: 210 },
        // { input: svgBufferAge, left: 0, top: 240 },
        // { input: svgBufferPhone, left: 0, top: 270 },
        // { input: svgBufferEmail, left: 0, top: 300 }
        { input: svgId, left: 0, top: 340 },
        { input: svgName, left: 0, top: 370 },
        { input: svgAge, left: 0, top: 400 },
        { input: svgPhone, left: 0, top: 430 },
        { input: svgEmail, left: 0, top: 460 }
      ])
      .toBuffer();
    return fileBuffer;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
