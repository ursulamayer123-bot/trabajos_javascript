const prompt =require ('prompt-sync')();
let numero = parseInt (prompt ("¿De que numero queres ver la tabla?: "));
console.log("Tabla del numero: " + numero);
for ( let i = 1 ; i <= 10; i++){
    let resultado = numero * i;
    console.log(numero + "x" + i + "=" + resultado)
}
