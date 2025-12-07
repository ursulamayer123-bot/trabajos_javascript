const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número positivo: "));

for (let i = 1; i <= numero; i++) {
    console.log(i);
}