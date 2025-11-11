// modulos_ejercicio8.js
// Importa las funciones de utilidad.

import { capitalizar, esVocal } from './modulo_utilidades.js';

let texto = "hola mundo";
let letra = "A";

console.log(`'${texto}' capitalizado es: '${capitalizar(texto)}'`);
console.log(`'${letra}' es vocal: ${esVocal(letra)}`);

alert("Se han importado y utilizado funciones de utilidad desde otro módulo. Revisa la consola.");
