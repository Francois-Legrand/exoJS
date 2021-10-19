let read = require('readline-sync');

let result = () => {
    let n = read.questionInt("Donne moi un nombre ou un chiffe ");
    let filledArray = [];
    for(let i = 0; i < n; i++) {
        filledArray.splice(i,i,"#")
        console.log(filledArray.join(""));
        
        if(filledArray.length == n){

            // while (filledArray.indexOf('#') !== -1) {
            //     filledArray.shift();
            //     console.log(filledArray.join(""));
            // }
            for(let j = n; filledArray.length > 1; j--){
                filledArray.pop();
                console.log(filledArray.join(""));
            }
        }
    }
    
}
console.log(result());