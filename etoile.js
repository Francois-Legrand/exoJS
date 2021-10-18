let read = require('readline-sync');


let result = () => {
    let n = read.questionFloat("Donne moi un nombre ou un chiffe ");
    let filledArray = [];
    for(let i = 0; i < n; i++){
        filledArray.splice(i,i,"#")

        console.log(filledArray.join(""));
    }
}
console.log(result());