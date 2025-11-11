// Ejercicio 4: Calculadora de edad
// Pide al usuario su año de nacimiento y calcula su edad.

let anioNacimiento = prompt("Ingresa tu año de nacimiento:");
let anioActual = new Date().getFullYear();
let edad = anioActual - Number(anioNacimiento);

alert("Tienes aproximadamente " + edad + " años.");
