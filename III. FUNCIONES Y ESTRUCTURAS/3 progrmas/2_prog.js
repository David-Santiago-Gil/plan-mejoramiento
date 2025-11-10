// funciones_ejercicio26.js
// Propósito: Arrow function que utiliza un bucle for para generar una secuencia.

/**
 * Genera una secuencia de números pares hasta un límite dado.
 * @param {number} limite - El número máximo de la secuencia (exclusivo).
 * @returns {number[]} - Un array con los números pares.
 */
const generarPares = (limite) => {
    const pares = [];
    
    // Bucle for para iterar y verificar la condición
    for (let i = 0; i < limite; i++) {
        // Lógica condicional: uso del operador módulo (%) para verificar si es par
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    
    return pares;
};

// Pruebas
const secuencia10 = generarPares(10);
console.log("Pares hasta 10:", secuencia10); // [0, 2, 4, 6, 8]

const secuencia21 = generarPares(21);
console.log("Pares hasta 21:", secuencia21);