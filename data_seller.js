const { faker } = require('@faker-js/faker');
const _ = require("lodash")

var users = [];

var number_elements = 10;

for (var i = 0; i < number_elements; i++) {

    let nbrRandom = Math.round(Math.random());
    let gender = ''
    nbrRandom == 0 ? gender = "male" : gender = "female"
    let firstName = faker.person.firstName(gender);
    let lastName = faker.person.lastName(gender)

    users.push({
        id: i,
        firstName: firstName,
        lastName: lastName,
        username: faker.internet.userName({ firstName: firstName, lastName: lastName}),
        email: faker.internet.exampleEmail({ firstName: firstName, lastName: lastName }),
        job: "Director"
    })
}

// console.log(users);

let company = [];

let sum_account_max = 10000;
let sum_account_min = 1;

let director = [...users];

for (var i = 0; i < number_elements; i++) {

    let nbrRandom = Math.round(Math.random() * (director.length - 1 - 0) + 0);

    company.push({
        id: i+10,
        name: faker.company.name(),
        user_id: director[nbrRandom].id,
        sum_account: Math.round(Math.random() * (sum_account_max - sum_account_min) + sum_account_min)
    })

    
    director.splice(nbrRandom, 1)
}

// console.log(company)

let articles = [];


let price_sell_max = 250;
let price_sell_min = 1;
let price_buy_pourcent_max = 10;
let price_buy_pourcent_min = 50;
let stock_max = 150;
let stock_min = 1;

company.forEach((company) => {
    let number_articles = Math.round(Math.random() * (150 - 3) + 3);

    for (var i = 0; i < number_articles; i++) {

        let pourcentRandom = Math.round(Math.random() * (price_buy_pourcent_max - price_buy_pourcent_min) + price_buy_pourcent_min);
        let price_sell = Math.round(Math.random() * (price_sell_max - price_sell_min) + price_sell_min);
        let price_buy = price_sell - (price_sell*pourcentRandom) / 100;;
    
        articles.push({
            name: faker.commerce.productName(),
            price_sell: price_sell,
            price_buy: arrondir(price_buy),
            pourcent_benefice: pourcentRandom,
            company_id: company.id,
            stock: Math.round(Math.random() * (stock_max - stock_min) + stock_min)
        })
    }
})

// console.log(articles)

function calculBenefPerCompany(){
    company.forEach((company) => {
        // let company_articles = articles.filter((article) => article.company_id === company.id);
        let globalBenef = 0;
        // company_articles.forEach((article) => {
        filterArticlesByCompany(company).forEach((article) => {
            return globalBenef = globalBenef + ((article.price_sell - article.price_buy) * article.stock)
        })
        company.global_benef = arrondir(globalBenef);
    })
}

calculBenefPerCompany()

function filterArticlesByCompany(company){
    let company_articles = articles.filter((article) => article.company_id === company.id);

    return company_articles
}

// console.log(company)

function arrondir(number) {
    return Math.round((number) * 100) / 100;
}

let displayAllStat = [];

function buildDisplayAllStats(){

    users.forEach((user) => {
        let user_company = _.find(company, e => e.user_id === user.id);
        let user_company_articles = filterArticlesByCompany(user_company);

        displayAllStat.push({
            ...user,
            company: {...user_company, articles: user_company_articles}
        })
    })
}

buildDisplayAllStats()

// console.log(displayAllStat)
// console.log(JSON.stringify(displayAllStat, null, 4))

function affichagePropre(eToDisplay){
    let mep = "\n        ";
    eToDisplay.forEach((element) => {
        console.log(`${element.company.name} est une société dirigé par ${element.firstName} ${element.lastName}. Cette société a réalisé un bénéfice global de ${element.company.global_benef}€ en vendant les articles suivant :\n`)
        element.company.articles.forEach((article) => {
            console.log(`    - ${article.name} :${mep}prix d'achat : ${article.price_buy} €${mep}prix de vente : ${article.price_sell} €${mep}bénéfice de ${article.pourcent_benefice}%${mep}en stock : ${article.stock}\n`)
        })
        console.log("")
    })
}

affichagePropre(displayAllStat)