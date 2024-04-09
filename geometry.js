let rectangle = {
    x: 50,
    y: 120,
    width: 30,
    height: 70,
    unite: "cm",
}

let perimetre = (rectangle.width * 2) + (rectangle.height * 2);

// console.log('Le périmetre du rectangle est de :', perimetre, rectangle.unite);

let area = rectangle.width * rectangle.height;

// console.log("L'air du rectangle est de :", area);

let hypotenuse = (rectangle.width * rectangle.width) + (rectangle.height * rectangle.height);
let rc_hypotenuse = Math.sqrt(hypotenuse);
let rc_hypotenuse_round = rc_hypotenuse.toFixed(2);
// console.log("La valeur de sa diagonale est de :", hypotenuse, rectangle.unite, "² soit ", rc_hypotenuse);
// console.log("On peut l'arrondir a :", rc_hypotenuse_round);

// console.log("X: ", rectangle.x, rectangle.unite);
// console.log("Y: ", rectangle.x, rectangle.unite);
// console.log("Perimetre: ", perimetre, rectangle.unite);
// console.log("Aire: ", area, rectangle.unite + "²");
// console.log("Diagonal: ", rc_hypotenuse_round, rectangle.unite);

console.log("X: ", rectangle.x, rectangle.unite + "\n" + "Y: ", rectangle.x, rectangle.unite + "\n" + "Perimetre: ", perimetre, rectangle.unite + "\n" + "Aire: ", area, rectangle.unite + "²" + "\n" + "Diagonal: ", rc_hypotenuse_round, rectangle.unite);