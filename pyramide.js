let read = require('readline-sync');

let result = () => {
    let n = read.questionInt("Donne moi un nombre ou un chiffe ");
    let tab = [];
    for(let i = 0; i < n; i++) {
        tab.splice(i,i,"#")
        console.log(tab.join(""));
        
        if(tab.length == n){

            // while (tab.indexOf('#') !== -1) {
            //     tab.shift();
            //     console.log(tab.join(""));
            // }
            for(let j = n; tab.length > 1; j--){
                tab.pop();
                console.log(tab.join(""));
            }
        }
    }
    
}
console.log(result());