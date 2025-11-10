// variables_ejercicio9.js
// Propósito: Ejemplificar el uso de 'let' y su capacidad de reasignación.

// 1. Declaración con let.
let contador = 10;
console.log(`Valor inicial de contador (let): ${contador}`); // 10

// 2. Reasignación permitida.
contador = contador + 5;
console.log(`Valor después de reasignación: ${contador}`); // 15

// 3. Se puede declarar sin inicialización (aunque no es buena práctica).
let resultado;
resultado = contador * 2;
console.log(`Valor de resultado (let): ${resultado}`); // 30

// 4. let tiene scope de bloque.
if (true) {
    let mensaje = "Visible solo dentro del bloque if.";
    console.log(mensaje);
}
// La siguiente línea causaría un error: console.log(mensaje);