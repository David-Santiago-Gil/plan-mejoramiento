// Ejercicio 7: Arrow function para verificar la mayoría de edad
// Crea una arrow function que determina si una persona es mayor de edad.

const esMayorDeEdad = (edad) => edad >= 18;

let edadIngresada = prompt("Ingresa tu edad:");
let resultado = esMayorDeEdad(Number(edadIngresada));

if (resultado) {
  alert("Eres mayor de edad.");
} else {
  alert("No eres mayor de edad.");
}
