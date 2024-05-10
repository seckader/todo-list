import { DeepPartial, DeleteResult, FindOptionsWhere, Repository } from "typeorm";
import { Projet } from "../entities/Projet";
import { AppDataSource } from "../config/datasource";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export class ProjetRepository extends Repository<Projet> {

    constructor() {
        super(Projet, AppDataSource.manager);
    }

    async getAllProjets(filter: FindOptionsWhere<Projet>): Promise<Projet[]> {
        const listeProjets: Projet[] = await this.find({where: filter});

        return listeProjets;
    }

    async getById(filter: FindOptionsWhere<Projet>): Promise<Projet | null> {
        const projet = await this.findOneBy(filter);

        return projet;
    }

    async createProjet(projet: DeepPartial<Projet>): Promise<Projet> {
        const resultat = await this.save(projet);

        return resultat;
    }

    async updateProjet(filter: FindOptionsWhere<Projet>, projet:  QueryDeepPartialEntity<Projet>): Promise<Projet | null> {
        await this.update(filter, projet);

        return this.findOneBy(filter);
    }

    async deleteProjet(id: number): Promise<DeleteResult> {
        const resultat = await this.delete(id);

        return resultat;
    }
}