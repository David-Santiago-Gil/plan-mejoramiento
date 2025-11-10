// Importar el módulo 'fs' para manejar el sistema de archivos
const fs = require('fs');

// fs_ejercicio47.js
// Propósito: Agregar (append) nuevo contenido al final de un archivo existente.

const fs = require('fs');
// Usamos un archivo de log para demostrar el append.
const LOG_FILE = 'fs_log_43.txt'; 
const MENSAJE_NUEVO = `[${new Date().toLocaleTimeString()}] - Proceso de actualización ejecutado.`;

// Asegurar que el archivo exista para poder añadirle contenido
if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, `--- INICIO DE LOG ---\n`, 'utf8');
    console.log(`[SETUP] Archivo '${LOG_FILE}' creado para el append.`);
}

try {
    // 1. Definir el contenido a añadir (incluyendo el salto de línea al inicio).
    const contenidoAAgregar = `\n${MENSAJE_NUEVO}`;

    // 2. fs.appendFileSync: Añade datos al final del archivo.
    fs.appendFileSync(LOG_FILE, contenidoAAgregar, 'utf8');
    
    console.log(`✅ Nuevo mensaje añadido al archivo '${LOG_FILE}'.`);
    console.log(`Contenido añadido: ${MENSAJE_NUEVO}`);
} catch (error) {
    console.error("❌ Error al añadir contenido:", error.message);
}