let produit = {
    nom: "t-shirt",
    prix: 12,
    stock: 70,
    nombre_vendu: 88,
};

let gain = produit.nombre_vendu * produit.prix;
let valeur_stock = produit.stock * produit.prix;
let product_cost = 8;
let total_cost = (produit.nombre_vendu + produit.stock) * product_cost;
let benef_per_sell = produit.prix - product_cost;
let pourc_benef_per_sell = 100 * (benef_per_sell/produit.prix)

console.log("nom : ", produit.nom, ", valeur : ", produit.prix, "€", ", stock : ", produit.stock, ", gain : ", gain, '€');

console.log('Nous avons engagé :', total_cost + '€')
console.log("Le bénéfice réalisé par produit est de :", benef_per_sell + "€" )
console.log("Nous réalisons donc un bénéfice de :", Math.round(pourc_benef_per_sell) + "%")