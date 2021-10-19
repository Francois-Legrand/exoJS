
let read = require('readline-sync');

let result = () => {
    let temperature = [12,25,5,7,6,-5]

    return Math.min(...temperature);
}
console.log(result());