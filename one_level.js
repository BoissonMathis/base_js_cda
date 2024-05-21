
var peoples = [
    {
        _id: 1001,
        username: "jeandupont",
        firstName: "Jean",
        lastName: "Dupont"
    },
    {
        _id: 1002,
        username: "Louisbrocante",
        firstName: "Louis",
        lastName: "Brocante",
        parent: 1001
    },
    {
        _id: 1003,
        username: "julienrouget",
        firstName: "Julien",
        lastName: "Rouget",
        parent: 1002
    },
    // {
    //     _id: 1001,
    //     username: "jeandupont",
    //     firstName: "Jean",
    //     lastName: "Duppont"
    // },
    // {
    //     _id: 1001,
    //     username: "jeandupont",
    //     firstName: "Jean",
    //     lastName: "Duppont"
    // },
]

// rendre un tableau avec les enfants dans les parents
const _ = require('lodash');

// var people_transformer = []

// function transformPeople(tab){
//     let my_tab = [...tab]
//     let family ={}
//     for (let i = 0; i < my_tab.length; i++){
        
//         let element = tab[i]
//         let niveau = 0
//         function findParent(obj, family){
//             if(obj.parent){
//                 console.log("mon tableau :", my_tab)
//                 let pere = _.find(peoples, { _id: obj.parent });
//                 let fils = {...obj}
//                 fils.parent = {...pere}
//                 _.remove(my_tab, _.matchesProperty('_id', obj._id));
//                 _.remove(my_tab, _.matchesProperty('_id', pere._id));
//                 console.log("mon tableau :", my_tab)
//                 family = {...fils}
//                 console.log("La famille que je traite :", family)

//                 return family
//             }
//             else {
                
//                 return
//             }
//         }
//         console.log("test :", findParent(element, family))
//     }
    
// }
// transformPeople(peoples)
// console.log("Person :", transformPeople(peoples))
// console.log("new array :", people_transformer)

// dans une boucle
// creer une var du niveau ou je suis
// tester si le premier élément a un parent
// si il a un parent : element.parent = parent
// supprimer element du tableau
// var niveau ++

//correction 

// var peopleObj = {}

// function findParent(id) {
//     var val = peopleObj[id]
//     delete peopleObj[id]
//     if (val.parent && !isNaN(val.parent)) {
//         console.log(val)
//         val.parent = findParent(val.parent)
//     }
//     return val
// }

// function transformPeople(people) {
//     var tab = []

//     for (var i = 0; i < people.length; i++) {
//         var element = people[i]
//     }

//     for () {
        
//     }

//     tab = tab.filter
// }