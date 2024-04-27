const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017?replicaSet=myReplicaSet";
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
        await client.connect();

        const db = client.db('myDatabase');

        await db.collection('users').insertOne({ "name": "Tom Fregonese", "email": "tom@fregonese.com", "age": 20, "createdAt": "2024-04-20T00:00:00" }) //Create operation 
        const usersOver30 = await db.collection('users').find({ age: { $gt: 30 } }).toArray(); //Read operation
        console.log(usersOver30);
        await db.collection('users').updateMany({}, { $inc: { age: 5 } }) //Update operation
        const meAfterUpdatingAge = await db.collection('users').find({ name: "Tom Fregonese" }).toArray(); //Read operation
        console.log(meAfterUpdatingAge);
        await db.collection('users').deleteOne({ name: "Tom Fregonese" }) //Delete operation
        const meAfterDelete = await db.collection('users').find({ name: "Tom Fregonese" }).toArray(); //Read operation
        console.log(meAfterDelete);

    } finally {
        await client.close();
    }
}

main().catch(console.error);