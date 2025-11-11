// modulos_ejercicio33_registro.js
// Propósito: Importar y crear una instancia de la clase exportada.

// Importación: Usamos 'Usuario' como alias para la clase Persona.
import Usuario from './modulos_ejercicio33_persona.js';

console.log("\n--- Ejercicio 33: Exportación por Defecto (Clase) ---");
const nuevoRegistro = new Usuario("Elena", 28);
console.log(nuevoRegistro.saludar());