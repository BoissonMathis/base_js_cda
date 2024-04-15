let personnage = {
    firstName: "lutfu",
    lastName: "lafraude",
    userName: "luftucru",
    email: "lutfulafraude@gmail.com"
}

let voisin = personnage;

console.log("premier rendu :", personnage, voisin);

personnage.humeur = "content";
voisin.age = 25;

console.log("deuxieme rendu :", personnage, voisin);

personnage = {... voisin};
personnage.userName = "filsCachéDeMacron";

console.log("troisieme rendu :", personnage, voisin);