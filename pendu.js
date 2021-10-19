let motListe = ["adoption", "amitie", "cabane", "chapeaux", "citrouille", "corbeau", "dictionnaire", "figurine", "independence", "journal", "lunettes", "mercantile", "pasteur", "ruisseau", "tableau", "velocipede"];
let count = 0;
let stockUnderscore = [];
let stockMot = [];
let reponse;

let startGame = () => {
    reponse = motListe[Math.floor(Math.random() * motListe.length)]
    
    stockMot = reponse.split('');
}

let analyse = () => {
    console.log(stockMot);
    for(let i = 0; i < stockMot.length; i++){
        stockUnderscore[i] = "_";
    }
    console.log(stockUnderscore);

}
startGame();
analyse();