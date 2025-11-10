// modulos_ejercicio36_datos.js
// Propósito: Exportar múltiples elementos usando export nombrado.

// 1. Exportación en la declaración (preferida para const, let, var, function, class).
export const PI = 3.14159;

export function saludar(nombre) {
    return `Hola, ${nombre}! Bienvenido.`;
}

// 2. Exportación al final (útil para agrupar exportaciones).
const MAX_USUARIOS = 100;
export { MAX_USUARIOS };

// modulos_ejercicio36_reporte.js
// Propósito: Importar varios elementos nombrados.

// Importación: Se usa el nombre exacto encerrado en llaves {}.
import { PI, saludar, MAX_USUARIOS } from './modulos_ejercicio36_datos.js';

console.log("\n--- Ejercicio 36: Exportación Nombrada (Múltiples) ---");
console.log(`Valor de PI: ${PI}`);
console.log(saludar("Javier"));
console.log(`Límite de usuarios: ${MAX_USUARIOS}`);