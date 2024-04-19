# Atelier-MongoDB-en-Mode-Replica-Set


### Prérequis

- Docker installé 
- npm installé 
- Accès à internet


## - Étape 1 : Configuration de MongoDB en Mode Replica Set

```bash 
docker compose up -d
```

```bash 
docker exec -it mongo1 mongosh --eval "rs.initiate({
 _id: \"myReplicaSet\",
 members: [
   {_id: 0, host: \"mongo1\"},
   {_id: 1, host: \"mongo2\"},
   {_id: 2, host: \"mongo3\"}
 ]
})"
```


## - Étape 2 : Génération de Fausses Données 

```bash 
npm run genFakeData
```


## - Étape 3: Manipulations via la CLI MongoDB

```bash 
docker exec -it mongo1 mongosh
```
