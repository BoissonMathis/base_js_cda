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
    let rdm_number = Math.round(Math.random() * (tab.length - 1) + 1)
    let new_array = []

    for(let i = 0; i < rdm_number; i++){
    let rdm_nbr = Math.round(Math.random() * (tab.length - 1) + 1);
    // console.log("nbr aléatoire : " + rdm_nbr)
    // console.log("élément a l'index du nombre aléatoire " + tab[rdm_nbr])
    // console.log("mon tab " + tab)
    // console.log("new array " + new_array)
    if(isNaN(tab[rdm_nbr])){

    }else{
        new_array.push(tab[rdm_nbr]);
        tab.splice(rdm_nbr, 1)
    }
    // console.log("mon tab " + tab)
    // console.log("new array " + new_array)
    // console.log("  ")
    }
    // console.log("mon tab " + tab)
    // console.log("mon nouveau tableau : " + new_array)
    return new_array
}

for(var i = 0; i < 10; i++){
    var username = faker.person.firstName()
    var rdm_status = status[Math.round(Math.random() * status.length)];
    let supporter = rdmNumberArray()
    let follow = rdmNumberArray()
    // console.log(supporter)
    console.log(follow)
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

// id: 1,
//         username: 'ribéry',
//         img: ribery,
//         bio: 'La roue tourne va tourner',
//         status: ['joueur'],
//         categorie: ['senior profésionelle'],
//         supporter: [

//         ],
//         follow: [

//         ]