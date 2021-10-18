let read = require('readline-sync');


let result = (num,num2) => {

    num = read.questionInt("Donne moi un nombre ");
    num2 = read.questionInt("Donne moi un deuxième nombre ");
    
    let somme = num + num2;

    return somme;
}

console.log(result());