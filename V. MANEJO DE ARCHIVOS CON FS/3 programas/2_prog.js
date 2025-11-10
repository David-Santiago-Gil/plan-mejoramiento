// Importar el módulo 'fs' para manejar el sistema de archivos
const fs = require('fs');

// fs_ejercicio42.js
// Propósito: Crear un archivo JSON a partir de un objeto JavaScript.

const fs = require('fs');
const NOMBRE_ARCHIVO = 'fs_archivo_42_config.json';

const objetoConfiguracion = {
    appName: "GestorDeTareas",
    version: "1.0.0",
    autores: ["Ana", "Pedro"],
    fechaCreacion: new Date().toISOString()
};

try {
    // 1. Convertir el objeto JavaScript a una cadena JSON.
    // El 'null, 2' se usa para darle un formato legible (indentación de 2 espacios).
    const contenidoJSON = JSON.stringify(objetoConfiguracion, null, 2); 

    // 2. Escribir la cadena JSON en el archivo.
    fs.writeFileSync(NOMBRE_ARCHIVO, contenidoJSON, 'utf8');
    
    console.log(`✅ Archivo JSON '${NOMBRE_ARCHIVO}' creado exitosamente.`);
} catch (error) {
    console.error("❌ Error al escribir el archivo JSON:", error.message);
}