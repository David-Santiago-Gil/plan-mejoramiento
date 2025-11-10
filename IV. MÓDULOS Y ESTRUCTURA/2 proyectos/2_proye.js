// modulos_ejercicio40_formulario.js
// Archivo principal (Formulario)

import { esVacio, esEmail } from './modulos_ejercicio40_validator.js';

console.log("\n--- Ejercicio 40: Proyecto Estructurado II (Validación) ---");

const email = "usuario@dominio.com";
const nombre = "";

// 1. Validar Email
if (esEmail(email)) {
    console.log(`Email '${email}' es Válido.`);
} else {
    console.log(`Email '${email}' es Inválido.`);
}

// 2. Validar Nombre (campo obligatorio)
if (esVacio(nombre)) {
    console.warn(`Error: El campo nombre está vacío.`);
} else {
    console.log(`Nombre Válido.`);
}