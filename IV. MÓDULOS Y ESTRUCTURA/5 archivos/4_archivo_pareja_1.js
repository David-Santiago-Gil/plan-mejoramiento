// modulos_ejercicio34_const.js
// Propósito: Exportar una constante primitiva (string) por defecto.

const MENSAJE_ERROR = "404 - Recurso no encontrado.";

export default MENSAJE_ERROR;

// modulos_ejercicio34_uso.js
// Propósito: Importar la constante primitiva.

import errorMsg from './modulos_ejercicio34_const.js';

console.log("\n--- Ejercicio 34: Exportación por Defecto (Constante) ---");
console.log(`Mensaje de error: ${errorMsg}`);