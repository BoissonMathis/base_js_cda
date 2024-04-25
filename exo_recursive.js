obj = [
    {
        firstName: "Edouard",
        lastName: "BERNIER",
        yearBorn: 1997,
        children: [
            {
                firstName: "Jordan",
                lastName: "BERNIER",
                yearBorn: 1997,
                children: [
                    {
                        firstName: "Paul",
                        lastName: "BERNIER",
                        yearBorn: 1997
                    }
                ]
            },
            {
                firstName: "Luc",
                lastName: "BERNIER",
                yearBorn: 1997
            }
        ]
    },
    {
        firstName: "Kiki",
        lastName: "MBAPPE",
        yearBorn: 1997
    },
    {
        firstName: "Antoine",
        lastName: "Grizou",
        yearBorn: 1994
    }
]

function recursiveLoopSub(tab, lvl, origin) {
    let tabulation = ""

    for(let y = 0; y < lvl; y++){
        tabulation += "    "
    }

    for(let i = 0; i < tab.length; i++){
        console.log(`${tabulation} ${tab[i].firstName} ${tab[i].lastName} ${tab[i].yearBorn} Origin ${origin}`)

        if (tab[i].children && tab[i].children.length > 0){
            recursiveLoopSub(tab[i].children, lvl+1, origin + ` ${tab[i].firstName} ${tab[i].lastName}`)
        }
    }
}

recursiveLoopSub(obj, 0, "- ")

// afficher origin avec le nom des parents 