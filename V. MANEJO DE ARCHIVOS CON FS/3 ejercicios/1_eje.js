// Importar el módulo 'fs' para manejar el sistema de archivos
const fs = require('fs');

// fs_ejercicio44.js
// Propósito: Leer el contenido de un archivo de texto existente.

const fs = require('fs');
// Asegúrate de que este archivo exista (puedes usar el creado en el Ejercicio 41).
const NOMBRE_ARCHIVO = 'fs_archivo_41_saludo.txt'; 

try {
    // fs.readFileSync: Retorna el contenido del archivo como un Buffer.
    // El segundo argumento ('utf8') convierte ese Buffer a una cadena legible.
    const contenidoLeido = fs.readFileSync(NOMBRE_ARCHIVO, 'utf8');
    
    console.log(`✅ Lectura exitosa de '${NOMBRE_ARCHIVO}'. Contenido:`);
    console.log("-----------------------------------------");
    console.log(contenidoLeido);
    console.log("-----------------------------------------");
} catch (error) {
    // Se captura el error si el archivo no existe (ENOENT).
    console.error(`❌ Error al leer el archivo. Asegúrese de que '${NOMBRE_ARCHIVO}' exista.`);
    console.error(`Mensaje de error: ${error.message}`);
}