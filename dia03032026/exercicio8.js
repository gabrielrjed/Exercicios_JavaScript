import leia from "readline-sync";

let saldo = 1000.00;
let operacao;
let retirada;
let deposito;

operacao = leia.questionInt("Para realizar a operação desejada: \n 1-Saldo; \n 2-Saque; \n 3-Deposito; \n escolha um numero de 1 a 3:  ")

switch(operacao){
    case 1:
        console.log(`O seu saldo é: ${saldo}`)
        break;
    case 2:
      retirada = leia.questionFloat(`Seu saldo é de ${saldo} quanto deseja sacar?`)
      if(retirada > saldo)
        console.log("Saldo insuficiente")
      else if(retirada < saldo)
        console.log(`Seu saldo é de ${saldo - retirada}`)
      break;
    case 3:
        deposito = leia.questionFloat(`Seu saldo é de ${saldo} quanto deseja depositar?`)
        console.log(`Seu saldo é de ${saldo + deposito}`)
        break;
    default:
        console.log("Operação inválida")

        break;
}