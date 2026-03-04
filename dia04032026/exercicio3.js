const leia = require("readline-sync");

let idade = 0;
let maior = 0;
let menor = 0;

while(idade >= 0){
    idade = leia.questionInt("Digite uma idade: ");
    if(idade <= 21){
        menor++
    }else if(idade >= 50){
        maior++
    
    }
    
}

console.log(`Total de pessoas com menos de 21 anos: ${menor - 1}`)
console.log("Total de pessoas com mais de 50 anos: " + maior)