const { faker } = require('@faker-js/faker/locale/fr');

var peoples = [
    {
        firstName: "Edouard",
        lastName: "BERNIER"
    }
]

for(var i = 0; i < 25; i++){
    var firstName = faker.person.firstName('male')
    var lastName = faker.person.lastName('male')
    peoples.push({
        firstName: firstName,
        lastName: lastName,
        email: faker.internet.email({
            firstName: firstName, lastName: lastName
        })
    })
}

console.log(peoples)