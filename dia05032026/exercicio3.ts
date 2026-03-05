import readlinesync = require('readline-sync');

const numero = new Set<number>();

for(let numeros = 0; numeros < 10; numeros++){
    numero.add(readlinesync.questionInt('Digite um numero: '));

}

console.log(numero);

