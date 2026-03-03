import leia from "readline-sync";

let nome = leia.question("Digite seu nome: ");
let cargo = leia.questionInt("Digite o seu código do cargo de 1 a 6: ");
let salario = leia.questionFloat("Digite seu salário: ");
let reajuste;

switch(cargo){
    case 1:
        reajuste = 0.1
        console.log(`${nome} Gerente terá seu salário reajustado em ${salario + (salario * reajuste)}`)
        break;
    case 2:
        reajuste = 0.07
        console.log(`${nome} Vendedor terá seu salário reajustado em ${salario + (salario * reajuste)}`)
        break;
    case 3:
        reajuste = 0.09
        console.log(`${nome} Supervisor terá seu salário reajustado em ${salario + (salario * reajuste)}`)
        break;
    case 4:
        reajuste = 0.06
        console.log(`${nome} Motorista terá seu salário reajustado em ${salario + (salario * reajuste)}`)
        break;
    case 5:
        reajuste = 0.05
        console.log(`${nome} Estoquista terá seu salário reajustado em ${salario + (salario * reajuste)}`)
        break;
    case 6:
        reajuste = 0.06
        console.log(`${nome} Tecnico de TI terá seu salário reajustado em ${salario + (salario * reajuste)}`)
        break;
    default:
        console.log("Código inválido");
        break;
}