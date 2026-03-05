const leia = require("readline-sync");

let continuar = true
let idade, genero, desenvolver;
let totalBackend = 0
let totalFrontend = 0
let totalMobile = 0
let totalFullstack = 0
let totalPessoas = 0
let totalIdade = 0


while(continuar === true){
     idade = leia.questionInt("Digite a sua idade: ")
     genero = leia.questionInt("Digite sua identidade de gênero \n1 - Mulher Cis; \n2 - Homem Cis; \n3 - Não Binário; \n4 – Mulher Trans; \n5 – Homem Trans; \n6 - Outros:")
     desenvolver = leia.questionInt("Digite sua especialidade \n1 – Backend; \n2 – Frontend; \n3 – Mobile; \n4 – FullStack: ")
     totalPessoas++
     totalIdade = totalIdade + idade
        if(desenvolver === 1)
            totalBackend++
        else if((genero === 1 || genero === 4) && desenvolver === 2 )
            totalFrontend++
        else if((genero === 2 || genero === 5) && desenvolver === 3 && idade >= 40 )
            totalMobile++
        else if(genero === 3 && desenvolver === 2 && idade <= 30)
            totalFullstack++

        continuar = leia.keyInYN("Deseja continuar? ") 
        
    
        }
        console.log(`Total de pessoas desenvolvedoras Backend: ${totalBackend}`)
        console.log(`Total de Mulheres Cis ou Trans desenvolvedoras Frontend: ${totalFrontend}`)
        console.log(`Total de Homens Cis ou Trans e maiores de 40 anos desenvolvedores Mobile: ${totalMobile}`)
        console.log(`Total de pessoas Não Binárias e menores de 30 anos desenvolvedoras FullStack: ${totalFullstack}`)
        console.log(`Total de pessoas desenvolvedoras: ${totalPessoas} `)
        console.log(`A média de idade das pessoas que responderam à pesquisa: ${totalIdade / totalPessoas}`)

            
    
        
