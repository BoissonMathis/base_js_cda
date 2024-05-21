var people = [{           // Recursivité en Javascript "parent-enfant"
    firstName: "Edouard",
    lastName: "Bernier",
    children: [{
        firstName: "Jean",
        lastName: "Bernier",
        children: [{
            firstName: "Junior",
            lastName: "Bernier",
            children: [{
                firstName: "Jordan",
                lastName: "Bernier"
            },
            {
                firstName: "Luc",
                lastName: "Bernier"
            }]
        }]
    },
    {
        firstName: "Sacha",
        lastName: "Bernier",
    },
    {
        firstName: "Laurent",
        lastName: "Bernier",
    },
    {
        firstName: "Raphael",
        lastName: "Bernier",
    }]
},
{
    firstName: "Jean",
    lastName: "Luc",
    children: [{
        firstName: "Richard",
        lastName: "Luc",
        children: [{
            firstName: "Roméo",
            lastName: "Luc"
        }]
    }]
}]

const prompt = require('prompt');
const _ = require('lodash');

prompt.start();

// retourner un tableau contenant toute les personnes ayant le nom de famille annoncé
let same_lastname = []

function findPeopleLoop(lastName, tab, path) {
    for (let i = 0; i < tab.length; i++){
        let element = tab[i]
        if(element.lastName == lastName) {
            let person = {
                firstName: element.firstName,
                lastName: element.lastName,
                parent: path
            }
            same_lastname.push(person)
        }
        if(element.children) {
            let value = findPeopleLoop(lastName, element.children, path + "/ " + element.firstName + " " + element.lastName )
            same_lastname = [...same_lastname, ...value]
            // if (value){
                
            // }else{ return same_lastname}
        }
    }
    return same_lastname
}

// console.log(findPeopleLoop("Bernier", people, ""))

function findPeople(lastName) {
    return new Promise((resolve, reject) => {
        var result = findPeopleLoop(lastName, people, '')
        if (result) {
            resolve(result)
        }
        else {
            reject('Not found')
        }
    })
}

prompt.get(['lastName'], function (err, result) {
    findPeople(result.lastName).then((value) => {
        value.forEach(element => {
            console.log("Personne trouvée : "+ element.firstName, element.lastName, element.parent)
        });
        
    }).catch((err) => {
        console.log("Aucune personne trouvée :", err)
    })
})