// funciones_ejercicio23.js
// Propósito: Función tradicional para determinar el tipo de día (laboral, fin de semana, festivo).

/**
 * Determina el tipo de día basado en el número de día de la semana y si es festivo.
 * @param {number} dia - Número del día (1=Lunes, 7=Domingo).
 * @param {boolean} esFestivo - Indica si es un día festivo.
 * @returns {string} - Clasificación del día.
 */
function tipoDeDia(dia, esFestivo) {
    
    // 1. Condición de máxima prioridad (Anidamiento/Prioridad)
    if (esFestivo) {
        return "Día Festivo - Descanso";
    }

    // 2. Lógica para fin de semana
    if (dia === 6 || dia === 7) { // Sábado (6) o Domingo (7)
        return "Fin de Semana - Descanso";
    } 
    
    // 3. Lógica para día laboral
    else if (dia >= 1 && dia <= 5) { // Lunes (1) a Viernes (5)
        return "Día Laboral";
    } 
    
    // 4. Condición de error
    else {
        return "Número de día inválido. Debe ser entre 1 y 7.";
    }
}

// Pruebas
console.log(`Martes (3, No Festivo): ${tipoDeDia(3, false)}`); 
console.log(`Sábado (6, No Festivo): ${tipoDeDia(6, false)}`); 
console.log(`Miércoles (4, Sí Festivo): ${tipoDeDia(4, true)}`); 
console.log(`Día 8: ${tipoDeDia(8, false)}`);