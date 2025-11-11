// modulos_ejercicio9.js
// Archivo principal de la calculadora.

import { sumar, restar, multiplicar, dividir } from './calculadora_operaciones.js';

let num1 = 10;
let num2 = 5;

console.log(`Suma: ${sumar(num1, num2)}`);
console.log(`Resta: ${restar(num1, num2)}`);
console.log(`Multiplicación: ${multiplicar(num1, num2)}`);
console.log(`División: ${dividir(num1, num2)}`);

alert("Se ha creado una calculadora modular. Revisa la consola para ver los resultados.");
