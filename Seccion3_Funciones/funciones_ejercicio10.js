// Ejercicio 10: Operador ternario para asignar un descuento
// Utiliza el operador ternario para asignar un descuento si la compra es mayor a 100.

let totalCompra = prompt("Ingresa el total de la compra:");
let descuento = Number(totalCompra) > 100 ? 10 : 0; // 10% de descuento si la compra es mayor a 100, si no, 0%

alert("Tu descuento es del " + descuento + "%.");
