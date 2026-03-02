let nota1 = 10.0;
let nota2 = 8.0;
let nota3 = 7.0;
let nota4 = 7.5;

const leia = require("readline-sync");

nota1 = leia.questionFloat("Digite a primeira nota: ");
nota2 = leia.questionFloat("Digite a segunda nota: ");   
nota3 = leia.questionFloat("Digite a terceira nota: ");
nota4 = leia.questionFloat("Digite a quarta nota: ");


mediaFinal = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);

console.log(`Sua média final é: ${mediaFinal}`);
