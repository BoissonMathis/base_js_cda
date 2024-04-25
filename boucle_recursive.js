table = [1, 2, 3, 4, 5, 6]

function recursiveLoop(tab, index) {
    console.log(tab[index], "/ index =", index)
    if(index < tab.length - 1)
        recursiveLoop(tab, index + 1)
    else
        console.log("Fin du tableau")
}
    
recursiveLoop(table, 0)


var projet = [
    { name: "Projet 1", subProjet: [

        ]
    },
    { name: "Projet 2", subProjet: [
            { name: "Projet2 - 1"},
            { name: "Projet2 - 2"}
        ]
    },
    { name: "Projet 3", subProjet: [

        ]
    },
    { name: "Projet 4", subProjet: [

        ]
    },
]

function recursiveLoopSub(tab) {
    for(i = 0; i < tab.length; i++){
        console.log(tab[i].name)
        if (tab[i].subProjet && tab[i].subProjet.length > 0)
            recursiveLoopSub(tab[i].subProjet)
    }
}

recursiveLoopSub(projet)