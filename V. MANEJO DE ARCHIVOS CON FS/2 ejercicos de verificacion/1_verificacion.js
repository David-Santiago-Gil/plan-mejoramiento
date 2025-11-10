// Importar el módulo 'fs' para manejar el sistema de archivos
const fs = require('fs');

// fs_ejercicio49.js
// Propósito: Usar fs.existsSync para verificar la existencia de archivos.

const fs = require('fs');
const ARCHIVO_EXISTENTE = 'fs_archivo_41_saludo.txt'; // Debería existir si ejecutas los anteriores
const ARCHIVO_INEXISTENTE = 'fs_no_existe.tmp';

console.log("--- Verificación de Archivos ---");

// 1. Verificar un archivo que existe.
if (fs.existsSync(ARCHIVO_EXISTENTE)) {
    console.log(`✅ El archivo '${ARCHIVO_EXISTENTE}' SÍ existe.`);
} else {
    console.log(`❌ El archivo '${ARCHIVO_EXISTENTE}' NO existe.`);
}

// 2. Verificar un archivo que NO existe.
if (fs.existsSync(ARCHIVO_INEXISTENTE)) {
    console.log(`❌ El archivo '${ARCHIVO_INEXISTENTE}' SÍ existe.`);
} else {
    console.log(`✅ El archivo '${ARCHIVO_INEXISTENTE}' NO existe.`);
}