// arrays_ejercicio7.js
// Suma todos los elementos de un array con reduce()

let numeros = [1, 2, 3, 4, 5];
console.log("Array original:", numeros);

let sumaTotal = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);

console.log("La suma de todos los números es:", sumaTotal);

alert("Se ha demostrado el uso de reduce() en la consola.");
