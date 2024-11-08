export class CreateStudentDto {
  name: string;
  contacts: string[];
  age: number;
  isVolunteer?: boolean;
  grade: string;
  profileImage?: string;
}
