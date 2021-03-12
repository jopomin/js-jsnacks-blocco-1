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




var longer = [];
var shorter = [];

for(var i = 0; i < courBasket.length; i++) {
    if (courBasket[i].length > 15) {
        longer.push(courBasket[i])
    }
    else if (courBasket[i].length < 15) {
        shorter.push(courBasket[i])
    }
}

console.log(longer);
console.log(shorter);

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




var word = prompt("Inserisci una parola");
var revWord = flipWord(word);
console.log(revWord);

function flipWord(string) {
    var revString ="";
    for(var i = string.length-1; i >= 0; i--) {
        revString += string[i];
    }
    return revString;
}




var names = ["Pippo", "Giancarlo", "Maurizio", "Gerry", "Ezio", "Paolo", "Carlo"];
var surnames = ["Baudo", "Magalli", "Costanzo", "Scotti", "Greggio", "Bonolis", "Conti"];
var nomi = [];
var cognomi = [];
var nomiCompleti = [];
var guests = 3;
for (var c = 0; c < guests; c++) {
    var pos1;
    var pos2;
    do {
    pos1 = Math.floor(Math.random()*names.length);
    } while (nomi.includes(names[pos1]));
    nomi[c] = names[pos1];
    do {
    pos2 = Math.floor(Math.random()*surnames.length);
    } while (cognomi.includes(surnames[pos2]));
    cognomi[c] = surnames[pos2];
    nomiCompleti[c] = nomi[c]+" "+cognomi[c];
}

console.log(nomiCompleti);





var nums = [13, 43, 34, 12, 6, 3, 5, 8, 9, 12, 11, 76, 23, 20, 58, 4, 11];

var odds = [];
for (var i = 0; i < nums.length; i++) {
    if (i%2 == 1) {
        odds.push(nums[i]);
    }
}
console.log(odds);

var oddSum = sum(odds);
console.log(oddSum);

function sum(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;
}




var brands = ["Nike", "Bauli", "Ravensburger", "Cirio", "Kia", "Pigna", "Enel", "Sony", "Aruba"];
console.log(brands, brands.length);

var cities = ["Vigevano", "Saint-Tropez", "Maratea", "Senigallia", "Perugia"];
console.log(cities, cities.length);

do {
    var city = prompt("Inserisci una città");
    cities.push(city);
} while (brands.length > cities.length);

console.log(brands, brands.length, cities, cities.length);




var alfa = ["a", "b", "c", "d", "e", "f"];
var numerico = [1, 2, 3, 4, 5, 6];
var alfaNumerico = alternate(alfa, numerico);
console.log(alfaNumerico);


function alternate(arr1, arr2) {
    var w = 0;
    var z = 0;
    var arrSum = [];
    for (var i = 0; i < (arr1.length+arr2.length); i++) {
        if (i%2 == 0) {
            arrSum[i] = arr1[w];
            w++;
        } else {
            arrSum[i] = arr2[z];
            z++;
        }
    }
    return arrSum;
}





var colori = ["giallo", "verde", "blu", "acquamarina", "viola", "carminio", "beige", "senape"];
console.log(colori, colori.length);

var numeroB = Math.floor(Math.random()*colori.length+1);
console.log(numeroB);

var numeroA = Math.floor(Math.random()*(numeroB-1));
console.log(numeroA);

var diff = subRange(colori, numeroA, numeroB);
console.log(diff);

function subRange(array, num1, num2) {
    var arRange = [];
    for (var i = 0; i < (num2-num1); i++) {
        arRange[i] = array[i];
    }
    return arRange;
}