console.log("Bienvenue");
var calcul = 12/2+1;

console.log(calcul)
setTimeout(function () {

    try {
        calcul = 4;
        console.log(calcul)
        ds;
    }
    catch(err) {
        console.log(err.stack, err.message)
    }
    finally {
        console.log('fin')
    }
}, 3000)