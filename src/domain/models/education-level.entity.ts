import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class EducationLevelModel{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    isActive: boolean;

}