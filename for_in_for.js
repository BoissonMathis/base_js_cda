obj = [
    {
        firstName: "Edouard",
        lastName: "BERNIER",
        yearBorn: 1998
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

for (i=0; i < obj.length; i++){
    var keys = Object.keys(obj[i])
    console.log("")
    var text = ""
    for (var key_number = 0; key_number < keys.length; key_number++) {
        // console.log(keys[key_number], ":", obj[i][keys[key_number]])
        text += `${keys[key_number]} : ${obj[i][keys[key_number]]}`
        if (key_number + 1 != keys.length)
            text += " / "
    }
    console.log(text)
}