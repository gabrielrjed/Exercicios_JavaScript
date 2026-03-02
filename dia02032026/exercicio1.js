
const leia = require("readline-sync");

salario = leia.questionFloat("Digite o salario: ")
abono = leia.questionFloat("Digite o abono: ")

novoSalario = salario + abono

console.log(`O seu novo salário é: ${novoSalario}`)