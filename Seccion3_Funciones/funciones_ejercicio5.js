// Ejercicio 5: Arrow function para calcular el cuadrado de un número
// Crea una arrow function que devuelve el cuadrado de un número.

const calcularCuadrado = (numero) => numero * numero;

let numeroIngresado = prompt("Ingresa un número para calcular su cuadrado:");
let resultado = calcularCuadrado(Number(numeroIngresado));

alert("El cuadrado de " + numeroIngresado + " es: " + resultado);
