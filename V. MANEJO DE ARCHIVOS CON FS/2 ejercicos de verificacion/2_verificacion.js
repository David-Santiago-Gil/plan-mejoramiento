// Importar el módulo 'fs' para manejar el sistema de archivos
const fs = require('fs');

// fs_ejercicio50.js
// Propósito: Eliminar un archivo usando fs.unlinkSync, previa verificación de existencia.

const fs = require('fs');
// Seleccionamos un archivo para eliminar (Ej: el log)
const ARCHIVO_A_ELIMINAR = 'fs_log_43.txt'; 

console.log(`Intentando eliminar el archivo: '${ARCHIVO_A_ELIMINAR}'`);

// 1. Verificar existencia: Es crucial para evitar errores si el archivo ya fue borrado.
if (fs.existsSync(ARCHIVO_A_ELIMINAR)) {
    try {
        // 2. Eliminar el archivo.
        fs.unlinkSync(ARCHIVO_A_ELIMINAR);
        console.log(`✅ Archivo '${ARCHIVO_A_ELIMINAR}' eliminado exitosamente.`);
    } catch (error) {
        console.error("❌ Error al intentar eliminar el archivo:", error.message);
    }
} else {
    console.log(`❌ No se puede eliminar: El archivo '${ARCHIVO_A_ELIMINAR}' no existe.`);
}

// Verificación post-eliminación
if (!fs.existsSync(ARCHIVO_A_ELIMINAR)) {
    console.log("Verificación: Archivo ya no se encuentra en el disco.");
}