let read = require('readline-sync');

// let result = () => {
//     let n = read.questionFloat("Donne moi un nombre ou un chiffe ");
//     let filledArray = new Array(n).fill(' ');
// while (filledArray.indexOf(' ') !== -1) {
//         filledArray.shift();
//         filledArray.push('#');
//         console.log(filledArray.join(""));
//         n--;
        
//     }


let result = () => {
    let n = read.questionFloat("Donne moi un nombre ou un chiffe ");
    let filledArray = new Array(n).fill('#');
while (filledArray.indexOf('#') !== -1) {
        filledArray.shift();
        console.log(filledArray.join(""));
        
    }
    
}
console.log(result());