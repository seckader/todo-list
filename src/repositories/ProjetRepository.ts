import { DeepPartial, DeleteResult, FindOptionsWhere, Repository } from "typeorm";
import { Projet } from "../entities/Projet";
import { AppDataSource } from "../config/datasource";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export class ProjetRepository {

    private repo: Repository<Projet>;

    constructor() {
        this.repo = AppDataSource.getRepository(Projet);
    }

    async getAllProjets(filter: FindOptionsWhere<Projet>): Promise<Projet[]> {
        const listeProjets: Projet[] = await this.repo.find({where: filter});

        return listeProjets;
    }

    async getById(filter: FindOptionsWhere<Projet>): Promise<Projet | null> {
        const projet = await this.repo.findOneBy(filter);

        return projet;
    }

    async createProjet(projet: DeepPartial<Projet>): Promise<Projet> {
        const resultat = await this.repo.save(projet);

        return resultat;
    }

    async updateProjet(filter: FindOptionsWhere<Projet>, projet:  QueryDeepPartialEntity<Projet>): Promise<Projet | null> {
        await this.repo.update(filter, projet);

        return this.repo.findOneBy(filter);
    }

    async deleteProjet(id: number): Promise<DeleteResult> {
        const resultat = await this.repo.delete(id);

        return resultat;
    }
}