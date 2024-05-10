import { DeepPartial, DeleteResult, FindOptionsWhere, Repository } from "typeorm";
import { Tache } from "../entities/Tache";
import { AppDataSource } from "../config/datasource";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export class TacheRepository extends Repository<Tache> {

    constructor() {
        super(Tache, AppDataSource.manager);
    }

    async getAllTaches(filter: FindOptionsWhere<Tache>): Promise<Tache[]> {
        const listeTaches: Tache[] = await this.find({where: filter});

        return listeTaches;
    }

    async getById(filter: FindOptionsWhere<Tache>): Promise<Tache | null> {
        const tache = await this.findOneBy(filter);

        return tache;
    }

    async createTache(tache: DeepPartial<Tache>): Promise<Tache> {
        const resultat = await this.save(tache);

        return resultat;
    }

    async updateTache(filter: FindOptionsWhere<Tache>, tache:  QueryDeepPartialEntity<Tache>): Promise<Tache | null> {
        await this.update(filter, tache);

        return this.findOneBy(filter);
    }

    async deleteTache(id: number): Promise<DeleteResult> {
        const resultat = await this.delete(id);

        return resultat;
    }

}