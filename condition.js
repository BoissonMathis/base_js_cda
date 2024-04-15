var age = 17;

if (age >= 18) {
    console.log("Tu es majeur.")
} else {
    console.log("Tu es mineur.")
}

console.log("Salut, comment vas-tu ?")

console.log(age >= 18); // expect false
console.log(age >= 10) // expect true

var autorized = false;

if (age >= 18) {
    console.log("Tu es majeur.")
    autorized = true
} else
    console.log("Tu es mineur.")


console.log(`Autorisé : ${autorized}`);

var autorized2 = age >= 18 ? true : false
console.log(`Autorisé : ${autorized2}`)

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

for (var i = 0; i < 100; i++){
    peoples_formation.push({firstName: "Louis" + i,
    lastName: "Labroquante",
    age: 30 + i,
    dateStart: 1993 + i,
    lieu_de_naissance: "Mars"})
}

for (var i = 0; i < peoples_formation.length; i++){
    if (peoples_formation[i].firstName === "Louis55"){
        console.log(`Prénom : ${peoples_formation[i].firstName}`)
        console.log(`Nom : ${peoples_formation[i].lastName}`)
        console.log(`Age : ${peoples_formation[i].age}`)
        console.log(`Il est a la ${i} position dans le tableau.`)
        break
    }
}

let age_50_array = [];

for (var i = 0; i < peoples_formation.length; i++){
    if (peoples_formation[i].age > 50){
        age_50_array.push(peoples_formation[i])
    }
}

console.log(age_50_array.length)

//stockage d'un element unque avec un objet
var obj_people = {}

for(var i = 0; i < peoples_formation.length; i++){
    obj_people[peoples_formation[i].firstName] = peoples_formation[i]
}

console.log(obj_people['Louis55'])