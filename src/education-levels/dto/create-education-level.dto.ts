import { IsInt, IsNotEmpty, IsString } from "class-validator";
export class CreateEducationLevelDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsInt()
    id: number
}
