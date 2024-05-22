var obj = {
    a: 1,
    b: 3,
    c: { e: { f: { z: { y: 23 } } } }
};

function returnEveryKey (obj) {
    let keysArray = [];
    function recursive(obj){
        let keys = Object.keys(obj);
        let value = Object.values(obj);
        for(let i = 0; i < keys.length; i++){
            console.log(`ajout de la key ${keys[i]}`)
            keysArray.push(keys[i]);
            if(typeof(value[i]) === "object"){
                recursive(value[i]);
            }
        }
    }
    recursive(obj);
    console.log(`return du tableau de clefs`);
    return keysArray;
}

// console.log(returnEveryKey(obj));


function sommeTableau(tableau){
    if (tableau.length === 0){
        return 0
    }
    return tableau[0]+sommeTableau(tableau.splice(1))
}
// console.log(sommeTableau([1, 2, 3, 4, 5, 6]))

function tableauLength(tableau){
    if (tableau.length === 0){
        return 0
    }
    return 1+tableauLength(tableau.splice(1))
}
// console.log(tableauLength([1, 2, 3, 4, 5, 6]))

// function isAPalindrome(word){
//     let length = word.length;
//     // console.log(word.charAt(length - 1))
//     // console.log(word.charAt(0))
//     if(length === 0 || length === 1){
//         console.log('ok')
//         return true
//     }
//     else if(word.charAt(length - 1) === word.charAt(0) && length > 1){
//         word = word.slice(1, length - 1)
//         console.log(word)
//         return isAPalindrome(word)
//     }if(word.charAt(length - 1) != word.charAt(0) && length > 1){
//         return false
//     }
// }

// console.log(isAPalindrome("radar"))

function isPalindrome(str){
    if (str.length <= 1) 
        return true
    if (str[0] !== str[str.length - 1]) 
        return false
    
    return isPalindrome(str.slice(1, -1))
}

console.log(isPalindrome("radar"));
console.log(isPalindrome("chien"));