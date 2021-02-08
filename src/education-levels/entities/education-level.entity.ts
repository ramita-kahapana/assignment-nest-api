import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EducationLevel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
