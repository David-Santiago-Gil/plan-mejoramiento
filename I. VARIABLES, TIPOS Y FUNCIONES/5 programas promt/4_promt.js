// variables_ejercicio4.js
// Propósito: Convertir una temperatura de grados Celsius a Fahrenheit.
// Fórmula: F = (C * 9/5) + 32

const celsiusString = prompt("Ingrese la temperatura en grados Celsius (°C):");

// Conversión de string a número decimal (flotante)
const celsius = parseFloat(celsiusString);

// Declaración de variable para el resultado con 'let' ya que se calcula.
let fahrenheit;

// Lógica de conversión.
if (!isNaN(celsius)) {
    fahrenheit = (celsius * (9/5)) + 32;
    // Usar console.log para el desarrollador y alert() para el usuario.
    console.log(`C: ${celsius} -> F: ${fahrenheit}`);
    alert(`La temperatura de ${celsius}°C equivale a ${fahrenheit.toFixed(2)}°F.`);
} else {
    alert("Entrada inválida. Por favor, ingrese un número.");
}