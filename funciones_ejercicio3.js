// Ejercicio 3: Función para determinar si un año es bisiesto
// Crea una función tradicional para verificar si un año es bisiesto.

function esBisiesto(anio) {
  if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    return "El año " + anio + " es bisiesto.";
  } else {
    return "El año " + anio + " no es bisiesto.";
  }
}

let anioIngresado = prompt("Ingresa un año para saber si es bisiesto:");
let resultado = esBisiesto(Number(anioIngresado));

alert(resultado);
