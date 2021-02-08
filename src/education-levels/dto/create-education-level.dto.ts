import { IsNotEmpty } from "class-validator";
export class CreateEducationLevelDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    id: number
}
