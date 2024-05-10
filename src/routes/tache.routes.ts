import { Router } from "express";
import { TacheController } from "../controllers/TacheController";

const router = Router();
const tacheController =  new TacheController();

router.get('/taches', tacheController.getAllTaches);
router.get('/tache/:id', tacheController.getTacheById);
router.post('/tache', tacheController.createTache);
router.put('/tache/:id', tacheController.updateTache);
router.delete('/tache/:id', tacheController.deleteTache);

export default router;