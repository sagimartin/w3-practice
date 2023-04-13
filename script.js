console.log("loaded");

let carBrand = "Opel";
console.log("carBrand" ,carBrand);

carBrand = "BMW";
console.log(carBrand);

let doorNumber = 5;

let isDiesel = true;

let fuel = null;

// Ez egy komment

let firstNames =["Dorka", "Márió", "Bence", "Edit"];
console.log(firstNames.length);
console.log(firstNames[2]);
console.log(firstNames[3]);
// Az utolso nevet igy logolom:
console.log(firstNames[firstNames.length-1]);

// Helyettesitem a 2. nevet
firstNames[1]="Ivett";
console.log(firstNames);

// Hozzaadok + 1 nevet
firstNames.push("Márió");
console.log(firstNames);


// FUGGVENYEK
// kirajuk a konstruktum - a kodnak a blokkjat

function myFirstFunction(firstName, lastName) {
    console.log("myFirstFunction");
    return firstName + lastName;
}

// Most csak deklarálva van. Hogyan hívjuk meg?

console.log(myFirstFunction("Márk ", "AG"));

// 2 fontos eleme van meg - return


// Még if/else, objectum, iterator

// Atnezni conditional es operatorok + for loopok W3schools












// 2023.04.13
const cond1 = 2
const cond2 = 2

// vagy raksz ; vagy nem - mindegy
// fuggvenyen belul barmit tehetunk, belul marad amig nem return-oljuk
// a function-el deklarátuk és adtunk neki erteket
function doubleTheNumber(num) {
    let result = num*2
    return result
}
// eddig tart a fuggveny


// a zárójel azt jelenti, hogy oda varunk (rendelunk) egy értéket
const doubleNumber = doubleTheNumber(7)
console.log(doubleNumber)
console.log(doubleTheNumber(17));


// deklaráljunk egy függvényt
function score(letter) {
    const scoreStr = "a"
    if (scoreStr === letter) {  
        return true
    }else{
            return false
        }
    }

console.log(score("b"));

// az if () ben mindig kell egy feltetel ami evalualodik
// ha ugyanaz a betu, akkor true, ha nem akk false 
// node script.js -el kell futtatni

function score(letter) {
    const scoreStr = "a"
    if (letter === undefined) {  
        return "failed to send me letter!"
    }else if (scoreStr === letter){
        return "Try again!"
        }
    }

console.log(score());
