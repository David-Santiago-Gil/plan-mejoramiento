// variables_ejercicio3.js
// Propósito: Mostrar un mensaje de saludo personalizado con nombre y edad.

// Declarar variables usando const para valores que no cambiarán.
const nombre = prompt("Por favor, ingrese su nombre:");
const edadString = prompt("Por favor, ingrese su edad:");

// Conversión de tipo a entero para verificar la edad (aunque el resultado es una string).
const edad = parseInt(edadString);

// Comprobación simple para demostrar uso de variables.
if (isNaN(edad)) {
    alert(`Hola ${nombre}, no pudimos confirmar tu edad.`);
} else {
    alert(`¡Hola, ${nombre}! Tienes ${edad} años. Bienvenido/a al mundo JavaScript.`);
}