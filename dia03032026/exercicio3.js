import leia from "readline-sync";

let nome = leia.question("Digite seu nome: ");
let idade = leia.questionInt("Digite sua idade: ");
let doacao = leia.keyInYN("Essa é a sua primeira doação? ");

if (idade >= 18 && idade <= 59 ){
    console.log(`${nome} está apto(a) a doar sangue.`);
}else if(idade >= 60 && idade <= 69 && doacao === true){
    console.log(`${nome} está apto(a) a doar sangue.`);
}else if (idade >= 60 && idade <=69 && doacao === false){
    console.log(`${nome} não está apto(a) a doar sangue.`);
}else{ 
    console.log(`${nome} não está apto(a) a doar sangue.`);
}
