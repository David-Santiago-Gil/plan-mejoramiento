// arrays_ejercicio11.js
// Propósito: Demostrar los métodos básicos de modificación (push, pop, unshift, shift).

let listaTareas = ["Comprar leche", "Pagar servicios", "Llamar al médico"];
console.log("Array Inicial:", listaTareas);

// 1. push(): Agrega un elemento al final del array.
listaTareas.push("Estudiar JavaScript");
console.log("Después de push('Estudiar JavaScript'):", listaTareas);
// Resultado: ["Comprar leche", "Pagar servicios", "Llamar al médico", "Estudiar JavaScript"]

// 2. pop(): Elimina y devuelve el ÚLTIMO elemento.
const tareaCompletada = listaTareas.pop();
console.log(`Después de pop() (Elemento eliminado: ${tareaCompletada}):`, listaTareas);
// Resultado: ["Comprar leche", "Pagar servicios", "Llamar al médico"]

// 3. unshift(): Agrega un elemento al PRINCIPIO del array.
listaTareas.unshift("Hacer ejercicio");
console.log("Después de unshift('Hacer ejercicio'):", listaTareas);
// Resultado: ["Hacer ejercicio", "Comprar leche", "Pagar servicios", "Llamar al médico"]

// 4. shift(): Elimina y devuelve el PRIMER elemento.
const tareaPrioritaria = listaTareas.shift();
console.log(`Después de shift() (Elemento eliminado: ${tareaPrioritaria}):`, listaTareas);
// Resultado: ["Comprar leche", "Pagar servicios", "Llamar al médico"]