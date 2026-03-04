import leia from "readline-sync";

let numero1 = leia.questionFloat("Digite o primeiro numero: ");
let numero2 = leia.questionFloat("Digite o segundo numero: ");
let operador = leia.questionInt("Digite um numero de 1 a 4 para escolher operador (+, -, *, /): "); 

switch(operador){
    case 1:
        console.log(`A soma de ${numero1} e ${numero2} é: ${numero1 + numero2}`);
        break;
    case 2:
        console.log(`A subtração de ${numero1} e ${numero2} é: ${numero1 - numero2}`);
        break;
    case 3:
        console.log(`A multiplicação de ${numero1} e ${numero2} é: ${numero1 * numero2}`);
        break;
    case 4:
        console.log(`A divisão de ${numero1} e ${numero2} é: ${numero1 / numero2}`);
        break;
    default:
        console.log("Operador inválido");
        break;

}