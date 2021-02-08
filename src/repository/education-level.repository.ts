import { EducationLevelModel } from 'src/domain/models/education-level.entity';
import { EntityRepository, Repository } from 'typeorm';


@EntityRepository(EducationLevelModel)
export class EducationLevelMoedelRepository extends Repository<EducationLevelModel> {

    findByEducationLevelname(name: string): Promise<EducationLevelModel[]> {
        return this.createQueryBuilder("educationlevel")
            .addSelect("educationlevel.name")
            .where("name = :name", { name })
            .getMany()
    }

}