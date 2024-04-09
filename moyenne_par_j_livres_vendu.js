let livresVendu = 600;
let venteDeLaSemaine = 50;
let venteDeLivreParJour = (livresVendu + venteDeLaSemaine) / 7;
console.log("Le nombre de livres vendu par jour est de : " + Math.round(venteDeLivreParJour));