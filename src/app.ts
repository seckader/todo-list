/** Todo-list App */
import * as dotenv from 'dotenv';
import { AppDataSource } from './config/datasource';

dotenv.config();

AppDataSource.initialize().then(() => {
    console.log('Connexion à la base de données réussi.');

}).catch((error) => console.error(`Erreur de connexion à la base de données ${error}.`));