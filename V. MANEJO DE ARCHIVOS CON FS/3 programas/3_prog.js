// Importar el módulo 'fs' para manejar el sistema de archivos
const fs = require('fs');

// fs_ejercicio43.js
// Propósito: Crear un archivo de log solo si no existe, usando fs.existsSync.

const fs = require('fs');
const LOG_FILE = 'fs_log_43.txt';
const TIEMPO = new Date().toLocaleTimeString();

// 1. Verificar si el archivo ya existe.
if (fs.existsSync(LOG_FILE)) {
    console.log(`Archivo '${LOG_FILE}' ya existe. Agregando una línea...`);
    
    // Si existe, usamos appendFileSync (ver Ejercicio 46) para añadir una nueva línea.
    fs.appendFileSync(LOG_FILE, `\n[${TIEMPO}] - Sesión continuada.`, 'utf8');
} else {
    // 2. Si no existe, crearlo con un encabezado.
    console.log(`Archivo '${LOG_FILE}' NO existe. Creándolo...`);
    const encabezado = `--- LOG DE INICIO - ${new Date().toLocaleDateString()} ---\n`;
    fs.writeFileSync(LOG_FILE, encabezado, 'utf8');
    
    fs.appendFileSync(LOG_FILE, `[${TIEMPO}] - Sesión iniciada.`, 'utf8');
}

console.log("Proceso de logging completado.");