const leia = require("readline-sync");

let numero1 = leia.questionInt("Digite um numero: ");
let numero2 = leia.questionInt("Digite outro numero: ");


if(numero1 < numero2){
    for(let i = numero1; i <= numero2; i++){
        if(i % 3 === 0 && i % 5 === 0)
            console.log(`${i} é multiplo de 3 e 5`)
    }
}else if(numero2 < numero1){
    console.log("número inválido");
    
}

 

