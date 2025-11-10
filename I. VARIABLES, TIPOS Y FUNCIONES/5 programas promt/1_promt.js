// variables_ejercicio1.js
// Propósito: Pedir dos números y mostrar su suma usando prompt() y alert().

// Pedir el primer número. prompt() devuelve una cadena (string).
const num1String = prompt("Ingrese el primer número para sumar:");

// Pedir el segundo número.
const num2String = prompt("Ingrese el segundo número para sumar:");

// Convertir las cadenas a números usando Number() para realizar la suma.
// Si el usuario presiona 'Cancelar' o no ingresa un número, el resultado será NaN.
const num1 = Number(num1String);
const num2 = Number(num2String);

// Realizar la suma.
const suma = num1 + num2;

// Mostrar el resultado en una ventana de alerta.
alert(`El primer número es: ${num1}\nEl segundo número es: ${num2}\nLa suma total es: ${suma}`);

// Nota: En un entorno de consola (como Node.js), usarías 'readline' o variables directas.v