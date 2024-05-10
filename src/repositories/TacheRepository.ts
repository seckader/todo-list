import { DeepPartial, DeleteResult, FindOptionsWhere, Repository } from "typeorm";
import { Tache } from "../entities/Tache";
import { AppDataSource } from "../config/datasource";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export class TacheRepository {

    private repo: Repository<Tache>;

    constructor() {
        this.repo = AppDataSource.getRepository(Tache);
    }

    async getAllTaches(filter: FindOptionsWhere<Tache>): Promise<Tache[]> {
        const listeTaches: Tache[] = await this.repo.find({where: filter});

        return listeTaches;
    }

    async getById(filter: FindOptionsWhere<Tache>): Promise<Tache | null> {
        const tache = await this.repo.findOneBy(filter);

        return tache;
    }

    async createTache(tache: DeepPartial<Tache>): Promise<Tache> {
        const resultat = await this.repo.save(tache);

        return resultat;
    }

    async updateTache(filter: FindOptionsWhere<Tache>, tache:  QueryDeepPartialEntity<Tache>): Promise<Tache | null> {
        await this.repo.update(filter, tache);

        return this.repo.findOneBy(filter);
    }

    async deleteTache(id: number): Promise<DeleteResult> {
        const resultat = await this.repo.delete(id);

        return resultat;
    }

}