// creer un tableau d'object de recette de 10 recettes differentes

var _ = require('lodash');
const prettier = require('prettier');

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

let assaisonnement = data.filter(element => element.type === "assaisonnement");
let plat = data.filter(element => element.type === "plat");
let accompagnement = data.filter(element => element.type === "accompagnement");

for(i = 0; i < assaisonnement.length * plat.length * accompagnement.length; i++){

    let rdmAssaisonnement = assaisonnement[Math.round(Math.random() * (assaisonnement.length - 1))]

    let rdmPlat = plat[Math.round(Math.random() * (plat.length - 1))]

    let rdmAccompagnement = accompagnement[Math.round(Math.random() * (accompagnement.length - 1))]
    
    myIngredients = [...rdmPlat.ingredients, ...rdmAssaisonnement.ingredients, ...rdmAccompagnement.ingredients]
    myUstensile = [...rdmPlat.ustensile, ...rdmAssaisonnement.ustensile, ...rdmAccompagnement.ustensile]
    
    myUniqueIngredients = _.uniq(myIngredients)
    myUniqueUstensile = _.uniq(myUstensile)

    let newRecette = {
        name: `${rdmPlat.name} ${rdmAccompagnement.name} ${rdmAssaisonnement.name}`,
        ingredients: myUniqueIngredients,
        duration: rdmPlat.duration + rdmAccompagnement.duration + rdmAssaisonnement.duration,
        ustensile: myUniqueUstensile
    }

    let verification = recettes.filter(element => element.name === newRecette.name)

    if(verification.length > 0){
        i=i-1
    }else{recettes.push(newRecette)}
    
    // console.log(recettes[i])
}

// const jsonData = JSON.stringify(recettes);

const fs = require('fs'); //import de file system
const filePath = './recette.json'; // root vers le fichier JSON

//wrieFile prend trois arguments : le chemin du fichier cible, les data à écrire et une fonction de rappel 
// fs.writeFile(filePath, jsonData, (err) => { //writeFile permet d'écrire dans un fichier
//     if (err) { //on catch l'erreur si il y en a une et on return
//         console.error('Ca marche pas ' + err);
//         return;
//     }
//     console.log('Le fichier a été enregistré');
// });

async function formatData(data) {
    const jsonData = await prettier.format(JSON.stringify(data), { parser: 'json' });
    
    fs.writeFile(filePath, jsonData, (err) => {
        if (err) {
            console.error('Ca marche pas ' + err);
            return;
        }
        console.log('Le fichier a été enregistré');
    });
}

formatData(recettes)

async function rightRecettes (data) {
    
    fs.appendFile("recettes.txt", JSON.stringify(data), (err) => {
        if (err) {
            console.error('Ca marche pas ' + err);
            return;
        }
        console.log('Le fichier a été enregistré');
    });
}

rightRecettes(recettes)