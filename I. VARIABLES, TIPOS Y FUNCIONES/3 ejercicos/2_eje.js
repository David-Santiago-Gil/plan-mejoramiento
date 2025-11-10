// variables_ejercicio7.js
// Propósito: Demostrar la conversión explícita a String() y la coerción de tipos.

// Variables de diferentes tipos
const edad = 35; // Number
const esEstudiante = true; // Boolean
const resultadoMatriz = [1, 2, 3]; // Array (Object)

// 1. Conversión explícita con String()
const edadString = String(edad);
const esEstudianteString = String(esEstudiante);

console.log(`Edad (Number): ${edad} -> String(edad): ${edadString} (Tipo: ${typeof edadString})`);
console.log(`Estudiante (Boolean): ${esEstudiante} -> String(esEstudiante): ${esEstudianteString} (Tipo: ${typeof esEstudianteString})`);

// 2. Demostración de Coerción (Conversión implícita)
// Al usar el operador '+' con una cadena, JavaScript convierte el otro operando a cadena.
const mensajeCoercion = "Mi edad es: " + edad + " y mi estatus es: " + esEstudiante;

console.log(`\nCoerción de tipos en concatenación:`);
console.log(mensajeCoercion);
// El valor numérico (35) y booleano (true) se convierten automáticamente a string.

// 3. Conversión de Array a String
const arrayString = String(resultadoMatriz);
console.log(`\nArray [1, 2, 3] convertido a String: "${arrayString}" (Tipo: ${typeof arrayString})`);
// El array se convierte en una cadena separada por comas.