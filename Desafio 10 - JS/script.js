alert("Insira dois números a seguir...")

// Pedindo os números para o cliente
let numberOne = Number(prompt("Digite o primeiro número"))
let numberTwo = Number(prompt("Digite o segundo número"))

// Código para ter os resultados
let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let div = (numberOne / numberTwo).toFixed(2)
let restDiv = numberOne % numberTwo

// Resultados
alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${multi}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${restDiv}`)

// Checar se o número é par ou ímpar
let evenOdd
if(restDiv == 0) {
alert(`A soma dos dois número é par: ${sum}`)
} else {
  alert(`A soma dos dois números é ímpar: ${sum}`)
}

// Checar se os dois números são iguais ou diferentes
if(numberOne == numberTwo) {
  alert(`Os números inseridos são iguais.`)
} else {
  alert(`Os números inseridos são diferentes.`)
}