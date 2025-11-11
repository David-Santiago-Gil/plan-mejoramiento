// Ejercicio 2: Suma de dos números
// Pide al usuario dos números, los suma y muestra el resultado.

let num1 = prompt("Ingresa el primer número:");
let num2 = prompt("Ingresa el segundo número:");

// Convertimos los strings a números antes de sumar
let suma = Number(num1) + Number(num2);

alert("La suma de " + num1 + " y " + num2 + " es: " + suma);
