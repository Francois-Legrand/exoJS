let read = require('readline-sync');

let result = (a,b) =>{

    num = read.questionInt("Donne moi le prix de fabrication de ton produit ");

    num2 = read.questionInt("Donne moi le prix de vente de ton produit ");

    let profitOuPerte = num2 - num;
    if(profitOuPerte < 0){
        return `Tu as perdu ${Math.abs(profitOuPerte)}`;
    }else{
        return `Tu à gagné ${profitOuPerte}`;
    }
}
console.log(result());

