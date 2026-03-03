import leia from "readline-sync";

let produto = leia.questionInt("Digite o código do produto de 1 a 6: ");
let quantidade = leia.questionFloat("Digite a quantidade do produto: ");
let preco; 

switch(produto){
    case 1:
        preco = 10.00;
        console.log(`O preço do seu Cachorro quente é: ${preco * quantidade}`);
        break;
    case 2:
        preco = 15.00;
        console.log(`O preço do seu X-Salada é: ${preco * quantidade}`);
        break;
    case 3:
        preco = 18.00;
        console.log(`O preço do seu X-Bacon é: ${preco * quantidade}`);
        break;
    case 4:
        preco = 12.00;
        console.log(`O preço do seu Bauru é: ${preco * quantidade}`);
        break;
    case 5:
        preco = 8.00;
        console.log(`O preço do seu Refrigerante é: ${preco * quantidade}`);
        break;
    case 6:
        preco = 13.00;
        console.log(`O preço do seu Suco é: ${preco * quantidade}`);
        break;
    default:
        console.log("Código inválido");
        break;  

            

    

}
    
        
