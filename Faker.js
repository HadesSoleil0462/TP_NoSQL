const fs = require('fs');
const faker = require('faker');

let users = [];

for (let i = 0; i < 100; i++) {
    let user = {
        "name": faker.name.findName(),
        "age": faker.datatype.number({min:18, max:90}), // Changed this line
        "email": faker.internet.email(),
        "createdAt": faker.date.past()
};
    users.push(user);
}

fs.writeFile('users.json', JSON.stringify(users, null, 4), (err) => {
    if (err) throw err;
    console.log('Fake data written into users.json file');
});