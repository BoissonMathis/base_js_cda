var wallet = {
    depense: []
}

let type_array = [
    {
        type: 'Santé',
        description: [
            {
                texte: "Consultation médicale - Dr. Dupont",
                min: 15,
                max: 40
            },
            {
                texte: "Achat de médicaments - Pharmacie XYZ",
                min: 5,
                max: 30
            },
            {
                texte: "Soins dentaires - Cabinet dentaire Smith",
                min: 40,
                max: 60
            },
            {
                texte: "Examens médicaux - Laboratoire Médilab",
                min: 35,
                max: 75
            },
            {
                texte: "Thérapie physique - Centre de réadaptation ABC",
                min: 80,
                max: 120
            }
        ],
    },
    {
        type: 'Sortie',
        description: [
            {
                texte: "Restaurant - Le Petit Bistro",
                min: 25,
                max: 80
            },
            {
                texte: "Cinéma - Billets pour le film XYZ",
                min: 15,
                max: 60
            },
            {
                texte: "Parc d'attractions - Billets d'entrée à Adventure Land",
                min: 60,
                max: 220
            },
            {
                texte: "Bar - Consommations au Bar Lounge",
                min: 5,
                max: 30
            },
            {
                texte: "Concert - Billets pour le concert de Lutfu",
                min: 20,
                max: 75
            },
        ],
    },
    {
        type: 'Loisir',
        description: [
            {
                texte: "Abonnement salle de sport - Fitness Club",
                min: 10,
                max: 20
            },
            {
                texte: "Cours de peinture - Atelier Créatif",
                min: 20,
                max: 35
            },
            {
                texte: "Location de kayak - Base nautique Rivière Aventure",
                min: 35,
                max: 70
            },
            {
                texte: "Billets de spectacle - Théâtre Municipal",
                min: 10,
                max: 40
            },
            {
                texte: "Entrée à un musée - Musée des Beaux-Arts",
                min: 5,
                max: 25
            },
        ],
    },
    {
        type: 'Loyer',
        description: ['Paiement du loyer'],
        min: 600,
        max: 850
    },
    {
        type: 'Voiture',
        description: [
            {
                texte: "Révision automobile - Garage AutoTech",
                min: 30,
                max: 80
            },
            {
                texte: "Changement d'huile et filtres - Centre de Services Rapides",
                min: 10,
                max: 35
            },
            {
                texte: "Achat de pneus - Magasin de pneumatiques XYZ",
                min: 200,
                max: 300
            },
            {
                texte: "Réparation de carrosserie - Carrosserie Martin",
                min: 150,
                max: 220
            },
            {
                texte: "Nettoyage intérieur et extérieur - Station de lavage SuperShine",
                min: 20,
                max: 50
            }, 
        ],
    },
    {
        type: 'Frais',
        description: [
            {
                texte: "Facture d'électricité - Fournisseur d'énergie EnerCo",
                min: 50,
                max: 80
            },
            {
                texte: "Abonnement Internet - Fournisseur de services Internet FastNet",
                min: 30,
                max: 50
            },
            {
                texte: "Frais de téléphone - Opérateur téléphonique MobilePlus",
                min: 50,
                max: 80
            },
            {
                texte: "Assurance habitation - Compagnie d'assurance SecureHome",
                min: 30,
                max: 50
            },
            {
                texte: "Frais bancaires - Banque Nationale",
                min: 5,
                max: 10
            }, 
        ],
    },
]

let expense_per_type = [
    {
        type: 'la santé',
        total: 0  
    },
    {
        type: 'les sorties',
        total: 0  
    },
    {
        type: 'les loisir',
        total: 0  
    },
    {
        type: 'le loyer',
        total: 0  
    },
    {
        type: 'la voiture',
        total: 0  
    },
    {
        type: 'les dépenses divers',
        total: 0  
    },
]


for (i = 0; i < 1001; i++){
    
    var maxDate = 1713251378;
    var minDate = 713251378;

    let rdmDate =  Math.floor(Math.random() * (maxDate - minDate) + minDate);

    var rdm_type_array = Math.floor(Math.random() * type_array.length);
    let rdmType = type_array[rdm_type_array].type

    var rdm_description_array = Math.floor(Math.random() * (type_array[rdm_type_array].description.length))
    let rdmDescription = type_array[rdm_type_array].description[rdm_description_array].texte

    let rdmPrice = Math.floor(Math.random() * (type_array[rdm_type_array].description[rdm_description_array].max - type_array[rdm_type_array].description[rdm_description_array].min) + type_array[rdm_type_array].description[rdm_description_array].min);

    wallet.depense.push(
        {
            date: rdmDate,
            type: rdmType,
            price: rdmPrice,
            description: rdmDescription
        }
    )
    console.log(wallet.depense[i])

    expense_per_type[rdm_type_array].total = expense_per_type[rdm_type_array].total + rdmPrice

}

console.log(`Il y a eu ${wallet.depense.length} transactions`)

for (i=0; i<expense_per_type.length; i++){
    console.log(`Dépense total pour ${expense_per_type[i].type} : ${expense_per_type[i].total} €`)
}