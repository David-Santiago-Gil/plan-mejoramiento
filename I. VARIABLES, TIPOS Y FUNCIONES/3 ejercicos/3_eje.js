// variables_ejercicio8.js
// Propósito: Demostrar la conversión a tipo Boolean y la Coerción de tipos numérica.

// *** Parte 1: Conversión explícita a Boolean ***
// Todos los valores son "truthy" (verdaderos) excepto: 0, "", null, undefined, NaN, false.

console.log("--- Conversión a Boolean() ---");
console.log(`Boolean(0): ${Boolean(0)}`);         // false (falsy)
console.log(`Boolean(null): ${Boolean(null)}`);   // false (falsy)
console.log(`Boolean("Hola"): ${Boolean("Hola")}`); // true (truthy)
console.log(`Boolean(123): ${Boolean(123)}`);     // true (truthy)
console.log(`Boolean([]): ${Boolean([])}`);       // true (truthy) - Un array vacío es truthy

// *** Parte 2: Coerción de tipos numérica (implícita) ***

const stringNum = "5";
const numero = 2;
const booleano = true; // true se coerciona a 1
const nulo = null; // null se coerciona a 0
const indefinido = undefined; // undefined se coerciona a NaN

console.log("\n--- Coerción de Tipos Numérica (con operador '*') ---");

// La multiplicación fuerza a ambos operandos a convertirse en números.
console.log(`"5" * 2 (String * Number): ${stringNum * numero}`); // 10
console.log(`5 * true (Number * Boolean): ${numero * booleano}`); // 2 * 1 = 2
console.log(`5 * null (Number * Null): ${numero * nulo}`); // 2 * 0 = 0
console.log(`5 * undefined (Number * Undefined): ${numero * indefinido}`); // 2 * NaN = NaN