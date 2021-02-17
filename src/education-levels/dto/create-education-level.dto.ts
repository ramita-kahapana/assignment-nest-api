import { IsInt, IsNotEmpty, IsString } from "class-validator";
export class CreateEducationLevelDto {
    @IsNotEmpty()
    id: number
    @IsNotEmpty()
    name: string
}
