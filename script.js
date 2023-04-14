
// irjuk at ugy, a kodunkat, hogy a legnagyobb szamot kapjuk meg - nem a sum kell hanem a max

// mindig kell az aktualis legnagyobb - amit elmentunk es ahhoz fogja merni a kovetkezot

let numbers = [10, 40, 20, -20, 50]
// mivel inditjuk a maxot? az elso szamunk a legnagyobb eppen
// logikailag helyen valo, hogy az 1-el indul, hiszen a 0 onmagat hasonlitja ossze
let max = numbers[0]; // 10, 40, 20, -20

for (let i = 0; i <= numbers.length-1; i++) {
    let num = numbers[i] // numbers 0 jelenlegi erteke 10
    if (num > max) { // 10 > 10 - ez nem igaz -ezért nem megy bele a blokkba, tovabbmegy -> i[2] lesz 40 > 10 - ez igaz / true ezert belemegy a blokkba - max uj erteke 40 - kilep az ifbol, iteral tovabb i[2] 20>40? false - megy tovabb i[3] -20>40 - false, megy tovabb - i[4] 50>40 - true BELEMEGY
        // ha a num nagyobb mint az aktualis max, akkor legyen a num = max 
        max = num 
    } 
}
console.log(max);
