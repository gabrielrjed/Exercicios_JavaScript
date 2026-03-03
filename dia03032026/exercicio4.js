import leia from "readline-sync";

let laranja = leia.question("O seu animal é (vertebrado ou invertebrado): ");
let amarelo = leia.question("O seu animal é (ave, mamifero, inseto ou anelideo): ");
let vermelho = leia.question("O seu animal é (carnivoro, onivoro, herbivoro ou hematofago): ");

if(laranja === "vertebrado" && amarelo === "ave" && vermelho === "carnivoro"){
    console.log("É uma Águia")
}else if(laranja === "vertebrado" && amarelo === "ave" && vermelho === "onivoro"){
    console.log("É um Pomba")
}else if(laranja === "vertebrado" && amarelo === "mamifero" && vermelho === "onivoro"){
    console.log("É um Homem")
}else if(laranja === "vertebrado" && amarelo === "mamifero" && vermelho === "herbivoro"){
    console.log("É uma Vaca")
}else if(laranja === "invertebrado" && amarelo === "inseto" && vermelho === "hematofago"){
    console.log("É uma Pulga")
}else if(laranja === "invertebrado" && amarelo === "inseto" && vermelho === "herbivoro"){
    console.log("É uma Lagarta")
}else if(laranja === "invertebrado" && amarelo === "anelideo" && vermelho === "hematofago"){
    console.log("É uma Sanguessuga")
}else if(laranja === "invertebrado" && amarelo === "anelideo" && vermelho === "onivoro"){
    console.log("É uma Minhoca")
}else{
    console.log("Animal não identificado")
}






