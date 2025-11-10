// funciones_ejercicio28.js
// Propósito: Usar el operador ternario para determinar si un número es par o impar.

const verificarParidad = (numero) => {
    // Lógica: Si el residuo de la división por 2 es 0, es par.
    const resultado = (numero % 2 === 0) ? "Par" : "Impar";
    return `El número ${numero} es ${resultado}.`;
};

// Pruebas
console.log(verificarParidad(7));
console.log(verificarParidad(12));
console.log(verificarParidad(0));