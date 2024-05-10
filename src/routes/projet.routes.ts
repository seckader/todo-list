import { Router } from "express";
import { ProjetController } from "../controllers/ProjetController";

const router = Router();
const projetController = new ProjetController();

router.get('/projets', projetController.getAllProjets);
router.get('/projet/:id', projetController.getProjetById);
router.post('/projet', projetController.createProjet);
router.put('projet/:id', projetController.updateProjet);
router.delete('projet/:id', projetController.deleteProjet);

export default router;

