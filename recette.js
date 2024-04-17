// creer un tableau d'object de recette de 10 recettes differentes

// const { assign } = require("lodash")

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

let recettes = []

for(i = 0; i < 10; i++){

    let assaisonnement = data.filter(element => element.type === "assaisonnement");
    let rdmAssaisonnement = assaisonnement[Math.round(Math.random() * (assaisonnement.length - 1))]

    let plat = data.filter(element => element.type === "plat");
    let rdmPlat = plat[Math.round(Math.random() * (plat.length - 1))]

    let accompagnement = data.filter(element => element.type === "accompagnement");
    let rdmAccompagnement = accompagnement[Math.round(Math.random() * (accompagnement.length - 1))]
    
    myIngredients = [...rdmPlat.ingredients, ...rdmAssaisonnement.ingredients, ...rdmAccompagnement.ingredients]
    myUstensile = [...rdmPlat.ustensile, ...rdmAssaisonnement.ustensile, ...rdmAccompagnement.ustensile]
    
    myUniqueIngredients = myIngredients.filter((element, index, array) => array.indexOf(element) === index)
    myUniqueUstensile = myUstensile.filter((element, index, array) => array.indexOf(element) === index)

    recettes.push(
        {
            name: `${rdmPlat.name} ${rdmAccompagnement.name} ${rdmAssaisonnement.name}`,
            ingredients: myUniqueIngredients,
            duration: rdmPlat.duration + rdmAccompagnement.duration + rdmAssaisonnement.duration,
            ustensile: myUniqueUstensile
        }
    )

    console.log(recettes[i])
}

const jsonData = JSON.stringify(recettes);

const fs = require('fs'); //import de file system
const filePath = './recette.json'; // root vers le fichier JSON

fs.writeFile(filePath, jsonData, (err) => { //writeFile permet d'écrire dans un fichier
    if (err) { //on catch l'erreur si il y en a une et on return
        console.error('Ca marche pas ' + err);
        return;
    }
    console.log('Le fichier a été enregistré');
});