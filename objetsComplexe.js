var my_object = {
    firstname: "Jean",
    lastname: "Dupont",
    option: {
        name: "Option 1",
        testing: true
    }
}

console.log(my_object.option["name"]); //afficher la propriété name de l'objet option qui se trouve dans my_object

var my_tree = {
    firstname: "Jean",
    lastname: "Dupont",
    dateStart: 1910,
    dateEnd: 1943,
    children: [
        {
            firstname: "Jean Junior",
            lastname: "Dupont",
            dateStart: 1930,
            dateEnd: 1973,
            children: []
        }
    ]
}

console.log(my_tree.children[0].firstname);
console.log(my_tree.children[0]["firstname"]);

my_tree.children.push({
    firstname: "Raymond",
    lastname: "Dupont",
    dateStart: 1952,
    dateEnd: 1994,
    children: []
}); //ajouter un objet au tableau children

console.log(my_tree.children)
console.log(my_tree.children.length) //récuperer la longueur du tableau children

my_tree.children.pop() //supprimer un élément du tableau children

console.log(my_tree.children)

my_tree.children = []; //remettre le tableau children a 0

console.log(my_tree.children)