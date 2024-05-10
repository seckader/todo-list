import { DeepPartial, DeleteResult, FindOptionsWhere } from "typeorm";
import { TacheRepository } from "../repositories/TacheRepository";
import { Tache } from "../entities/Tache";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export class TacheService {

    private tacheRepository: TacheRepository;

    constructor() {
        this.tacheRepository = new TacheRepository();
    }

    async getAllTaches(filter: FindOptionsWhere<Tache>): Promise<Tache[]> {
        const listeTaches: Tache[] = await this.tacheRepository.getAllTaches(filter);

        return listeTaches;
    }

    async getById(filter: FindOptionsWhere<Tache>): Promise<Tache | null> {
        const tache = await this.tacheRepository.getById(filter);

        return tache;
    }

    async createTache(tache: DeepPartial<Tache>): Promise<Tache> {
        const resultat = await this.tacheRepository.createTache(tache);

        return resultat;
    }

    async updateTache(filter: FindOptionsWhere<Tache>, tache:  QueryDeepPartialEntity<Tache>): Promise<Tache | null> {
        const resultat = await this.tacheRepository.updateTache(filter, tache);

        return resultat;
    }

    async deleteTache(id: number): Promise<DeleteResult> {
        const resultat = await this.tacheRepository.deleteTache(id);

        return resultat;
    }

}