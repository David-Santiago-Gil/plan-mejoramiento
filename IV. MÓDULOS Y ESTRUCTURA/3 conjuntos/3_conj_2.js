// modulos_ejercicio38_main.js
// Propósito: Importar con alias y sin alias para renombrar los elementos importados.

// 1. Importar 'logConsola' con su nuevo nombre 'log'.
// 2. Importar 'logError' y darle un alias local 'mostrarError'.
import { log, logError as mostrarError } from './modulos_ejercicio38_utils.js';

console.log("\n--- Ejercicio 38: Alias en Exportación e Importación ---");
log("Iniciando la aplicación...");
mostrarError("Fallo al cargar datos.");