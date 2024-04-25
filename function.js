obj = [
    {
        firstName: "Edouard",
        lastName: "BERNIER",
        yearBorn: 1998
    }
]

function getPropertyObject(object){
    var objectKey = Object.keys(object)
    return objectKey.join(", ")
}

function printProperty(keys){
    console.log("Propriétés sont : ", keys)
}

printProperty(getPropertyObject(obj))

obj.age = 2024 - obj.yearBorn
obj.job = "Dev"

printProperty(getPropertyObject(obj))

var keys_existant = Object.keys(obj)

for (i = 0; i < keys_existant.length; i++) {
    console.log("Propriétés :", keys_existant[i], "/ Valeurs :", obj[keys_existant[i]])
}