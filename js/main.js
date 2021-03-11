/* Crea un array di 10 oggetti che rappresentano una
zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
 */

var courBasket = [
    {
        "variety": "Bradipo",
        "weight": 176,
        "length": 18
    },
    {
        "variety": "Facocero",
        "weight": 165,
        "length": 15
    },
    {
        "variety": "Emù",
        "weight": 165,
        "length": 16
    },
    {
        "variety": "Raganella",
        "weight": 150,
        "length": 15
    },
    {
        "variety": "Muflone",
        "weight": 99,
        "length": 11
    },
    {
        "variety": "Colibrì",
        "weight": 132,
        "length": 13
    },
    {
        "variety": "Wombat",
        "weight": 145,
        "length": 14
    },
    {
        "variety": "Petauro",
        "weight": 163,
        "length": 16
    },
    {
        "variety": "Ocelot",
        "weight": 156,
        "length": 16
    },
    {
        "variety": "Okapi",
        "weight": 128,
        "length": 12
    }
];

console.log(courBasket);

var courSum = 0;
for(var i = 0; i < courBasket.length; i++) {
    courSum += courBasket[i].weight;
}
console.log("il peso totale delle zucchine è di "+courSum+"gr");


/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano
meno o più di 15cm (:sorrisetto:).
Infine stampa separatamente quanto pesano i due gruppi
di zucchine */

var longer = [];
var shorter = [];
var equal = [];

for(var i = 0; i < courBasket.length; i++) {
    if (courBasket[i].length > 15) {
        longer.push(courBasket[i])
    }
    else if (courBasket[i].length < 15) {
        shorter.push(courBasket[i])
    }
    else if (courBasket[i].length == 15) {
        equal.push(courBasket[i])
    }
}

console.log(longer);
console.log(shorter);
console.log(equal);


var longerSum = 0;
for(var i = 0; i < longer.length; i++) {
    longerSum += longer[i].weight;
}
console.log("il peso totale delle zucchine più lunghe è di "+longerSum+"gr");

var shorterSum = 0;
for(var i = 0; i < shorter.length; i++) {
    shorterSum += shorter[i].weight;
}
console.log("il peso totale delle zucchine più corte è di "+shorterSum+"gr");

var equalSum = 0;
for(var i = 0; i < equal.length; i++) {
    equalSum += equal[i].weight;
}
console.log("il peso totale delle zucchine di 15cm è di "+equalSum+"gr");