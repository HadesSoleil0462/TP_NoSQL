# Atelier-MongoDB-en-Mode-Replica-Set


### Prérequis

- Docker et docker-compose installés 
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
docker cp users.json mongo1:/users.json
docker exec -it mongo1 mongoimport --db usersDB --collection users --file /users.json --jsonArray # Insert operation
docker exec -it mongo1 mongosh
```

```bash 
use usersDB
db.users.insertOne({ "name": "Tom Fregonese", "email": "tom@fregonese.com", "age": 20, "createdAt": "2024-04-20T00:00:00" }) //Create operation 
db.users.find({ age: { $gt: 30 } }).pretty() //Read operation
db.users.updateMany({}, { $inc: { age: 5 } }) //Update operation
db.users.deleteOne({ name: "Tom Fregonese" }) //Delete operation
```



![Image Description](./ressources/Screenshot_1.png)

![Image Description](./ressources/Screenshot_2.png)

![Image Description](./ressources/Screenshot_3.png)
