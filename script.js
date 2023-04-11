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