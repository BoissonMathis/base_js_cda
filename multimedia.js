var data = {
    music: [],
    video: [],
    podcast: []
}

var maxString = 14;
var minString = 7;

var maxTime = 54596;
var minTime = 1450;

for(i = 0; i < 501; i++){

    var longueur = Math.floor(Math.random() * 8) + 7; // Génère une longueur aléatoire entre 7 et 14
    var resultat = '';
    var caracteres = 'abcdefghijklmnopqrstuvwxyz';
    var consone = 'bcdfghjklmnpqrstvwxz ';
    var voyelle = 'aeiouy'

    for (var j = 0; j < longueur; j++) {
        if (voyelle.includes(resultat.charAt(resultat.length-1))){
            var index = Math.floor(Math.random() * consone.length);
            resultat += consone.charAt(index);
        }else{
            var index = Math.floor(Math.random() * voyelle.length);
            resultat += voyelle.charAt(index);
        }
    }
    let rArtiste = resultat;

    let rTitle = (Math.random().toString(36).substring(2, Math.floor(Math.random() * (maxString - minString) + minString + 2)));

    let rLangage = Math.round(Math.random());

    let rTime =  Math.floor(Math.random() * (maxTime - minTime) + minTime);

    data.music.push(
        {
        title : rTitle,
        artiste : rArtiste,
        studio : "studio"+i,
        langage : rLangage%2 == 0 ? "Fr" : "Ang",
        time : rTime,
        dateRelease: "hier",
        album : "projet" + i
        }
    )
    // console.log(data.music[i])
} 