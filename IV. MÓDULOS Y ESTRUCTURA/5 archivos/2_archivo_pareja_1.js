// modulos_ejercicio32_config.js
// Propósito: Exportar un objeto de configuración por defecto.

const configuracionGlobal = {
    apiKey: "ABCD-1234-EFGH-5678",
    maxElementos: 50,
    modoOscuro: true
};

export default configuracionGlobal;


// modulos_ejercicio32_app.js
// Propósito: Importar el objeto de configuración.

// Importación: Se importa el objeto completo con el nombre 'settings'.
import settings from './modulos_ejercicio32_config.js';

console.log("\n--- Ejercicio 32: Exportación por Defecto (Objeto) ---");
console.log(`API Key utilizada: ${settings.apiKey}`);
if (settings.modoOscuro) {
    console.log("La aplicación está en modo oscuro.");
}