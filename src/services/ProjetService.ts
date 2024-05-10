import { DeepPartial, DeleteResult, FindOptionsWhere } from "typeorm";
import { Projet } from "../entities/Projet";
import { ProjetRepository } from "../repositories/ProjetRepository";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export class ProjetService {

    private projetRepository: ProjetRepository;

    constructor() {
        this.projetRepository = new ProjetRepository();
    }

    async getAllProjets(filter: FindOptionsWhere<Projet>): Promise<Projet[]> {
        const listeProjets : Projet[] = await this.projetRepository.getAllProjets(filter);

        return listeProjets;
    }

    async getById(filter: FindOptionsWhere<Projet>): Promise<Projet | null> {
        const projet = await this.projetRepository.getById(filter);

        return projet;
    }

    async createProjet(projet: DeepPartial<Projet>): Promise<Projet> {
        const resultat = await this.projetRepository.createProjet(projet);

        return resultat;
    }

    async updateProjet(filter: FindOptionsWhere<Projet>, projet:  QueryDeepPartialEntity<Projet>): Promise<Projet | null> {
        const resultat = await this.projetRepository.updateProjet(filter, projet);

        return resultat;
    }

    async deleteProjet(id: number): Promise<DeleteResult> {
        const resultat = await this.projetRepository.deleteProjet(id);

        return resultat;
    }
}