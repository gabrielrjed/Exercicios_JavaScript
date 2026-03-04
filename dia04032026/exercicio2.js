const leia = require("readline-sync");

let numero = 0
let par = 0
let impar = 0

for(let i = 1; i <= 10; i++){
    numero = leia.questionInt("Digite um numero: ");
    if(numero % 2 === 0){
        par++
    }else if(numero % 2 !== 0)
        impar++
    }

        console.log(`Total de numeros pares: ${par}`)
        console.log(`Total de numeros impares: ${impar}`)

