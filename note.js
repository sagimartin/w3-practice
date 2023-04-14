// console.log("loaded");

// let carBrand = "Opel";
// console.log("carBrand" ,carBrand);

// carBrand = "BMW";
// console.log(carBrand);

// let doorNumber = 5;

// let isDiesel = true;

// let fuel = null;

// // Ez egy komment

// let firstNames =["Dorka", "Márió", "Bence", "Edit"];
// console.log(firstNames.length);
// console.log(firstNames[2]);
// console.log(firstNames[3]);
// // Az utolso nevet igy logolom:
// console.log(firstNames[firstNames.length-1]);

// // Helyettesitem a 2. nevet
// firstNames[1]="Ivett";
// console.log(firstNames);

// // Hozzaadok + 1 nevet
// firstNames.push("Márió");
// console.log(firstNames);


// // FUGGVENYEK
// // kirajuk a konstruktum - a kodnak a blokkjat

// function myFirstFunction(firstName, lastName) {
//     console.log("myFirstFunction");
//     return firstName + lastName;
// }

// // Most csak deklarálva van. Hogyan hívjuk meg?

// console.log(myFirstFunction("Márk ", "AG"));

// // 2 fontos eleme van meg - return


// // Még if/else, objectum, iterator

// // Atnezni conditional es operatorok + for loopok W3schools












// // 2023.04.13
// const cond1 = 2
// const cond2 = 2

// // vagy raksz ; vagy nem - mindegy
// // fuggvenyen belul barmit tehetunk, belul marad amig nem return-oljuk
// // a function-el deklarátuk és adtunk neki erteket
// function doubleTheNumber(num) {
//     let result = num*2
//     return result
// }

// // ha nincs return value - akkor undefined-t ad vissza
// // eddig tart a fuggveny


// // a zárójel azt jelenti, hogy oda varunk (rendelunk) egy értéket
// const doubleNumber = doubleTheNumber(7)
// console.log(doubleNumber)
// console.log(doubleTheNumber(17));


// // deklaráljunk egy függvényt
// function score(letter) {
//     const scoreStr = "a"
//     if (scoreStr === letter) {  
//         return true
//     }else{
//             return false
//         }
//     }

// console.log(score("b"));

// // az if () ben mindig kell egy feltetel ami evalualodik
// // ha ugyanaz a betu, akkor true, ha nem akk false 
// // node script.js -el kell futtatni

// function score(letter) {
//     const scoreStr = "a"
//     if (letter === undefined) {  
//         return "failed to send me letter!"
//     }else if (scoreStr === letter){
//         return "Try again!"
//         }
//     }

// console.log(score());

// ezt majd kommenteld vissza felfele


// 2023-04-14

// Gyakorlo 

let username;
let signupDate;

// username = 'johnk';
// signupDate = 'October 15, 2013';
// console.log(`Hello, ${username}! You've been a member since ${signupDate}.`);

// username = 'alberte';
// signupDate = 'March 20, 2004';
// console.log(`Hello, ${username}! You've been a member since ${signupDate}.`);

// username = 'evab';
// signupDate = 'June 4, 2019';
// console.log(`Hello, ${username}! You've been a member since ${signupDate}.`);

function getWelcomeMessage(username,signupDate) {
    console.log(`Welcome, ${username}! You've been a member since ${signupDate}.`);
    return true
}

// // mit jelent a dollarjel? ${signupDate}
// let userN = "Martin"
// let userLastName = " Sági"
// // let wholeName = userN+userLastName
// // let wholeName = `Név:{userN} {userLastName}`
// // a backtick tobbet tud mint az idezojel de a $ tol tudja h mire gondoltam
// // let wholeName = `Név:${userN} ${userLastName}`
// // ettol mar tudja h JS -megprobalja megtalalni az erteket
// let wholeName = `Név:${userN} ${1+2}`
// // lehet barmit csinalni benne - jo ha hasznaljuk es legelegansabb modja 

// console.log(wholeName); 
// // ezt ismerjuk

// console.log(getWelcomeMessage("evab","June 4, 2019"));
// nincs return 
getWelcomeMessage("johnk","October 15, 2013");


// if - itt nincs return value - nem kell - o csak megcsinalja amit mondtal - megviszgal egy felvetelt, ha true bemegy, ha nem akk halad tovabb, mindaddig amig van els if 
if (some expression that can be true or false) {
    // The code for the "true" branch goes here
    // That is, the code that we want to run when the above
    // expression evaluates to true
    // ...
    // ...
    // Potentially many lines of code
} else if(some other expression){
      // The code for the "true" branch goes here
      // That is, the code that we want to run when the above
      // expression evaluates to true
      // ...
      // ...
      // Potentially many lines of code
  }
  else {
    // The code for the "false" branch goes here
    // That is, the code that we want to run when the above
    // expression evaluates to false
    // ...
    // ...
    // Again, potentially many lines of code
  }

//   EXPRESSION GYAKORLAS 

let firstValue = 30
let secondValue = 30

if (firstValue < secondValue) {
    console.log(`${firstValue} is less than ${secondValue}`);
}

// ezt ugy is hivjak h template literal ` és $

