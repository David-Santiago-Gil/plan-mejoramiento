// arrays_ejercicio14.js
// Propósito: Demostrar los métodos sort() y reverse() para manipular el orden.

const numeros = [50, 10, 40, 20, 30];
const nombres = ["Carlos", "Ana", "David", "Beatriz"];
console.log("Números Inicial:", numeros);
console.log("Nombres Inicial:", nombres);

// 1. sort() para ordenar cadenas: Ordena alfabéticamente por defecto (modifica el array original).
nombres.sort();
console.log("\nNombres después de sort():", nombres);
// Resultado: ["Ana", "Beatriz", "Carlos", "David"]

// 2. sort() para números: Requiere una función de comparación para ordenar correctamente.
// Por defecto, sort() ordena números como cadenas (ej: 10 < 2).
numeros.sort((a, b) => a - b); // Orden Ascendente
console.log("Números después de sort() con función de comparación (Ascendente):", numeros);
// Resultado: [10, 20, 30, 40, 50]

// 3. reverse(): Invierte el orden de los elementos (modifica el array original).
numeros.reverse();
console.log("Números después de reverse() (Descendente):", numeros);
// Resultado: [50, 40, 30, 20, 10]

// 4. Encadenar métodos: Ordenar y luego revertir.
nombres.sort().reverse();
console.log("Nombres después de sort() y luego reverse() (Alfabético Inverso):", nombres);
// Resultado: ["David", "Carlos", "Beatriz", "Ana"]