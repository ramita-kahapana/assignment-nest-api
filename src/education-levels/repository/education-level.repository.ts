import { EntityRepository, Repository } from 'typeorm';
import { EducationLevel } from '../entities/education-level.entity';

@EntityRepository(EducationLevel)
export class EducationRepository extends Repository<EducationLevel> {

    findByUsername(name: string): Promise<EducationLevel[]> {
        return this.createQueryBuilder("education_level")
                .addSelect("education_level.name")
                .where("name = :name", { name })
                .getMany()
    }

}