// arrays_ejercicio17.js
// Propósito: Combinar .filter() y .map() para procesar datos complejos.

const transacciones = [
    { id: 101, tipo: "ingreso", monto: 1200, descripcion: "Salario" },
    { id: 102, tipo: "egreso", monto: 350, descripcion: "Alquiler" },
    { id: 103, tipo: "egreso", monto: 150, descripcion: "Compras" },
    { id: 104, tipo: "ingreso", monto: 80, descripcion: "Venta extra" },
    { id: 105, tipo: "egreso", monto: 50, descripcion: "Transporte" }
];
const UMBRAL_EGRESO = 100;

console.log("Transacciones Iniciales:", transacciones);

// Tarea: 
// 1. Filtrar solo los EGRESOS (gastos).
// 2. Filtrar solo los EGRESOS cuyo monto sea mayor o igual al UMBRAL_EGRESO.
// 3. Mapear el resultado para obtener solo el valor de la descripción y el monto (simplificación).

const egresosImportantes = transacciones
    .filter(t => t.tipo === "egreso") // Paso 1: Filtrar por tipo "egreso"
    .filter(t => t.monto >= UMBRAL_EGRESO) // Paso 2: Filtrar por monto mayor o igual a 100
    .map(t => ({ // Paso 3: Mapear para simplificar el objeto
        detalle: t.descripcion,
        valor: t.monto
    }));

console.log(`\nEgresos Importantes (Monto >= ${UMBRAL_EGRESO}):`);
console.log(egresosImportantes);
/*
Resultado: [
  { detalle: "Alquiler", valor: 350 },
  { detalle: "Compras", valor: 150 }
]
*/