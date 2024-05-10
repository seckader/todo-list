import { Request, Response } from "express";
import { ProjetService } from "../services/ProjetService";
import { Projet } from "../entities/Projet";

export class ProjetController {

    private projetService: ProjetService;

    constructor() {
        this.projetService = new ProjetService();
    }

    async getAllProjets(req: Request, res: Response) {
        try {
            const listeProjets = await this.projetService.getAllProjets({});

            res.json(listeProjets);
        } catch (error) {
            res.status(500).json({
                error: 'Une erreur est survenue'
            });
        }
    }

    async getProjetById(req: Request, res: Response) {
        try {

            const projet = await this.projetService.getById({_idProjet: Number(req.params._idProjet)});

            if(!projet) {
                return res.status(404).json({
                    error: 'Projet non trouvé'
                });
            }

            res.json(projet);

        } catch (error) {
            res.status(500).json({
                error: 'Une erreur est survenue'
            });
        }
    }

    async createProjet(req: Request, res: Response) {
        try {
            const { nom } = req.body;

            if(nom === undefined) {

                res.status(400).json({
                    message: "Paramètres invalides"
                });

            } else {
                const projet: Projet = new Projet();
                projet.nomProjet = nom;

                const resultat = await this.projetService.createProjet(projet);
                res.status(201).json(resultat);     
            }
        } catch (error) {
            res.status(400).json({ 
                error: 'Une erreur est survenue' 
            });
        }
    }

    async updateProjet(req: Request, res: Response) {
        try {
            const projet: Projet = req.body;

            const resultat = await this.projetService.updateProjet({_idProjet: projet._idProjet}, projet);

            if (!resultat) {
                return res.status(404).json({ error: 'Projet non trouvé' });
              }

            res.status(200).json(resultat);

        } catch (error) {
            res.status(500).json({ 
                error: 'Une erreur est survenue' 
            });
        }
    }

    async deleteProjet(req: Request, res: Response) {
        try {
            const id = Number(req.params._idProjet);

            const projetSupprime = await this.projetService.deleteProjet(id);

            if (!projetSupprime) {
                return res.status(404).json({ error: 'Projet non trouvé' });
            }

            res.status(204).end();
        } catch (error) {
            res.status(500).json({ 
                error: 'Une erreur est survenue' 
            });
        }
    }
}