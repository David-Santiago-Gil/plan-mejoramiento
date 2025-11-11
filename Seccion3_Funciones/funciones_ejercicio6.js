// Ejercicio 6: Arrow function para concatenar dos strings
// Crea una arrow function que recibe dos strings y los concatena.

const concatenarStrings = (str1, str2) => str1 + " " + str2;

let string1 = prompt("Ingresa la primera palabra:");
let string2 = prompt("Ingresa la segunda palabra:");

let resultado = concatenarStrings(string1, string2);

alert("Las palabras concatenadas son: '" + resultado + "'");
