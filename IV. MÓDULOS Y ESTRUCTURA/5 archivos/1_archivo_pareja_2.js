// modulos_ejercicio31_main.js
// Propósito: Importar y usar la función exportada por defecto.

// Importación: podemos darle CUALQUIER nombre (ej: 'funcionPotencia').
import funcionPotencia from './modulos_ejercicio31_util.js';

console.log("--- Ejercicio 31: Exportación por Defecto (Función) ---");
const resultado = funcionPotencia(8);
console.log(`El cuadrado de 8 es: ${resultado}`); // 64