// csinaljunk masik conditionalt
if (firstValue <= secondValue) {
    console.log(`${firstValue} is less than or equal to ${secondValue}`);
}

// ha a firstValue 30 akkor csak a masodik irodik ki

// comparision operate ===
if (firstValue === secondValue) {
    console.log(`${firstValue} is exactly equal to ${secondValue}`);
}

// comparision operate !==
if (firstValue !== secondValue) {
    console.log(`${firstValue} is not equal to ${secondValue}`);
}




let minimumVotingAge = 18
let age = 20
let registeredToVote = true

// kettő & kell, hogy ugy ertelmezze mindegyiknek teljesulnie kell
// el lehet hagyni a === true-t mert eleve megkapta fentrol mar 
if (age >= minimumVotingAge && registeredToVote === true) {
    console.log("Congratulations, you can vote!");
}

// VAGY || egyiknek kell igaznak lennie 
let daughterOfPresident = true
if (age >= minimumVotingAge || daughterOfPresident === true ) {
    console.log("Congratulations, you can vote!");
}



// Declare a new variable named currentCount and set its value to 1
let currentCount = 1;

// Repeat everything between { ... } so long as currentCount is <= 10
while (currentCount >= 10) {
// The loop body is everything between { ... } following the while keyword
// Print the current count (using a template string)
console.log(`The currentCount is: ${currentCount}`);

// Increment currentCount by 1
  currentCount = currentCount + 1;
}

// We'll exit the loop body once currentCount <= 10 evaluates to false
// Print 'Done counting!'
console.log('Done counting!');




// ITERÁCIÓ - MI IS TÖRTÉNIK ITT
// loop - ismétli gyorsan 100x 1000x 

let currentCount = 1
while (currentCount <= 10) {
    console.log(`The current count is ${currentCount}`);
    // ha 1 csak a currentCount akkor vegtelenig fogja csinalni ezert meg kell novelni 1 el
    currentCount = currentCount + 1
}

console.log("done");
// így egészen 10 ig kiirja, mivel 11 ig szamolt 

// egy ido utan atlathatatlan a while loop



// ITERÁCIÓ - MI IS TÖRTÉNIK ITT
// loop - ismétli gyorsan 100x 1000x 

let currentCount = 1
while (currentCount <= 10) {
    console.log(`The current count is ${currentCount}`);
    // ha 1 csak a currentCount akkor vegtelenig fogja csinalni ezert meg kell novelni 1 el
    currentCount = currentCount + 1
    currentCount += 1
    // ++ nal tudja hogy +1 et adsz hozza
    currentCount ++
    currentCount += 2

    currentCount -= 1
    currentCount -= 7
    currentCount --
}
console.log("done");
// így egészen 10 ig kiirja, mivel 11 ig szamolt 

// egy ido utan atlathatatlan a while loop



// shorthand pl ha hozza akarunk rakni valamit

// FOR LOOP
// 3 dolgot var - initialization; condition; incrementing setup

// for (initialization; conditon; incrementingSetup) {
//     // here comes the code
// }

for (let currentCount = 1; currentCount <= 10; currentCount += 1) {
    console.log(`The current count is ${currentCount}`);   
}

console.log("done");

// ugyanugy megy mint a while loop - de jobban atlathato
// ugy mukodik mint a while-nal - el kezd futni

// ALAPVETOEN FOR LOOP A JAVASOLT

for (let eventNumber = 2; eventNumber <= 20; eventNumber += 2){
    console.log(eventNumber);
}


let startCount = 5
let endCount = 25

// irja ki a számokat a startCount-tol az endCount-ig

for (let counter = startCount; counter <= endCount; counter ++) {
    console.log(counter);
}

// // páros számokat írja ki

// let startCount = 2
// let endCount = 20
// let countSkip = 2

// // KOMBINALJUK BELE A countSkip -et irja ki a számokat a startCount-tol az endCount-ig

// for (let counter = startCount; counter <= endCount; counter += countSkip) {
//     console.log(counter);
// }

// a valtozo neve barmi lehet - regen i-vel talalkoztam sokat - itt kifejezo a counter

// Most csinaljunk vmi hasznosat

// TÖMBOK

// ez a tomb
let members = ["Bence", "Ágota", "Márió", "Balázs"]

// csinaljunk egy for loopot ami atsetal a tombon
// members[1] az Ágnes 
for (let i = 0; i <= members.length-1; i ++){
    console.log(i);
    console.log(members[i]);
}
// 0 rol indulunk, és noveljuk members 1 = Agota, fordul, members 2 = Márió, fordul adddig megy amig mondom neki members.length-1

// az index lehet barmi akar zsiraf is, csak szo szerint az index-első száma = i



// adjuk ossze 
let numbers = [10, 20, 40, 50]
let sum = 0;

for (let i = 0; i <= numbers.length-1; i++) {
    // eddig van a csontváz. de mit csinalunk a szamokkal?
    let num = numbers[i]
    // elmentjuk minden valtozonal az eppen aktualis erteket
    // io 10, i1 20, i2 40, i3 50
    sum = sum + num
}
// ha kint van a log akkor csak az utolso ertek jon
console.log(sum);
