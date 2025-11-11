// Ejercicio 2: Función para verificar si un número es par o impar
// Crea una función tradicional que determina si un número es par o impar.

function esParOImpar(numero) {
  if (numero % 2 === 0) {
    return "El número es par.";
  } else {
    return "El número es impar.";
  }
}

let numeroIngresado = prompt("Ingresa un número para saber si es par o impar:");
let resultado = esParOImpar(Number(numeroIngresado));

alert(resultado);
