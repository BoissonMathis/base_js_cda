let produit = {
    nom: "t-shirt",
    prix: 12,
    stock: 70,
    nombre_vendu: 88,
};

let gain = produit.nombre_vendu * produit.prix;
let valeur_stock = produit.stock * produit.prix;

console.log("nom : ", produit.nom, ", valeur : ", produit.prix, "€", ", stock : ", produit.stock, ", gain : ", gain, '€.');