export class CreateInstructorDto {
  name: string;
  contacts: string[];
  instructorOf: string[];
  affilatedSchoold?: string;
  isSchoolManager?: boolean;
  isVarified?: boolean;
}
