// arrays_ejercicio18.js
// Propósito: Recorrer un array con un bucle for tradicional para calcular la suma.

const ventasTrimestrales = [1500, 2200, 1850, 3100]; // Ventas del Q1 al Q4
let totalVentas = 0;

console.log("Ventas trimestrales:", ventasTrimestrales);

// Bucle 'for' tradicional: Ideal para controlar índices y manipular la iteración.
for (let i = 0; i < ventasTrimestrales.length; i++) {
    const venta = ventasTrimestrales[i];
    
    // Sumar el elemento actual al acumulador.
    totalVentas += venta;
    
    // Mostrar el índice y el valor en cada iteración.
    console.log(`Venta del Trimestre ${i + 1}: $${venta.toFixed(2)}`);
}

console.log("\n---------------------------");
console.log(`Total de ventas anuales: $${totalVentas.toFixed(2)}`);