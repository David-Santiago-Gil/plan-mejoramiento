// funciones_ejercicio25.js
// Propósito: Arrow function que utiliza la estructura switch para manejar múltiples casos de operación.

/**
 * Realiza una operación matemática básica entre dos números.
 * @param {number} a - Primer operando.
 * @param {number} b - Segundo operando.
 * @param {string} operacion - Tipo de operación ('sumar', 'restar', 'multiplicar', 'dividir').
 * @returns {number|string} - El resultado de la operación o un mensaje de error.
 */
const calculadora = (a, b, operacion) => {
    switch (operacion.toLowerCase()) {
        case 'sumar':
            return a + b;
        case 'restar':
            return a - b;
        case 'multiplicar':
            return a * b;
        case 'dividir':
            // Lógica condicional: evitar la división por cero
            if (b === 0) {
                return "Error: División por cero no permitida.";
            }
            return a / b;
        default:
            return "Operación no reconocida.";
    }
};

// Pruebas
console.log(`10 + 5: ${calculadora(10, 5, 'sumar')}`);
console.log(`10 / 2: ${calculadora(10, 2, 'dividir')}`);
console.log(`10 / 0: ${calculadora(10, 0, 'dividir')}`);
console.log(`10 ^ 5: ${calculadora(10, 5, 'potencia')}`);