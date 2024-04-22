Atelier MongoDB en Mode Replica Set

Objectifs de l'Atelier

    Configurer MongoDB en mode Replica Set.
    Utiliser MongoDB avec le langage de programmation de votre choix.
    Interagir avec la base de données à l'aide de la CLI MongoDB.
    Générer et manipuler de fausses données.
    Restituer un dépôt git zippé contenant le code source et un document Markdown.

Prérequis

    Docker installé sur votre machine.
    Connaissances de base de la CLI Docker. si utilisé
    Un environnement de développement pour le langage de programmation choisi.
    Accès à internet pour la documentation et téléchargements nécessaires.

Étape 1: Configuration de MongoDB en Mode Replica Set

    Démarrage du Replica Set avec Docker : Suivez ces instructions pour configurer un environnement MongoDB Replica Set avec Docker. Vous pouvez utiliser docker-compose pour simplifier le processus.
        Créez un fichier docker-compose.yml pour définir les services MongoDB Replica Set. Utilisez l’exemple de configuration pour un Replica Set donné dans la documentation officielle MongoDB ou une ressource en ligne fiable.

    Vérification : Assurez-vous que votre Replica Set fonctionne correctement en vous connectant via la CLI MongoDB (mongo) et en exécutant quelques commandes de base comme rs.status().

Étape 2: Génération de Fausses Données

    Utilisez une bibliothèque adaptée à votre langage de programmation pour générer de fausses données. Par exemple, pour JavaScript, vous pouvez utiliser Faker.js, pour Python, Faker est un bon choix.

    Structure des Données : Gérez une collection users avec la structure suivante pour chaque document :

    json

    {
      "name": "Nom de l'utilisateur",
      "age": 25,
      "email": "exemple@domaine.com",
      "createdAt": "2023-01-01T00:00:00Z"
    }

    Générez au moins 100 documents utilisateurs avec des données aléatoires.

Étape 3: Manipulations via la CLI MongoDB

    Insertion des Données : Insérez les données générées dans votre collection users en utilisant la CLI MongoDB.

    Requêtes de Base : Exécutez au moins les opérations CRUD suivantes à travers la CLI MongoDB et documentez les commandes utilisées ainsi que les résultats :
        Création (Insertion)
        Lecture (Trouver tous les utilisateurs de plus de 30 ans)
        Mise à jour (Augmenter l'âge de tous les utilisateurs de 5 ans)
        Suppression (Supprimer un utilisateur spécifique)

Étape 4: Automatisation avec le Langage de Programmation de votre Choix

Après avoir effectué manuellement les opérations CRUD sur votre collection users en utilisant la CLI MongoDB, l'étape suivante consiste à automatiser ces opérations à l'aide du langage de programmation de votre choix.

    Développement du Script : Créez un script ou une application qui exécute les mêmes opérations CRUD que celles réalisées via la CLI MongoDB. Ce script devra :
        Insérer les données générées dans la collection users.
        Lire et afficher tous les utilisateurs de plus de 30 ans.
        Mettre à jour l'âge de tous les utilisateurs en ajoutant 5 ans.
        Supprimer un utilisateur spécifique.

    Librairies et Frameworks : Utilisez la librairie MongoDB officielle pour votre langage. Par exemple :
        Pour Node.js, utilisez le package mongodb.
        Pour Python, utilisez pymongo.
        Pour Java, utilisez le MongoDB Java Driver.

    Documentez votre Code : Assurez-vous que votre code est bien commenté pour expliquer la logique derrière chaque opération CRUD. Incluez également dans votre document Markdown (README.md) :
        Une section détaillant comment exécuter votre script ou application.
        Les différences rencontrées entre l'exécution des commandes via la CLI et l'automatisation via votre script.

Étape 5: Restitution

    Préparez un dépôt Git contenant :
        Le code source développé pour générer et manipuler les données.
        Un document Markdown (README.md) qui explique :
            Comment démarrer le Replica Set avec Docker.
            Comment générer et insérer les fausses données.
            Les commandes CLI utilisées pour les opérations CRUD et leurs résultats.
            Une section sur l'exécution de votre script, les différences observées entre les opérations CRUD en CLI et via le script.
            Toute difficulté rencontrée et comment vous l'avez surmontée.
        Le code source de votre script ou application réalisant les opérations CRUD 
