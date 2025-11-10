// variables_ejercicio10.js
// Propósito: Ejemplificar el uso de 'const' y su restricción de reasignación.

// 1. Declaración obligatoria con inicialización.
const PI = 3.14159;
console.log(`Valor inicial de PI (const): ${PI}`); // 3.14159

// 2. Intento de reasignación (¡Esto causaría un error de TypeError en tiempo de ejecución!)
/*
PI = 3.14; // TypeError: Assignment to constant variable.
console.log(PI);
*/
console.log("// El intento de reasignar PI causaría un error de tipo (TypeError).");

// 3. Uso de const con objetos (demostración de que el valor es inmutable, pero el contenido es mutable).
const configuracion = {
    tema: "oscuro",
    fuente: 12
};
console.log("\nConfiguración inicial (const objeto):", configuracion);

// El objeto en sí no puede reasignarse:
/*
configuracion = { tema: "claro" }; // TypeError
*/

// Pero sus propiedades SÍ pueden modificarse:
configuracion.tema = "claro"; 
configuracion.fuente = 14;
console.log("Configuración modificada:", configuracion); 

// Conclusión: 'const' asegura que la *referencia* no cambie, no el contenido del objeto o array.