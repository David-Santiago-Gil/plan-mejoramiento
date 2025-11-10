// funciones_ejercicio27.js
// Propósito: Arrow function con cuerpo explícito ({}) y múltiples retornos para calcular el IMC.

/**
 * Calcula el Índice de Masa Corporal (IMC) y retorna su clasificación.
 * @param {number} pesoKg - Peso en kilogramos.
 * @param {number} alturaM - Altura en metros.
 * @returns {string} - El valor del IMC y su clasificación.
 */
const calcularIMC = (pesoKg, alturaM) => {
    // Es necesario usar un cuerpo explícito {} porque hay varias líneas de lógica y retornos condicionales.

    if (pesoKg <= 0 || alturaM <= 0) {
        return "Datos inválidos: Peso y altura deben ser positivos.";
    }

    // Fórmula IMC: peso / (altura * altura)
    const imc = pesoKg / (alturaM * alturaM);

    let clasificacion;

    if (imc < 18.5) {
        clasificacion = "Bajo Peso";
    } else if (imc >= 18.5 && imc < 25) {
        clasificacion = "Peso Normal";
    } else if (imc >= 25 && imc < 30) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    // Retorna el resultado completo
    return `IMC: ${imc.toFixed(2)} - Clasificación: ${clasificacion}`;
};

// Pruebas (Ejemplo: 70kg, 1.75m -> IMC 22.86)
console.log(`Candidato 1 (70kg, 1.75m): ${calcularIMC(70, 1.75)}`); 
// Ejemplo: 90kg, 1.70m -> IMC 31.14
console.log(`Candidato 2 (90kg, 1.70m): ${calcularIMC(90, 1.70)}`);