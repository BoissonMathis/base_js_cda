
var data = [
    {
        type: "accompagnement",
        name: "pâtes",
        ingredients: ["pâtes", "eau"],
        duration: 6,
        ustensile: ['casserole'],
    },
    {
        type: "accompagnement",
        name: "riz",
        ingredients: ["riz", "eau"],
        duration: 10,
        ustensile: ['casserole'],
    },
    {
        type: "accompagnement",
        name: "légumes vapeur",
        ingredients: ["carotte", "aricot", "patate", "eau"],
        duration: 12,
        ustensile: ['cuiseur vapeur'],
    },
    {
        type: "accompagnement",
        name: "purée",
        ingredients: ["pattate", "lait"],
        duration: 10,
        ustensile: ['presse purée', 'casserole'],
    },
    {
        type: "plat",
        name: "boeuf",
        ingredients: ["viande de boeuf", "huile"],
        duration: 20,
        ustensile: ['poêle', "casserole"],
    },
    {
        type: "plat",
        name: "lapin",
        ingredients: ["viande de lapin", "huile"],
        duration: 15,
        ustensile: ['poêle', "casserole"],
    },
    {
        type: "plat",
        name: "mouton",
        ingredients: ["viande de mouton", "huile"],
        duration: 18,
        ustensile: ['poêle', "casserole"],
    },
    {
        type: "plat",
        name: "poulet",
        ingredients: ["viande de poulet", "huile"],
        duration: 12,
        ustensile: ['poêle', "casserole"],
    },
    {
        type: "assaisonnement",
        name: "curry",
        ingredients: ["epice curry"],
        duration: 3,
        ustensile: [],
    },
    {
        type: "assaisonnement",
        name: "poivre",
        ingredients: ["epice poivre"],
        duration: 2,
        ustensile: [],
    },
    {
        type: "assaisonnement",
        name: "herbes de provence",
        ingredients: ["epice herbes de provence"],
        duration: 2,
        ustensile: [],
    },
]

var type_element = {
    plat: [],
    accompagnement: [],
    assaisonnement: []
}

var recettes = []

for (i = 0; i< data.length; i++) {
    if (data[i].type === "plat")
        type_element.plat.push(data[i])
    else if (data[i].type === "accompagnement")
        type_element.accompagnement.push(data[i])
    else (data[i].type === "assaisonnement")
        type_element.assaisonnement.push(data[i])
}

function numberRandom(max, min){
    return Math.round(Math.random() * (max - min) + min)

}

var txt = ""

for (i = 0; i < 10; i++) {
    
    var plat = type_element.plat[numberRandom(type_element.plat.length - 1, 0)]
    var accompagnement = type_element.accompagnement[numberRandom(type_element.accompagnement.length - 1, 0)]
    var assaisonnement = type_element.assaisonnement[numberRandom(type_element.assaisonnement.length - 1, 0)]
    var recette = `${plat.name} ${accompagnement.name} ${assaisonnement.name}`
    var object_recette = {
        name: recette,
        ingredients: [...plat.ingredients, ...accompagnement.ingredients, ...assaisonnement.ingredients],
        duration: plat.duration + accompagnement.duration + assaisonnement.duration,
        ustensile: [...plat.ustensile, ...accompagnement.ustensile, ...assaisonnement.ustensile]
    }
    recettes.push(object_recette)
    console.log(recettes[i])
    txt += `Nom: ${object_recette.name} \n Durée: ${object_recette.duration} \n Ingrédients: ${object_recette.ingredients.join(', ')} \n Ustensile: ${object_recette.ustensile.join(', ')} \n \n`
}

const fs = require('fs');

var folder_exist = fs.existsSync("recettes")
if (!folder_exist)
    fs.mkdirSync("recettes")
fs.appendFileSync('recettes/recette-24042024.txt', txt);

// for(i=0; i < 10; i++) {
//     let test = Math.random() * 10;
//     console.log(test);
//     console.log(Math.round(test))
//     console.log(Math.floor(test))
// }