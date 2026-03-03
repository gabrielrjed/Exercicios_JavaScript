import leia from "readline-sync";

let numero = leia.questionInt("Digite um numero: ");

if(numero > 0 && (numero % 2 === 0)){
    console.log("O numero é positivo e par");

}else if(numero > 0 && (numero % 2 !== 0)){
    console.log("O numero é positivo e impar");
}else if(numero < 0 && (numero % 2 === 0)){
    console.log("O numero é negativo e par");
}else if(numero < 0 && (numero % 2 !== 0)){
    console.log("O numero é negativo e impar");
}else{
    console.log("O numero é zero");
}