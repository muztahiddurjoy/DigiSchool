import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { DatabaseService } from "../database/database.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly databaseService: DatabaseService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("init-grades")
  async initGrade() {
    const grades = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let gradess = [];
    grades.forEach(async (g) => {
      const grade = await this.databaseService.grade.create({
        data: {
          name: g
        }
      });
      gradess.push(grade);
    });

    return gradess;
  }
}
