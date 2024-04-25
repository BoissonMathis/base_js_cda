const _ = require('lodash');
var tab_element = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K'];

var type = ["CA", "C", "P", "T"];

var pile_card = [];

for(var i = 0; i < tab_element.length; i++) {
    for(var j = 0; j < type.length; j++) {
        pile_card.push(tab_element[i] + "-" + type[j])
    }
}

// function shuffleArray(array) {
//     array.sort(() => Math.random() - 0.5);
// }

// function fisherYatesShuffle(arr) {
//     for (var i = arr.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));  // prend une carte aléatoirement
//       [arr[i], arr[j]] = [arr[j], arr[i]];          // swap les cartes de place
//     }
// }

console.log(pile_card)
// shuffleArray(pile_card)
// fisherYatesShuffle(pile_card);
_.shuffle(pile_card)
console.log(pile_card)

function numberRamdom(max, min) {
    return Math.round(Math.random() * (max - min) + min)
}

var turn1 = numberRamdom(pile_card.length-1, 0)
//console.log(turn1, pile_card[turn1])

var value_card = pile_card[turn1].split('-')[0]

if (isNaN(value_card))
    value_card = 10
else
    value_card = Number(value_card)
console.log(value_card)

pile_card.splice(turn1, 1) // on eneleve la carte qui a été choisit
console.log(turn1, pile_card[turn1])

pile_card = pile_card.map(function (cart){
    console.log(cart)
    var value = cart.split('-')[0] // on recupere la valeur 
    var value_color = cart.split("-")[1]
    if(isNaN(value) && value != "A") // on test si c'est un nombre ET que sa valeur diffère de "A"
        value = 10
    else if (isNaN(value) && value == "A")
        value = 11
    else
        value = Number(value) // si c'est un nombre, alors sa valeur = le nombre
    if (value_color == "CA" || value_color == "C")
        value_color = "red"
    else
        value_color = "black"
    
    var obj = {name: cart, value: value, color: value_color}
    return obj
})

console.log(pile_card)