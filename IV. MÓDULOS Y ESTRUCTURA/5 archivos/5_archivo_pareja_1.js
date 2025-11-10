// modulos_ejercicio35_logica.js
// Propósito: Exportar una función que calcula el área de un círculo.

const calcularAreaCirculo = (radio) => {
    return Math.PI * radio * radio;
};

export default calcularAreaCirculo;

// modulos_ejercicio35_prueba.js
// Propósito: Usar un alias diferente al nombre original en la importación por defecto.

// Importación: El nombre original es 'calcularAreaCirculo', lo importamos como 'area'.
import area from './modulos_ejercicio35_logica.js';

console.log("\n--- Ejercicio 35: Exportación por Defecto (Alias) ---");
const radio = 5;
console.log(`El área del círculo de radio ${radio} es: ${area(radio).toFixed(2)}`);