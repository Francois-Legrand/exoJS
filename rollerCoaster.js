
let fileDattente = [2,3,5,4];
let placeManege = [];
let tours = 1;
let prix = 1;
let gain = 0;
let estPleins = false;
let monterDansLeManege = () => {
    
    for(let j = tours; j >= 0; j--){
        for(let i = fileDattente.length-1; i >= 0 ; i--){
            placeManege.push(fileDattente[i]);
            gain += prix;
            estPleins = true;
        }
    console.log(placeManege+"-tour"+j)
      fileDattente = [];
        if(estPleins){
            for(let i = placeManege.length-1; i >= 0 ; i--){
                fileDattente.push(placeManege[i]);
                estPleins = false;
            }
            console.log(fileDattente+"-tour"+j)
            placeManege = []
        }
         
    }
    
}

console.log(`place dans le manège ${monterDansLeManege()}`);
//console.log(descendreDuManage());



