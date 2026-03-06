import {Queue} from "./Queue.ts";
import readlineSync from 'readline-sync';

const fila = new Queue<string>();

let numeroEscolhido: string;
let continuar: boolean = true;

while(continuar === true){
    
    console.log("1 - 1: Adicionar um novo Cliente na fila.")
    console.log("2: Listar todos os Clientes na fila")
    console.log("3: Retirar uma pessoa da fila")
    console.log("0: Sair")
    numeroEscolhido = readlineSync.question("Escolha uma opção: ")

    switch(numeroEscolhido){
        case "1":
            let nomeCliente = readlineSync.question("Digite o nome do cliente: ")
            fila.enqueue(nomeCliente)
            console.log("Cliente adicionado com sucesso!")    
            break;
        case "2":
            console.log(fila)
            break;
        case "3":
            fila.dequeue()
            fila.printQueue()
            if(fila.isEmpty() == true){
            console.log("A fila está vazia")
            }
            else{
            console.log("O Cliente foi chamado!")}
            break;
        case "0":
            continuar = false;
            break;
        default:
            console.log("Opção inválida!")
            break;
        
    }
    if (numeroEscolhido != "0" && continuar == true){
        continuar = readlineSync.keyInYNStrict("Deseja continuar? ");
    }
}