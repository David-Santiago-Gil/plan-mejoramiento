// Ejercicio 4: Función para encontrar el máximo de tres números
// Crea una función tradicional que devuelve el mayor de tres números.

function encontrarMaximo(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

let num1 = prompt("Ingresa el primer número:");
let num2 = prompt("Ingresa el segundo número:");
let num3 = prompt("Ingresa el tercer número:");

let maximo = encontrarMaximo(Number(num1), Number(num2), Number(num3));

alert("El número máximo es: " + maximo);
