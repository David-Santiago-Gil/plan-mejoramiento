// modulos_ejercicio36_datos.js
// Propósito: Exportar múltiples elementos usando export nombrado.

// 1. Exportación en la declaración (preferida para const, let, var, function, class).
export const PI = 3.14159;

export function saludar(nombre) {
    return `Hola, ${nombre}! Bienvenido.`;
}

// 2. Exportación al final (útil para agrupar exportaciones).
const MAX_USUARIOS = 100;
export { MAX_USUARIOS };

