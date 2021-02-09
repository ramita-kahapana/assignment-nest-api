import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateEducationDto {
    @IsNotEmpty()
    name: string;
}