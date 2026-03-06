import {Stack} from "./Stack.ts";
import readlineSync from 'readline-sync';

const pilha = new Stack<string>();
let numeroEscolhido: string;
let continuar: boolean = true;

while(continuar === true){
    console.log("1 - 1: Adicionar Livro na Pilha.")
    console.log("2: Listar todos os livros na Pilha")
    console.log("3: Retirar Livro da Pilha")
    console.log("0: Sair")
    numeroEscolhido = readlineSync.question("Escolha uma opção: ")

    switch(numeroEscolhido){
        case "1":
            let nomeLivro = readlineSync.question("Digite o nome do livro: ")
            pilha.push(nomeLivro)
            console.log("Livro adicionado com sucesso!")    
            break;
        case "2":
            console.log(pilha)
            break;
        case "3":
            pilha.pop()
            pilha.printStack()
            if(pilha.isEmpty() == true){
            console.log("A Pilha está vazia")
                }else{
                console.log("O livro foi chamado!")}
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

