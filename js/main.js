/* Crea un array di 10 oggetti che rappresentano una
zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
 */

var courBasket = [
    {
        "variety": "Bradipo",
        "weight": 120,
        "length": 12
    },
    {
        "variety": "Facocero",
        "weight": 104,
        "length": 10
    },
    {
        "variety": "Emù",
        "weight": 140,
        "length": 14
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
        "weight": 133,
        "length": 13
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
console.log(courSum+"gr");
