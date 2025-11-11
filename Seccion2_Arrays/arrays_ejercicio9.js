// arrays_ejercicio9.js
// Recorre un array utilizando forEach.

let colores = ["rojo", "verde", "azul", "amarillo"];
console.log("Array original:", colores);

console.log("Recorriendo el array con forEach:");
colores.forEach(function(color) {
  console.log("- " + color);
});

alert("Se ha recorrido un array con forEach. Revisa la consola.");
