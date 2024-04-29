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

// Creer un prompt qui prendre le "firstName" et "lastName"
// Creer une fonction pour chercher dans
// tous les elements du tableau y compris children puis retourner le resultat dans 
//une fonction promise avec resolve si personne trouvé et reject si aucune personne trouvé

const prompt = require('prompt');
const _ = require('lodash');

prompt.start();

// var schema = {
//     properties: {
//         firstname: {
//             description: "Le prénom de la personne recherché : ",
//             type: "string"
//         },
//         lastname: {
//             description: "Le nom de la personne recherché : ",
//             type: "string"
//         }
//     }
// }

// prompt.get(schema, function (err, result) {
  
//     console.log('  le prénom: ' + result['firstname']);
//     console.log('  le nom: ' + result['lastname']);

//     function findPeople(array) {
//         let person = null;
//         for (let i = 0; i < array.length; i++) {
//             if (array[i].firstName === result['firstname'] && array[i].lastName === result['lastname']) {
//                 person = array[i];
//                 return person
//             } else if (array[i].children && array[i].children.length > 0) {
//                 let personFound = findPeople(array[i].children);
//                 if (personFound) {
//                     person = personFound;
//                     return person
//                 }
//             }
//         }
//     }

//     console.log(findPeople(people))

//     let target = findPeople(people)
    
//     waiting(target).then((value) => {
//         console.log("Promise reussi :", value)
//     }).catch((err) => {
//         console.log("Promise échoué :", err)
//     })
// });

// function waiting(target) {
//     return new Promise((ressolve, reject) => {
//         if (target != null){
//             ressolve({succes: true})
//             console.log("personne trouvé")
//         }
//         else
//             reject({succes: false})
//             console.log("personne introuvable")
//     })
// }


//CORRECTION

// function findPeopleLoop(firstName, lastName, tab, path) {
//     for (let i = 0; i < tab.length; i++){
//         let element = tab[i]
//         if(element.firstName == firstName && element.lastName == lastName) {
//             return {...element, parent : path + element.firstName + " " + element.lastName}
//         }
//         if(element.children) {
//             let value = findPeopleLoop(firstName, lastName, element.children, path + element.firstName + " " + element.lastName + "/")
//             if (value)
//                 return value
//         }
//     }
//     return null
// }

// function findPeople(firstName, lastName) {
//     return new Promise((resolve, reject) => {
//         var result = findPeopleLoop(firstName, lastName, people, '')
//         if (result) {
//             resolve(result)
//         }
//         else {
//             reject('Not found')
//         }
//     })
// }

// prompt.get(['firstName', 'lastName'], function (err, result) {
//     findPeople(result.firstName, result.lastName).then((value) => {
//         console.log("Personne trouvée :", value.firstName, value.lastName, " / Parent :", value.parent)
//     }).catch((err) => {
//         console.log("Aucune personne trouvée :", err)
//     })
// })

function findPeopleLoop(firstName, lastName, tab, path) {
    for (let i = 0; i < tab.length; i++){
        let element = tab[i]
        if(element.firstName == firstName && element.lastName == lastName) {
            return {...element, parent : path + element.firstName + " " + element.lastName}
        }
        if(element.children) {
            let value = findPeopleLoop(firstName, lastName, element.children, path + element.firstName + " " + element.lastName + "/")
            if (value)
                return value
        }
    }
    return null
}

function findPeople(firstName, lastName) {
    return new Promise((resolve, reject) => {
        var result = findPeopleLoop(firstName, lastName, people, '')
        if (result) {
            resolve(result)
        }
        else {
            reject('Not found')
        }
    })
}

prompt.get(['firstName', 'lastName'], function (err, result) {
    findPeople(result.firstName, result.lastName).then((value) => {
        console.log("Personne trouvée :", value.firstName, value.lastName, " / Parent :", value.parent)
    }).catch((err) => {
        console.log("Aucune personne trouvée :", err)
    })
})