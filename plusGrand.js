let read = require('readline-sync');

let result = () => {
    let numList = [];
    num = read.questionInt("Donne moi un nombre ");
    numList.push(num);

    num2 = read.questionInt("Donne moi un deuxème nombre ");
    numList.push(num2);

    num3 = read.questionInt("Donne moi un troisième nombre ");
    numList.push(num3);

    return Math.max(...numList);
    
}

console.log(result());