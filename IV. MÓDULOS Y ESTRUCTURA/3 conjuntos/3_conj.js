// modulos_ejercicio38_utils.js
// Propósito: Usar alias en la exportación para renombrar los elementos.

const logConsola = (msg) => console.log(`[LOG]: ${msg}`);
const logError = (msg) => console.error(`[ERROR]: ${msg}`);

// Exportación con alias 'as': Se cambia el nombre original 'logConsola' por 'log'.
export { 
    logConsola as log, 
    logError 
};

