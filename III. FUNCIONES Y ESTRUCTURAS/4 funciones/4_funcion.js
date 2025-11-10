// funciones_ejercicio24.js
// Propósito: Función tradicional para verificar elegibilidad usando operadores lógicos && y ||.

/**
 * Verifica si un candidato es elegible para un cargo Senior o Junior.
 * @param {number} edad - Edad del candidato.
 * @param {number} experienciaAnos - Años de experiencia laboral.
 * @param {boolean} tieneCertificacion - Si posee una certificación relevante.
 * @returns {string} - Resultado de elegibilidad.
 */
function verificarElegibilidad(edad, experienciaAnos, tieneCertificacion) {
    const EDAD_MINIMA_SENIOR = 30;
    const EXP_MINIMA_SENIOR = 5;
    const EXP_MINIMA_JUNIOR = 1;

    // 1. Condición para Senior: Edad >= 30 AND (Experiencia >= 5 OR Tiene Certificación)
    if (edad >= EDAD_MINIMA_SENIOR && (experienciaAnos >= EXP_MINIMA_SENIOR || tieneCertificacion)) {
        return "Elegible para el rol SENIOR.";
    } 
    
    // 2. Condición para Junior: Experiencia >= 1 AND Edad < 30
    else if (experienciaAnos >= EXP_MINIMA_JUNIOR && edad < EDAD_MINIMA_SENIOR) {
        return "Elegible para el rol JUNIOR.";
    } 
    
    // 3. No elegible
    else {
        // Condición específica para rechazo (Ejemplo de anidamiento)
        if (edad < 18) {
            return "No elegible: Menor de edad.";
        } else {
            return "No elegible: No cumple con los requisitos mínimos de experiencia.";
        }
    }
}

// Pruebas
console.log(`Candidato 1 (35 años, 6 exp, con cert.): ${verificarElegibilidad(35, 6, true)}`); // Senior
console.log(`Candidato 2 (25 años, 2 exp, sin cert.): ${verificarElegibilidad(25, 2, false)}`); // Junior
console.log(`Candidato 3 (32 años, 3 exp, con cert.): ${verificarElegibilidad(32, 3, true)}`); // Senior
console.log(`Candidato 4 (28 años, 0 exp, sin cert.): ${verificarElegibilidad(28, 0, false)}`); // No Elegible