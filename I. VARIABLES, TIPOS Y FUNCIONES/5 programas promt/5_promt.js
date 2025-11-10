// variables_ejercicio5.js
// Propósito: Calcular el precio final de un producto aplicando un porcentaje de descuento.

const precioBaseString = prompt("Ingrese el precio base del producto:");
const descuentoPorcentajeString = prompt("Ingrese el porcentaje de descuento (ej: 15 para 15%):");

// Conversión a tipo numérico (flotante).
const precioBase = parseFloat(precioBaseString);
const descuentoPorcentaje = parseFloat(descuentoPorcentajeString);

// Asumimos que los valores son válidos para la demostración.
const descuentoMonto = precioBase * (descuentoPorcentaje / 100);
const precioFinal = precioBase - descuentoMonto;

// Mostrar todos los resultados.
alert(
    `Resumen de la compra:\n` +
    `Precio Base: $${precioBase.toFixed(2)}\n` +
    `Descuento Aplicado: ${descuentoPorcentaje}% (-$${descuentoMonto.toFixed(2)})\n` +
    `Precio Final: $${precioFinal.toFixed(2)}`
);

// Coerción de tipos: En el alert, los números se coercieron a cadenas para la concatenación.