import leia from "readline-sync";

let a = leia.questionInt("Digite o numero a: ");
let b = leia.questionInt("Digite o numero b: ");
let c = leia.questionInt("Digite o numero c: ");


if(a + b > c){
    console.log("A Soma de A + B é Maior do que C")
}
else if(a + b < c){
    console.log("A Soma de A + B é Menor do que C")
}
else{
    console.log("A Soma de A + B é Igual a C")
}