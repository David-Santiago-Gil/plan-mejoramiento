// modulos_ejercicio37_app.js
// Propósito: Importar todas las exportaciones nombradas bajo un único alias (* as).

// Importación de todo: Se importa TODO lo exportado como 'calculadora'.
import * as calculadora from './modulos_ejercicio37_math.js';

console.log("\n--- Ejercicio 37: Importar Todo como Alias (* as) ---");
const num1 = 20, num2 = 5;
console.log(`Suma: ${calculadora.sumar(num1, num2)}`); 
console.log(`Resta: ${calculadora.restar(num1, num2)}`); 
console.log(`Multiplicación: ${calculadora.multiplicar(num1, num2)}`);