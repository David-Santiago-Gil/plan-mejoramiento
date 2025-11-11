// Ejercicio 1: Función para verificar el signo de un número
// Crea una función tradicional que determina si un número es positivo, negativo o cero.

function verificarSigno(numero) {
  if (numero > 0) {
    return "El número es positivo.";
  } else if (numero < 0) {
    return "El número es negativo.";
  } else {
    return "El número es cero.";
  }
}

let numeroIngresado = prompt("Ingresa un número:");
let resultado = verificarSigno(Number(numeroIngresado));

alert(resultado);
