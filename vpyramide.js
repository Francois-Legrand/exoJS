let read = require('readline-sync');
function pyramid() {
    n = read.questionInt("Donne moi un nombre ou un chiffre pour construire ta pyramide ");
    var n = 10;
    var output="";
    for (var i = 0; i < n ; i++) {
        var myspace = "";   
        for(let s = 0; s <(n - i - 1); s++) {
            myspace += " ";
        }
        for (var j = 1; j <= 2 * i + 1; j++) {
            output+="*";

        }
        console.log(myspace+output);
        output="";
    }
}
pyramid();