/** Todo-list App */
import "reflect-metadata";
import * as dotenv from 'dotenv';
import projetRoutes from './routes/projet.routes';
import tacheRoutes from './routes/tache.routes';
import { AppDataSource } from './config/datasource';
import express, { Application, Request, Response } from 'express';

dotenv.config();
const PORT = process.env.PORT || 3000;

// Initialisation de l'app Express
const app: Application = express();

// Configuration du Middleware pour parser les requêtes
app.use(express.json());

// Configuration des routes
app.use('/api', projetRoutes);
app.use('/api', tacheRoutes);

// Middleware de Gestion d'erreur
app.use((req: Request, res: Response) => {
    res.status(404).json({ error: 'URL invalide' });
});

AppDataSource.initialize().then(() => {
    
    console.log('Connexion à la base de données réussi.');

    // Démarrage du serveur
    app.listen(PORT, () => {
        console.log(`Le serveur tourne sur le port ${PORT}`);
      });

}).catch((error) => console.error(`Erreur de connexion à la base de données ${error}.`));