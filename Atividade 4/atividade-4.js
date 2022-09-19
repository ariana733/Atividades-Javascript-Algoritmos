//4. Dado os três lados de um triângulo determinar o perímetro do mesmo.

alert("Olá! Vamos calcular a área e o perímetro de um triângulo!")
let raio = Number (prompt ("Insira um número de raio da circunferência"))
const pi = 3.14
let area = pi * (raio**2)
alert("O valor da área é de =" + area)
let perimetro = 2 * pi * raio
alert ("o valor do perímetro é de =" + perimetro)