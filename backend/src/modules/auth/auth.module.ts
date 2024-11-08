import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { AccessTokenStrategy, RefreshTokenStrategy } from "./auth.strategy";
import { DatabaseModule } from "../database/database.module";
import { InstructorModule } from "../instructor/instructor.module";
import { StudentModule } from "../student/student.module";
import { SchoolModule } from "../school/school.module";
import { VolunteerModule } from "../volunteer/volunteer.module";
import { DonationModule } from "../donation/donation.module";

@Module({
  imports: [
    JwtModule.register({}),
    DatabaseModule,
    InstructorModule,
    StudentModule,
    SchoolModule,
    VolunteerModule,
    DonationModule
  ],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy]
})
export class AuthModule {}
