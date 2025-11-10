// arrays_ejercicio15.js
// Propósito: Usar el método .map() para transformar cada elemento de un array.

const precios = [15.50, 20.00, 5.99, 100.00]; // Precios en moneda base.
const IVA = 0.19; // 19% de IVA

console.log("Precios Base:", precios);

// 1. .map() para calcular el precio final con IVA.
// El método map siempre devuelve un NUEVO array con la misma longitud.
const preciosConIVA = precios.map(precio => {
    const impuesto = precio * IVA;
    const precioFinal = precio + impuesto;
    // Se retorna el nuevo valor para el array resultante.
    return parseFloat(precioFinal.toFixed(2));
});

console.log("\nPrecios con IVA (19%):", preciosConIVA); 
// Resultado: [18.44, 23.8, 7.13, 119]

// 2. .map() para crear un nuevo array de objetos (proyección).
const productos = precios.map((precio, index) => ({
    id: index + 1,
    precioOriginal: precio,
    precioIVA: preciosConIVA[index]
}));

console.log("\nArray de Objetos (Productos):");
console.log(productos);