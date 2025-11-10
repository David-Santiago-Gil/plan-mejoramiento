// funciones_ejercicio21.js
// Propósito: Función tradicional para clasificar una nota usando if, else if, else.

/**
 * Clasifica una nota numérica en una categoría textual (Sobresaliente, Aprobado, Reprobado).
 * @param {number} nota - La calificación obtenida (ej: 0 a 5.0).
 * @returns {string} - La clasificación de la nota.
 */
function clasificarNota(nota) {
    console.log(`Evaluando nota: ${nota}`);
    
    // Validamos que sea un número válido
    if (typeof nota !== 'number' || isNaN(nota) || nota < 0 || nota > 5.0) {
        return "Nota Inválida: Debe ser un número entre 0.0 y 5.0";
    }

    // Lógica condicional compleja
    if (nota >= 4.5) {
        return "Sobresaliente"; // Retorno inmediato
    } else if (nota >= 3.0) {
        return "Aprobado";
    } else if (nota >= 2.0) {
        return "Necesita Mejorar";
    } else {
        // Todo lo demás por debajo de 2.0
        return "Reprobado";
    }
}

// Pruebas
console.log(`Nota 4.8: ${clasificarNota(4.8)}`);
console.log(`Nota 3.2: ${clasificarNota(3.2)}`);
console.log(`Nota 2.1: ${clasificarNota(2.1)}`);
console.log(`Nota 1.5: ${clasificarNota(1.5)}`);
console.log(`Nota "texto": ${clasificarNota("texto")}`);