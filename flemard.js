let read = require('readline-sync');

let result = () => {
    for(let i = 0; i <= 20; i++){
        if(i <= 4){
            console.log(`${i}--> Catastrophique`)
        }else if(i > 4 && i <= 10){
            console.log(`${i}-->  Insufisant`)
        }else if(i > 10 && i < 15){
            console.log(`${i}-->  Peut mieux faire`)
        }else if(i > 14 && i < 18){
            console.log(`${i}-->  Bien`)
        }else if(i > 17 && i <= 20){
            console.log(`${i}--> Excelent, bon travail`)
        }else{
            "Ce n'est pas possible"
        }
    }
}
result();