const leia = require("readline-sync");

let vetor = [2,5,1,3,4,9,7,8,10,6]
let numero;
let contador;
let posicao = -1;

numero = leia.questionInt("Digite um numero: ");

for(contador = 0; contador <= 10; contador++){
    if(numero == vetor[contador]){
        posicao = contador 
        break;
    }    
}
if(posicao != -1)
    console.log(`O numero ${numero} está na posição ${posicao}`)
else
    console.log("Número não encontrado")




 
