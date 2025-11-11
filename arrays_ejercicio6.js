// Ejercicio 6: Filtrar un array con filter()
// Crea un array de números y devuelve un nuevo array solo con los números pares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array original:", numeros);

let pares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log("Nuevo array con los números pares (usando filter):", pares);

alert("Se ha demostrado el uso de filter() en la consola.");
