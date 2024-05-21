const { faker } = require('@faker-js/faker/locale/fr');
var _ = require('lodash');

let article = [];

function newArticle(repetition, maxPrice, minPrice, maxStock, minStock) {
    for(let i = 0; i < repetition; i++){
    
    let name = faker.commerce.product();
    let description = faker.commerce.productDescription();
    let department = faker.commerce.department();
    
    let prix = Math.random()  * (maxPrice - minPrice) + minPrice;
    prix = Math.round(prix * 100) / 100
    let stock = Math.round(Math.random()  * (maxStock - minStock) + minStock);

    let newArticle = {
        name: name,
        description: description,
        department: department,
        prix: prix,
        stock: stock
    }
    article.push(newArticle)
    }
}

newArticle(30, 6, 5, 10, 0);

let categories = [];

article.forEach((element => {
    let test = element.department
    if (!_.includes(categories, test)) {
        categories.push(test.toString())
    }
}))

function filteredArray (tab, stockIntervall, stockAlert) {

    const avLess55 = tab.filter((element) => element.stock > 0 && element.prix <= stockIntervall);
    const avMore55 = tab.filter((element) => element.stock > 0 && element.prix >= stockIntervall);
    const oos = tab.filter((element) => element.stock == 0);
    const less3av = tab.filter((element) => element.stock <= stockAlert);

    // displayFilteredArray(avLess55, "Dispo a moins de 5,5€ :");
    // displayFilteredArray(avMore55, "Dispo a plus de 5,5€:");
    // displayFilteredArray(oos, "Indisponible:");
    // displayFilteredArray(less3av, "Disponible en stock limité:");

    const avLess55ByCat = filterByCategorie(avLess55)
    const avMore55ByCat = filterByCategorie(avMore55)
    const oosByCat = filterByCategorie(oos)
    const less3avByCat = filterByCategorie(less3av)

    displayFilterByCategorie(avLess55ByCat, "\nDispo a moins de 5,5€ :\n")
    displayFilterByCategorie(avMore55ByCat, "\nDispo a plus de 5,5€:\n")
    displayFilterByCategorie(oosByCat, "\nIndisponible:\n")
    displayFilterByCategorie(less3avByCat, "\nDisponible en stock limité:\n")
}

filteredArray(article, 5.5, 3)

// function displayFilteredArray(tab, filterCond) {
//     console.log(filterCond, tab.length)
//     tab.forEach(element => {
//         console.log(`${element.name} - ${element.prix}€ - ${element.stock} en stock`)
//     })
//     console.log(' ')
// }

function filterByCategorie(tab) {
    var myTab = []
    categories.forEach((element => {
        var tabFiltered = tab.filter((e) => e.department === element)
        if(tabFiltered.length > 0){
            var cat = {categorie: element, article: {...tabFiltered}}
            myTab.push(cat)
        }
    }))
    return myTab
}

function displayFilterByCategorie(tab, filterCond) {
    console.log(`${filterCond}`)
    tab.forEach((element => {
        var range = Object.keys(element.article).length
        console.log(`${element.categorie} - ${range} article(s):`)
        for(let i = 0; i < range; i++){
            console.log(`     ${element.article[i].name} - ${element.article[i].prix}€ - ${element.article[i].stock} en stock`)
        }
    }))
}