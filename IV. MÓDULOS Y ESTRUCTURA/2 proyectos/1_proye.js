// modulos_ejercicio40_validator.js
// Módulo de Validación

export function esVacio(valor) {
    return valor === null || valor.trim() === '';
}

export function esEmail(valor) {
    // Expresión regular simple para validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(valor);
}