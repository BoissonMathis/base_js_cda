let rectangle = {
    x: 50,
    y: 120,
    width: 30,
    height: 70
}

rectangle.unite = "cm";

rectangle.perimetre = (rectangle.width * 2) + (rectangle.height * 2);
// console.log('Le périmetre du rectangle est de :', rectangle.perimetre, rectangle.unite);

rectangle.area = rectangle.width * rectangle.height;
// console.log("L'air du rectangle est de :", rectangle.area);

// rectangle.hypotenuse = (rectangle.width, 2 * rectangle.width) + (rectangle.height * rectangle.height);
rectangle.hypotenuse = (Math.pow(rectangle.width, 2)) + (Math.pow(rectangle.height, 2));
// console.log("La valeur de sa diagonale est de :", rectangle.hypotenuse, rectangle.unite, "²");
rectangle.hypotenuse = Math.sqrt(rectangle.hypotenuse);
// console.log("La valeur de sa diagonale est de :", rectangle.hypotenuse, rectangle.unite);
rectangle.hypotenuse = Number(rectangle.hypotenuse.toFixed(2));
// console.log("La valeur de sa diagonale est de :", rectangle.hypotenuse, rectangle.unite);

console.log("X: ", rectangle.x, rectangle.unite);
console.log("Y: ", rectangle.x, rectangle.unite);
console.log("Perimetre: ", rectangle.perimetre, rectangle.unite);
console.log("Aire: ", rectangle.area, rectangle.unite + "²");
console.log("Diagonal: ", rectangle.hypotenuse, rectangle.unite);
// console.log("X: ", rectangle.x, rectangle.unite + "\n" + "Y: ", rectangle.x, rectangle.unite + "\n" + "Perimetre: ", rectangle.perimetre, rectangle.unite + "\n" + "Aire: ", rectangle.area, rectangle.unite + "²" + "\n" + "Diagonal: ", rectangle.rc_hypotenuse_round, rectangle.unite);