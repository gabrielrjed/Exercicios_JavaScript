let salarioBruto = 2000.00;
let adicionalNoturno = 500.00;
let horasExtras = 100.00;
let descontos = 200.00;

const leia = require("readline-sync");

salarioBruto = leia.questionFloat("Digite o seu salário bruto: ");
adicionalNoturno = leia.questionFloat("Digite o seu adicional noturno:  ");
horasExtras = leia.questionFloat("Digite a quantidade de horas extras: ");
descontos = leia.questionFloat("Digite o valor dos descontos: ");

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras*5) - descontos; 

console.log(`O seu salario liquido e: ${salarioLiquido}`);