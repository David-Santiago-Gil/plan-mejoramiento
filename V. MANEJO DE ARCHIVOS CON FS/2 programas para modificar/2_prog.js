// Importar el módulo 'fs' para manejar el sistema de archivos
const fs = require('fs');

// fs_ejercicio48.js
// Propósito: Actualizar el contenido de un archivo JSON (lectura, modificación y reescritura).

const fs = require('fs');
const CONFIG_FILE = 'fs_archivo_42_config.json';

// Asegurar que el archivo exista para poder modificarlo
if (!fs.existsSync(CONFIG_FILE)) {
    const objInicial = { appName: "BaseApp", version: "1.0.0", estado: "Inicial" };
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(objInicial, null, 2), 'utf8');
    console.log(`[SETUP] Archivo '${CONFIG_FILE}' creado para la prueba.`);
}

try {
    // 1. Leer y parsear el contenido actual.
    const jsonString = fs.readFileSync(CONFIG_FILE, 'utf8');
    const config = JSON.parse(jsonString);

    console.log(`Versión actual: ${config.version}`);
    
    // 2. MODIFICAR el objeto en memoria.
    // Simular un cambio de versión y estado.
    config.version = "1.1.0";
    config.estado = "Actualizado";
    config.ultimaModificacion = new Date().toISOString();

    // 3. Convertir el objeto modificado de vuelta a cadena JSON.
    const nuevoContenidoJSON = JSON.stringify(config, null, 2);

    // 4. Reescribir el archivo con el nuevo contenido.
    fs.writeFileSync(CONFIG_FILE, nuevoContenidoJSON, 'utf8');

    console.log(`✅ Archivo '${CONFIG_FILE}' actualizado a la versión ${config.version}.`);

} catch (error) {
    console.error("❌ Error al actualizar el archivo JSON:", error.message);
}