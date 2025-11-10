// variables_ejercicio6.js
// Propósito: Demostrar la diferencia y uso de parseInt() y Number() para conversiones numéricas.

const cadenaDecimal = "150.75";
const cadenaEntera = "25";
const cadenaTexto = "50 metros";

// 1. Usando parseInt(): Convierte a entero, trunca la parte decimal.
const resultadoParseInt = parseInt(cadenaDecimal); 
console.log(`parseInt("${cadenaDecimal}"): ${resultadoParseInt} (Tipo: ${typeof resultadoParseInt})`); 
// -> 150

// 2. Usando Number(): Convierte al tipo numérico más apropiado (entero o flotante).
const resultadoNumber = Number(cadenaDecimal);
console.log(`Number("${cadenaDecimal}"): ${resultadoNumber} (Tipo: ${typeof resultadoNumber})`); 
// -> 150.75

// 3. parseInt() ignora caracteres no numéricos después del número.
const resultadoParseTexto = parseInt(cadenaTexto); 
console.log(`parseInt("${cadenaTexto}"): ${resultadoParseTexto}`); 
// -> 50

// 4. Number() retorna NaN si hay caracteres no numéricos al inicio o en el medio.
const resultadoNumberTexto = Number(cadenaTexto);
console.log(`Number("${cadenaTexto}"): ${resultadoNumberTexto}`); 
// -> NaN