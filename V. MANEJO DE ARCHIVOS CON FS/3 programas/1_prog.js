// Importar el módulo 'fs' para manejar el sistema de archivos
const fs = require('fs');

// fs_ejercicio41.js
// Propósito: Crear un archivo de texto simple y escribir contenido usando fs.writeFileSync.

const fs = require('fs');
const NOMBRE_ARCHIVO = 'fs_archivo_41_saludo.txt';
const CONTENIDO = '¡Hola Mundo! Este es mi primer archivo creado con Node.js File System.';

try {
    // fs.writeFileSync: Escribe datos en un archivo, reemplazando el archivo si ya existe.
    fs.writeFileSync(NOMBRE_ARCHIVO, CONTENIDO, 'utf8');
    console.log(`✅ Archivo '${NOMBRE_ARCHIVO}' creado y escrito exitosamente.`);
} catch (error) {
    console.error("❌ Error al escribir el archivo:", error.message);
}