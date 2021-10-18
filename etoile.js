let read = require('readline-sync');


// let result = () => {
//     let n = read.questionFloat("Donne moi un nombre ou un chiffe ");
//     let filledArray = new Array(n).fill('#');
// while (filledArray.indexOf('#') !== -1) {
//         filledArray.shift();
//         console.log(filledArray.join(""));
        
//     }
    
// }
// console.log(result());

let result = () => {
    let n = read.questionFloat("Donne moi un nombre ou un chiffe ");
    let filledArray = [];
    for(let i = 0; i < n; i++){
        filledArray.splice(i,i,"#")

        console.log(filledArray.join(""));
    }
}
console.log(result());