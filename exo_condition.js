// Exercice 2 : Creer un tableau d'object de 25 elements avec comme propriete "firstName" "lastName" "gender" "age" : compris entre 18 et 65 ans, tous les proprietes firstName LastName et gender (male/female) doivent etre generer avec la library Faker.
// En suite il faut filter toutes les personnes de plus 45 ans et les afficher. soit :
// Plus de 45 ans:
// Edouard BERNIER - Homme - 65ans
// Jean Dupont - Homme - 46ans
// ...
// Il faut ensuite crée un tableau avec tous les hommes et affichier de la meme facon que pour plus de 45ans
// et pareil avec un tableau pour les femmes

const { faker } = require('@faker-js/faker/locale/fr');
var _ = require('lodash');

let peoples = []

function newPeople(repetition) {
    for(let i = 0; i < repetition; i++){
    let nbrRandom = Math.round(Math.random());
    let gender = ''
    nbrRandom == 0 ? gender = "male" : gender = "female"

    let newPeople = {
        firstName: faker.person.firstName(gender),
        lastName: faker.person.lastName(gender),
        gender: gender,
        age: Math.round(Math.random()  * (65 - 18) + 18)
    }
    peoples.push(newPeople)
    }
}

newPeople(25)

function displayPeopleByGender(array) {
    const plus45 = peoples.filter((people) => people.age > 45);
    const homme = peoples.filter((people) => people.gender == "male");
    const femme = peoples.filter((people) => people.gender == "female");

    // console.log("Personnes de plus de 45 ans :\n")
    // consoleLogAray(plus45)

    // console.log("\n Homme :\n")
    // consoleLogAray(homme)

    // console.log("\n Femme :\n")
    // consoleLogAray(femme)
}

displayPeopleByGender(peoples)

// function consoleLogAray(array) {
//     array.forEach(element => {
//         console.log(`${element.lastName} ${element.firstName} - ${element.gender} - ${element.age} ans`)
//     })
// }

const peoplesWithId = _.map(peoples, (element, index) => {
    return { ...element, _id: index };
  });

let nbr = 5
let pileArray = _.chunk(peoplesWithId, nbr);

for (let i = 1; i < pileArray.length; i++) {
    for (let j = 0; j < pileArray[i].length; j++) {
        const pileBefore = pileArray[i - 1];
        pileArray[i][j].parent = pileBefore[Math.floor(Math.random() * pileBefore.length)]._id;;
    }
}

pileArray = _.flatten(pileArray);

// console.log(pileArray);

var people_transformer = [];

function transformPeople(person, tab) {
    let transformedPerson = { ...person }
    let children = []

    for (let i = 0; i < tab.length; i++) {
        if (tab[i].parent === person._id) {
            children.push(tab[i])
        }
    }
    if (children.length > 0) {
        transformedPerson.children = []
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            let transformedChild = transformPeople(child, tab);
            transformedPerson.children.push(transformedChild);
        }
        transformedPerson.nb_children = transformedPerson.children.length;
    }

    let ancestors = [];
    let parentId = transformedPerson.parent;
    while (parentId !== undefined) {
        let parent = tab.find(p => p._id === parentId);
        ancestors.push(`${parent.firstName} ${parent.lastName}`);
        parentId = parent.parent;
    }
    transformedPerson.origine = ancestors.join(' - ');

    return transformedPerson;
}

for (let i = 0; i < pileArray.length; i++) {
    let person = pileArray[i]
    if (!person.parent) {
        let transformedPerson = transformPeople(person, pileArray);
        people_transformer.push(transformedPerson);
    }
}

function test(tab){
    tab.forEach(person => {
        console.log(`firstName: ${person.firstName} / lastName: ${person.lastName} / Origine: ${person.origine}`);
        if(person.children && person.children.length > 0){
            test(person.children)
        }
    });
}

test(people_transformer)


// pour la pile[i] 
// pour chaque element, créer un attribut parent avec l'id d'un élément de la pile suivante choisit aléatoirement
// remerge les piles
// revoir le travail du matin pour faire le tableau finale
// ajouter la propriété children avec le nombre d'enfants dedans
// afficher les élément comme demander