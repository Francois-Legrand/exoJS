let read = require('readline-sync');


let result = () => {
    oprerateur = read.question("Quel type d'opération veux tu réaliser? '+','-','x','/'" );

    num = read.questionFloat("Donne moi un nombre ou un chiffe ");
    num2 = read.questionFloat("Donne en moi un second ");
    if(oprerateur === "-"){
       let soustract = num - num2;
       return soustract;
    }else if(oprerateur === "+"){
        let add = num + num2;
        return add;
     }else if(oprerateur === "x"){
        let mult = num * num2;
        return mult;
     }else if(oprerateur === "/"){
        let div = num / num2;
        return div;
     }

}
console.log(result());