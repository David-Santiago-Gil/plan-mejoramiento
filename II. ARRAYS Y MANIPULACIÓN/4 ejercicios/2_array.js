// arrays_ejercicio12.js
// Propósito: Demostrar el uso del método splice() para eliminar y añadir elementos en cualquier posición.

let inventario = ["Manzanas", "Peras", "Naranjas", "Plátanos", "Uvas"];
console.log("Inventario Inicial:", inventario);

// 1. Eliminar 2 elementos a partir del índice 1 (Peras y Naranjas).
// splice(índiceInicio, númeroDeElementosAEliminar)
const eliminados = inventario.splice(1, 2);
console.log(`\nDespués de splice(1, 2) (Eliminados: ${eliminados}):`, inventario);
// Resultado: ["Manzanas", "Plátanos", "Uvas"]

// 2. Insertar 3 nuevos elementos en el índice 1 (donde antes estaban las Peras).
// splice(índiceInicio, 0, elemento1, elemento2, ...)
inventario.splice(1, 0, "Kiwi", "Mango", "Piña");
console.log("Después de splice(1, 0, ...):", inventario);
// Resultado: ["Manzanas", "Kiwi", "Mango", "Piña", "Plátanos", "Uvas"]

// 3. Reemplazar un elemento: Eliminar 1 elemento e insertar 1 elemento, a partir del índice 4.
// Reemplazamos "Plátanos" por "Melocotón".
inventario.splice(4, 1, "Melocotón");
console.log("Después de reemplazar 'Plátanos' por 'Melocotón':", inventario);
// Resultado: ["Manzanas", "Kiwi", "Mango", "Piña", "Melocotón", "Uvas"]