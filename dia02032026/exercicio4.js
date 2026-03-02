let n1 = 5.0
let n2 = 6.0
let n3 = 7.0
let n4 = 8.0

const leia = require("readline-sync")

n1 = leia.questionFloat("Digite a primeira nota: ")
n2 = leia.questionFloat("Digite a segunda nota: ")
n3 = leia.questionFloat("Digite a terceira nota: ")
n4 = leia.questionFloat("Digite a quarta nota: ")

calculo = (n1 * n2) - (n3 * n4)
console.log(`O resultado do calculo é: ${calculo}`)

calculo2 = (n1 * n2) - (- n3 * n4)
console.log(`o resultado do calculo 2 é: ${calculo2}`)