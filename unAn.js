let read = require('readline-sync');

let result = () => {
    num = read.questionInt("Donne moi un nombre ou un chiffre ");
    let add = 0;
    for(let i = 1; i <= num; i++){

        add = i+i;
    }
    return add;
}
console.log(result());