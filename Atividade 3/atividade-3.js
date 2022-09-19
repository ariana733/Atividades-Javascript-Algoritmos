//3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

alert("Olá! Vamos calcular a área e o perímetro de uma circunferência!")
let raio = Number (prompt ("Insira um número de raio da circunferência"))
const pi = 3.14
let area = pi * (raio**2)
alert("O valor da área é de =" + area)
let perimetro = 2 * pi * raio
alert ("o valor do perímetro é de =" + perimetro)