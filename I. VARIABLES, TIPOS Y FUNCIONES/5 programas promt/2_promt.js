// variables_ejercicio2.js
// Propósito: Calcular el área de un rectángulo (base * altura).

// 1. Declarar variables usando let.
let baseString;
let alturaString;

// 2. Usar prompt() para la entrada de datos.
baseString = prompt("Ingrese la longitud de la base del rectángulo:");
alturaString = prompt("Ingrese la longitud de la altura del rectángulo:");

// 3. Convertir las entradas a valores numéricos.
const base = parseFloat(baseString);
const altura = parseFloat(alturaString);

// 4. Aplicar la fórmula del área.
const area = base * altura;

// 5. Mostrar el resultado usando alert() y console.log().
alert(`Base: ${base} | Altura: ${altura} | Área Calculada: ${area}`);
console.log(`El área del rectángulo es: ${area}`);