// Ejercicio 3: Tabla de multiplicar
// Pide al usuario un número y muestra su tabla de multiplicar en la consola.

let numero = prompt("Ingresa un número para ver su tabla de multiplicar:");
numero = Number(numero);

console.log("Tabla de multiplicar del " + numero + ":");
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}

alert("La tabla de multiplicar se ha mostrado en la consola (presiona F12 para verla).");
