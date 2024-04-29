const { faker } = require('@faker-js/faker/locale/fr');
const prompt = require('prompt');

prompt.start();

var schema = {
    properties: {
        nb_element: {
            description: "Combien d'éléments à créer ?",
            type: "number"
        },
        type:{
            description: "Doit-on générer des hommes ?",
            type: "boolean"
        }
    }
}

prompt.get(schema,function (err, result) {
    console.log(result['nb_element']);
    console.log(result['type']);
    var peoples = []
    for (var i = 0; i < result['nb_element']; i++) {
        var type = 'female'
        if(result['type'])
            type = 'male'
        var firstName = faker.person.firstName(type)
        var lastName = faker.person.lastName(type)
        peoples.push({
            firstName,
            lastName,
            email: faker.internet.email({ firstName: firstName, lastName: lastName })
        })
    }
    console.log(peoples)
})

// combien d'utilisateur a créer ?
// combien d'utilistauer male ?
// combien d'utilisateur female ?

// prompt.get(['male', 'female'], function (err, result) {
//     var users = []
//     for(var y = 0; y < Number(result.male); y++){
//         var male = faker.person.firstName('male')
//         users.push({
//             firstName: male,
//         })
//     }
//     for(var y = 0; y < Number(result.female); y++){
//         var female = faker.person.firstName('female')
//         users.push({
//             firstName: female,
//         })
//     }
    
//     console.log(users)
// });
