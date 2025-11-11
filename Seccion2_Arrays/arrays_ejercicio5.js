// Ejercicio 5: Transformar un array con map()
// Crea un array de números y devuelve un nuevo array con el doble de cada número.

let numeros = [1, 2, 3, 4, 5];
console.log("Array original:", numeros);

let dobles = numeros.map(function(numero) {
  return numero * 2;
});

console.log("Nuevo array con los dobles (usando map):", dobles);

alert("Se ha demostrado el uso de map() en la consola.");
