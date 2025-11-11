// Ejercicio 8: Coerción de tipo booleano
// Muestra cómo un booleano se convierte a otros tipos.

let valorBooleano = true;

console.log("Valor booleano original: " + valorBooleano);

// Coerción a número
let booleanoANumero = Number(valorBooleano);
console.log("Booleano convertido a número: " + booleanoANumero);

// Coerción a string
let booleanoAString = String(valorBooleano);
console.log("Booleano convertido a string: '" + booleanoAString + "'");

alert("Se han demostrado las conversiones de un booleano en la consola.");
