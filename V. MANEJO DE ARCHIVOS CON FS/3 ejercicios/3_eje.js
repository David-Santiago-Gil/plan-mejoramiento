// fs_ejercicio46.js
// Propósito: Leer un archivo y contar el número de líneas que contiene.

const fs = require('fs');
// Usamos el archivo de log creado en el Ejercicio 43, o lo creamos si no existe.
const NOMBRE_ARCHIVO = 'fs_log_43.txt'; 

// Crear el archivo si no existe para asegurar la prueba
if (!fs.existsSync(NOMBRE_ARCHIVO)) {
    fs.writeFileSync(NOMBRE_ARCHIVO, "Línea 1\nLínea 2\nLínea 3", 'utf8');
    console.log(`[SETUP] Archivo '${NOMBRE_ARCHIVO}' creado para la prueba.`);
}

try {
    const contenido = fs.readFileSync(NOMBRE_ARCHIVO, 'utf8');
    
    // 1. Separar el contenido por el carácter de nueva línea (\n) para obtener un array de líneas.
    const lineas = contenido.split('\n');

    // 2. Contar el número de elementos en el array (que es igual al número de líneas).
    const numeroLineas = lineas.length;

    console.log(`✅ El archivo '${NOMBRE_ARCHIVO}' tiene ${numeroLineas} líneas.`);
    console.log(`Primera línea: ${lineas[0]}`);

} catch (error) {
    console.error("❌ Error al contar las líneas del archivo:", error.message);
}