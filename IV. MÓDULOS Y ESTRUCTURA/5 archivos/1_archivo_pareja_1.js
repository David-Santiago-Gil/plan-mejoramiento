// modulos_ejercicio31_util.js
// Propósito: Exportar una función de cálculo por defecto.

/**
 * Calcula el cuadrado de un número.
 * @param {number} num - Número de entrada.
 * @returns {number} - El número al cuadrado.
 */
const calcularCuadrado = (num) => {
    return num * num;
};

// Exportación por defecto: Solo se puede exportar una cosa.
export default calcularCuadrado;



// modulos_ejercicio31_main.js
// Propósito: Importar y usar la función exportada por defecto.

// Importación: podemos darle CUALQUIER nombre (ej: 'funcionPotencia').
import funcionPotencia from './modulos_ejercicio31_util.js';

console.log("--- Ejercicio 31: Exportación por Defecto (Función) ---");
const resultado = funcionPotencia(8);
console.log(`El cuadrado de 8 es: ${resultado}`); // 64