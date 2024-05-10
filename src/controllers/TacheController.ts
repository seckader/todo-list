import { Request, Response } from "express";
import { TacheService } from "../services/TacheService";
import { Tache } from "../entities/Tache";

export class TacheController {

    private tacheService: TacheService;

    constructor() {
        this.tacheService = new TacheService();
    }

    async getAllTaches(req: Request, res: Response) {
        try {
            const listeTaches = await this.tacheService.getAllTaches({});

            res.json(listeTaches);
        } catch (error) {
            res.status(500).json({
                error: 'Une erreur est survenue'
            });
        }
    }

    async getTacheById(req: Request, res: Response) {
        try {

            const tache = await this.tacheService.getById({_idTache: Number(req.params._idTache)});

            if(!tache) {
                return res.status(404).json({
                    error: 'Tâche non trouvé'
                });
            }

            res.json(tache);

        } catch (error) {
            res.status(500).json({
                error: 'Une erreur est survenue'
            });
        }
    }

    async createTache(req: Request, res: Response) {
        try {
            const { titre, description, dateEcheance, priorite, projet } = req.body;

            if(
                titre === undefined ||
                projet === undefined
            ) {

                res.status(400).json({
                    message: "Paramètres invalides"
                });

            } else {
                const tache: Tache = new Tache();
                tache.titre = titre;
                tache.description = description;
                tache.dateEcheance = new Date(dateEcheance);
                tache.priorite = priorite;
                tache.projet = projet;
                tache.isDone = false;


                const resultat = await this.tacheService.createTache(tache);
                res.status(201).json(resultat);     
            }
        } catch (error) {
            res.status(400).json({ 
                error: 'Une erreur est survenue' 
            });
        }
    }

    async updateTache(req: Request, res: Response) {
        try {
            const tache: Tache = req.body;

            const resultat = await this.tacheService.updateTache({_idTache: tache._idTache}, tache);

            if (!resultat) {
                return res.status(404).json({ error: 'Tache non trouvée' });
              }

            res.status(200).json(resultat);

        } catch (error) {
            res.status(500).json({ 
                error: 'Une erreur est survenue' 
            });
        }
    }

    async deleteTache(req: Request, res: Response) {
        try {
            const id = Number(req.params._idTache);

            const tacheSupprimee = await this.tacheService.deleteTache(id);

            if (!tacheSupprimee) {
                return res.status(404).json({ error: 'Tache non trouvée' });
            }

            res.status(204).end();
        } catch (error) {
            res.status(500).json({ 
                error: 'Une erreur est survenue' 
            });
        }
    }

}