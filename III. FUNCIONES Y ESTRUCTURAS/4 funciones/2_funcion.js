// funciones_ejercicio22.js
// Propósito: Función tradicional para calcular el precio final con descuentos basados en rangos de compra.

/**
 * Calcula el precio final aplicando un descuento escalonado.
 * @param {number} monto - El monto total de la compra.
 * @returns {number} - El precio final a pagar.
 */
function calcularPrecioFinal(monto) {
    let descuento = 0;
    
    // Condición general de validación
    if (monto <= 0) {
        console.log("Monto debe ser positivo.");
        return 0;
    }

    // Lógica de descuento con if anidados (o else if)
    if (monto >= 500) {
        descuento = 0.20; // 20% de descuento para compras grandes
        console.log(`¡Descuento aplicado: 20%!`);
    } else if (monto >= 200) {
        descuento = 0.10; // 10% de descuento
        console.log(`¡Descuento aplicado: 10%!`);
    } else {
        descuento = 0; // Sin descuento
        console.log(`Sin descuento aplicado.`);
    }

    const montoDescuento = monto * descuento;
    const precioFinal = monto - montoDescuento;

    console.log(`Monto Original: $${monto.toFixed(2)}`);
    console.log(`Monto Descontado: $${montoDescuento.toFixed(2)}`);
    return parseFloat(precioFinal.toFixed(2));
}

// Pruebas
console.log(`\nCompra de $650: $${calcularPrecioFinal(650)}`);
console.log(`\nCompra de $250: $${calcularPrecioFinal(250)}`);
console.log(`\nCompra de $99: $${calcularPrecioFinal(99)}`);