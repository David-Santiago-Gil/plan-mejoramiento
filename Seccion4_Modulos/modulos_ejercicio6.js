// modulos_ejercicio6.js
// Importa las funciones y variables del módulo de exportación nombrada.

import { PI, sumar, restar } from './modulo_nombrado.js';

console.log("El valor de PI es:", PI);
console.log("La suma de 5 y 3 es:", sumar(5, 3));
console.log("La resta de 10 y 4 es:", restar(10, 4));

alert("Se han importado y utilizado funciones y variables con nombres desde otro módulo. Revisa la consola.");
