const { faker } = require('@faker-js/faker');
const _ = require("lodash")

var number_elements = 100;
var price_min = 5;
var price_max = 1300;
var tva_min = 5;
var tva_max = 20;
var quantity_min = 1;
var quantity_max = 100;
var tva_interval = 10;
var articles = []

for (var i = 0; i < number_elements; i++) {
    articles.push({
        name: faker.commerce.product(),
        category: faker.commerce.department(),
        price_unit_ttc: Number(_.random(price_min, price_max, true).toFixed(2)),
        tva: _.random(tva_min, tva_max),
        quantity: _.random(quantity_min, quantity_max),
        date: faker.date.birthdate({ min: 2020, max: 2023, mode: 'year' }),
        siteweb: faker.internet.url({ protocol: 'http', appendSlash: false })
    })
}

function arrondir(number) {
    return Math.round((number) * 100) / 100;
}

// console.log(articles);

// Creer une nouvelle propriété "price_unit_ht", "price_total_ht" et "price_total_ttc"
articles = articles.map(function (e) {
    var price_ht = arrondir(e.price_unit_ttc * (1 - (e.tva / 100)))
    return {
        ...e,
        price_unit_ht: price_ht,
        price_total_ttc: arrondir(e.price_unit_ttc * e.quantity),
        price_total_ht: arrondir(price_ht*e.quantity)
    }
})

//console.log(articles)

var more_tva_interval = articles.filter(function(e) {
    return e.tva > 7 && e.tva < 13
})

var for_tva_more_interval = []

for (var i = 0; i < articles.length; i++) {
    if (articles[i].tva > 7 && articles[i].tva < 13) {
        for_tva_more_interval.push(articles[i])
    }
}

// console.log(for_tva_more_interval)

let pricTtvPlus10000 = articles.filter((element) => element.price_total_ttc > 10000)
// console.log(pricTtvPlus10000.length, pricTtvPlus10000)

let sup50 = articles.filter((element) => element.quantity > 50)
// console.log(sup50)

articles = articles.map(function (e) {
    return {
        id: articles.indexOf(e),
        ...e
    }
})
// console.log(articles)

var users = [];

let number_users = 25;

for (var i = 0; i < number_users; i++) {

    let nbrRandom = Math.round(Math.random());
    let gender = ''
    nbrRandom == 0 ? gender = "male" : gender = "female"
    let firstName = faker.person.firstName(gender);
    let lastName = faker.person.lastName(gender)

    users.push({
        id: i,
        username: faker.internet.userName({ firstName: firstName, lastName: lastName}),
        firstName: firstName,
        lastName: lastName,
        email: faker.internet.exampleEmail({ firstName: firstName, lastName: lastName })
    })
}
// console.log(users)

let minArticle = 0;
let maxArticle = 10;
let articlesToAttrib = [...articles]

users = users.map(function (e) {
    let userArticleAmount = Math.floor(Math.random() * maxArticle + 1);
    let userArticles = [];

    if (articlesToAttrib.length != 0) {
        for(let i = 0; i < userArticleAmount; i++){

            if (articlesToAttrib.length === 0) {
                return {...e, articles: []};
            }
    
            let myIndex = Math.round(Math.random() * (articlesToAttrib.length - 1 - 0) + 0);
            userArticles.push(articlesToAttrib[myIndex].id);
            _.pullAt(articlesToAttrib, myIndex)
        }
    }
    
    return {
        ...e,
        articles: userArticles
    }
})

// console.log(users)

users = users.map(function (user) {

    if(user.articles.length > 0){
        // console.log(`${user.firstName} ${user.lastName} a ${user.articles.length} articles dans son panier`);
    }

    let totalPrice = 0;

    user.articles.forEach((element) => {
        // console.log(element);
        let myArticle = _.find(articles, e => e.id === element);
        // console.log(myArticle.price_unit_ttc, '€');
        return totalPrice = totalPrice + myArticle.price_unit_ttc;
    })

    // console.log(`${totalPrice} €`)
    // console.log({...user, depenseTotal: totalPrice})
    return { ...user, totalDepense: totalPrice}
})

console.log(users)