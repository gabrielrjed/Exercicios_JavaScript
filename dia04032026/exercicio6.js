const leia = require("readline-sync")

let numero = 0
let media = 0
let total = 0
let soma = 0

do{
    numero = leia.questionInt("Digite um numero: ")
    if(numero != 0 && numero % 3 === 0){
        soma = soma + numero
        total++
        media = soma / total
    }
    
}while(numero !== 0)

console.log(`A média dos multiplos de 3 é: ${media}`)

          



