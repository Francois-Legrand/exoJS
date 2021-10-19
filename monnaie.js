
let read = require('readline-sync');



let result = () => {
    let n = read.questionFloat("Donne moi un montant ");

    let units = (n%500);
    let tens = (n - units)/500;
    console.log(`500: ${ tens}`);

    n = units;
    units = (n%200)
    let deuxCents = (n - units)/200
    console.log(`200: ${deuxCents}`);

    n = units;
    units = (n%20)
    let vingt = (n - units)/20
    console.log(`20: ${vingt}`);
    n = units;
    units = (n%10)
    let dix = (n - units)/10
    console.log(`10: ${dix}`);

    n = units;
    units = (n%5)
    let cinq = (n - units)/5
    console.log(`5: ${cinq}`);

    n = units;
    units = (n%2)
    let deux = (n - units)/2
    console.log(`2: ${deux}`);

    n = units;
    units = (n%0.5)
    let zeroCinq = (n - units)/0.5
    console.log(`0.5: ${zeroCinq}`);

    n = units;
    units = (n%0.2)
    let zeroDeux = (n - units)/0.2
    console.log(`0.2: ${zeroDeux}`);

}
console.log(result());








