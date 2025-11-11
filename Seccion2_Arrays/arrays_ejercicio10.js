// arrays_ejercicio10.js
// Demuestra la manipulación de una matriz (array bidimensional).

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Matriz original:");
console.log(matriz);

console.log("Accediendo a un elemento (fila 1, columna 2):", matriz[1][2]);

console.log("Recorriendo la matriz con bucles anidados:");
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`Elemento en [${i}][${j}]: ${matriz[i][j]}`);
  }
}

alert("Se ha demostrado la manipulación de matrices. Revisa la consola.");
