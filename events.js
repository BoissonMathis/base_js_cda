// console.log("Bienvenue");
// var calcul = 12/2+1;

// console.log(calcul)
// setTimeout(function () {

//     try {
//         calcul = 4;
//         console.log(calcul)
//         ds;
//     }
//     catch(err) {
//         console.log(err.stack, err.message)
//     }
//     finally {
//         console.log('fin')
//     }
// }, 3000)

function waiting(time) {
    return new Promise((ressolve, reject) => {
        if (time > 100)
        setTimeout(() => {
            console.log("OK")
            ressolve({succes: true})
        }, time)
        else
            reject({succes: false})
    })
}

waiting(101).then((value) => {
    console.log("Promise reussi :", value)
}).catch((err) => {
    console.log("Promise échoué :", err)
})

