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

// console.log(peoples)

var users = []
var status = ["Joueur profesionelle", "Joueur amateur", "Club", "Éducateur", "Coach"]


function rdmNumberArray(){
    var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let rdm_number = Math.round(Math.random() * (tab.length - 1) + 0)
    let new_array = []

    for(let i = 0; i < rdm_number; i++){
    let rdm_nbr = Math.round(Math.random() * (tab.length - 1) + 0);
    new_array.push(tab[rdm_nbr]);
    tab.splice(rdm_nbr, 1)
    }
    return new_array
}

for(var i = 0; i < 10; i++){
    var username = faker.person.firstName()
    var rdm_status = status[Math.round(Math.random() * (status.length - 1))];
    let supporter = rdmNumberArray()
    let follow = rdmNumberArray()

    users.push({
        id: i,
        username: username,
        email: faker.internet.email({
            firstName: username, lastName: faker.person.lastName()
        }),
        img: ["src1", "src2"],
        intro: "",
        status: rdm_status,
        supporter: supporter,
        follow: follow
    })
}

console.log(users)
