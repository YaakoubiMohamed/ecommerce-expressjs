# Projet Express.js avec Sequelize

Ce dépôt contient une API Express.js utilisant Sequelize pour interagir avec une base de données MySQL. L'API comprend des fonctionnalités telles que l'authentification, la gestion des utilisateurs, des catégories, des produits, des commandes, des lignes de commande, des messages et des réclamations.

## Installation

1. Cloner ce dépôt :

    ```
    git clone https://github.com/YaakoubiMohamed/ecommerce-expressjs
    ```

2. Installer les dépendances :

    ```
    cd api-boutique
    npm install
    ```

3. Configurer la base de données :

   - Mettez à jour `config/config.js` avec vos identifiants de base de données MySQL.

4. Générer une clé secrète JWT :

    - Mettez à jour `config/secret.js` avec une clé secrète pour la génération de jeton JWT.

5. Lancer l'application :

    ```
    npm start
    ```

## Utilisation

- L'application fournit des opérations CRUD pour les utilisateurs et les publications.
- L'authentification est mise en œuvre à l'aide de jetons JWT.
- Les points de terminaison sont définis dans les fichiers de route respectifs.
- Les données des utilisateurs et des publications peuvent être préremplies à partir de fichiers JSON situés dans le répertoire `json_data/`.

## Authentification

- `POST /auth/login` : Connexion avec email et mot de passe pour obtenir un jeton JWT.
- `POST /auth/register` : Enregistrer un nouvel utilisateur.

## Utilisateurs

- `GET /users` : Obtenir une liste d'utilisateurs.
- `GET /users/:id` : Obtenir les détails d'un utilisateur spécifique.
- `PUT /users/:id` : Mettre à jour les détails de l'utilisateur.
- `DELETE /users/:id` : Supprimer un utilisateur.

## Catégories
- `GET /api/categories` : Obtenir la liste des catégories
- `POST /api/categories` : Créer une nouvelle catégorie
- `GET /api/categories/:id` : Obtenir les détails d'une catégorie spécifique
- `PUT /api/categories/:id` : Mettre à jour les détails d'une catégorie
- `DELETE /api/categories/:id` : Supprimer une catégorie

## Produits
- `GET /api/produits` : Obtenir la liste des produits
- `POST /api/produits` : Créer un nouveau produit
- `GET /api/produits/:id` : Obtenir les détails d'un produit spécifique
- `PUT /api/produits/:id` : Mettre à jour les détails d'un produit
- `DELETE /api/produits/:id` : Supprimer un produit

## Commandes
- `GET /api/commandes` : Obtenir la liste des commandes
- `POST /api/commandes` : Créer une nouvelle commande
- `GET /api/commandes/:id` : Obtenir les détails d'une commande spécifique
- `PUT /api/commandes/:id` : Mettre à jour les détails d'une commande
- `DELETE /api/commandes/:id` : Supprimer une commande

## Lignes de commande
- `GET /api/lignes-commande` : Obtenir la liste des lignes de commande
- `POST /api/lignes-commande` : Créer une nouvelle ligne de commande
- `GET /api/lignes-commande/:id` : Obtenir les détails d'une ligne de commande spécifique
- `PUT /api/lignes-commande/:id` : Mettre à jour les détails d'une ligne de commande
- `DELETE /api/lignes-commande/:id` : Supprimer une ligne de commande

## Messages
- `GET /api/messages` : Obtenir la liste des messages
- `POST /api/messages` : Créer un nouveau message
- `GET /api/messages/:id` : Obtenir les détails d'un message spécifique
- `DELETE /api/messages/:id` : Supprimer un message

## Réclamations
- `GET /api/reclamations` : Obtenir la liste des réclamations
- `POST /api/reclamations` : Créer une nouvelle réclamation
- `GET /api/reclamations/:id` : Obtenir les détails d'une réclamation spécifique
- `DELETE /api/reclamations/:id` : Supprimer une réclamation

## Auteur

Yaakoubi Mohamed (@votre_nom)
