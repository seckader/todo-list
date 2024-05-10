# Todo-list Backend

Ce projet est le backend d'une application Todo-list développée avec Node.js, Express, TypeScript et une base de données MySQL. Il permet de gérer des projets et des tâches associées à ces projets.

## Fonctionnalités

- Créer, lire, mettre à jour et supprimer des projets
- Créer, lire, mettre à jour et supprimer des tâches
- Associer une tâche à un projet spécifique
- Marquer une tâche comme terminée ou non terminée

## Prérequis

Avant d'exécuter l'application, assurez-vous d'avoir les éléments suivants installés sur votre système :

- Node.js (version 14 ou supérieure)
- npm (généralement fourni avec Node.js)
- MySQL (ou tout autre système de gestion de base de données compatible avec TypeORM)

## Installation

1. Clonez le dépôt Git sur votre machine locale :

```bash
git clone https://github.com/votre-username/todo-list-backend.git

```

2. Accédez au répertoire du projet :

```bash
cd todo-list-backend

```

3. Installez les dépendances du projet :

```bash
npm install

```

4. Créez un fichier .env à la racine du projet et définissez les variables d'environnement pour la connexion à la base de données :

```bash
DB_HOST=localhost
DB_USER=votre_utilisateur
DB_PASSWORD=votre_mot_de_passe
DB_NAME=todo_list

```

5. Créez une nouvelle base de données MySQL avec le nom spécifié dans la variable d'environnement DB_NAME.

## Exécution

1. Compilez le code TypeScript :

```bash
npm run build
```

2. Démarrez le serveur

```bash
npm start
```

## Développement

Pour exécuter l'application en mode développement avec le rechargement automatique des modifications, utilisez la commande suivante :

```bash
npm run dev
```

## Contribution

Si vous souhaitez contribuer à ce projet, n'hésitez pas à soumettre des pull requests ou à ouvrir des issues sur le dépôt Git.