//6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

alert ("Vamos calcular a divisão de números inteiros!")
//Number.isInteger(value)
let numero1 = parseInt (prompt("Insira o valor 1"))
let numero2 = parseInt (prompt("Insira o valor 2"))

let calculo = numero1 / numero2
alert("Quociente da divisão: " + calculo)

calculo = numero1 % numero2
alert("Resto da Divisão: " + calculo)
