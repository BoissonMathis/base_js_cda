var peoples_formation = [
    {
        firstName: "Lutfu",
        lastName: "Us",
        age: 22,
        dateStart: "4 octobre 2001",
        lieu_de_naissance: "Chine"

    },
    {
        firstName: "Alexandre",
        lastName: "Porteron",
        age: 30,
        dateStart: 1993,
        lieu_de_naissance: "Troyes"
    }
]

peoples_formation.pop()

peoples_formation.push(
    {
        firstName: "Xavier",
        lastName: "Colombel",
        age: 38,
        dateStart: 1986,
        lieu_de_naissance: "Belfort"
    }
)

// console.log("Prénom :", peoples_formation[0].firstName,
// ", Nom :", peoples_formation[0].lastName,
// ", Age :", peoples_formation[0].age,
// ", Date de naissance :", peoples_formation[0].dateStart,
// ", Lieu de naissance :", peoples_formation[0].lieu_de_naissance
// + " \n" +
// "Prénom :", peoples_formation[1].firstName,
// ", Nom :", peoples_formation[1].lastName,
// ", Age :", peoples_formation[1].age,
// ", Date de naissance :", peoples_formation[1].dateStart,
// ", Lieu de naissance :", peoples_formation[1].lieu_de_naissance
// + " \n" +
// `Il y a ${peoples_formation.length} personnes dans la formation.`);

console.log("Prénom :", peoples_formation[0].firstName);
console.log("Nom :", peoples_formation[0].lastName);
console.log("Age :", peoples_formation[0].age);
console.log("Date de naissance :", peoples_formation[0].dateStart);
console.log("Lieu de naissance :", peoples_formation[0].lieu_de_naissance);

console.log("Prénom :", peoples_formation[1].firstName);
console.log("Nom :", peoples_formation[1].lastName);
console.log("Age :", peoples_formation[1].age);
console.log("Date de naissance :", peoples_formation[1].dateStart);
console.log("Lieu de naissance :", peoples_formation[1].lieu_de_naissance);

console.log(`Il y a ${peoples_formation.length} personnes dans la formation.`);