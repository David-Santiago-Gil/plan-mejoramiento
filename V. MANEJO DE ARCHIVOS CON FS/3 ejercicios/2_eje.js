// Importar el módulo 'fs' para manejar el sistema de archivos
const fs = require('fs');

// fs_ejercicio45.js
// Propósito: Leer un archivo JSON y convertir su contenido a un objeto JavaScript para su uso.

const fs = require('fs');
// Usamos el archivo JSON creado en el Ejercicio 42.
const NOMBRE_ARCHIVO = 'fs_archivo_42_config.json';

try {
    // 1. Leer el archivo como una cadena (string).
    const jsonString = fs.readFileSync(NOMBRE_ARCHIVO, 'utf8');

    // 2. Usar JSON.parse para convertir la cadena JSON en un objeto JavaScript.
    const objetoParseado = JSON.parse(jsonString);

    console.log(`✅ Archivo JSON '${NOMBRE_ARCHIVO}' leído y parseado exitosamente.`);
    
    // Acceder a las propiedades del objeto JavaScript
    console.log(`\nNombre de la App: ${objetoParseado.appName}`);
    console.log(`Versión: ${objetoParseado.version}`);
    console.log(`Primer Autor: ${objetoParseado.autores[0]}`);

} catch (error) {
    console.error("❌ Error al procesar el archivo JSON:", error.message);
}