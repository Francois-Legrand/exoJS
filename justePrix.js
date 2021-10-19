let read = require('readline-sync');



let result = () => {

    let reponse = read.questionInt("Trouve un nombre de 0 à 999 ");

    let nombreAleatoire = Math.floor(Math.random() * 999);
    let nbTour = 30;
    let isTrue = false;

    while(!isTrue){
        if(nbTour > 1){
            
            if(reponse < nombreAleatoire){
                nbTour--;
                console.log(`Il te reste plus que ${nbTour}`)
                console.log("plus!")
                reponse = read.questionInt("Recommence ");
                
    
            }else if(reponse > nombreAleatoire){
                nbTour--;
                console.log(`Il te reste plus que ${nbTour}`)
                console.log("moins!")
                reponse = read.questionInt("Recommence ");
               
            }else{
                isTrue = true;
                console.log("Bravo!")
                nbTour--;
            }
        }else{
            isTrue = true;
            console.log("Tu as perdu!")
        }

    }

}

console.log(result())
