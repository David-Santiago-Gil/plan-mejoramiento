// arrays_ejercicio13.js
// Propósito: Demostrar cómo combinar arrays con concat() y copiar arrays con slice().

const frutas = ["Manzana", "Pera"];
const vegetales = ["Zanahoria", "Lechuga"];
const carnes = ["Pollo", "Res"];
console.log("Arrays base: ", frutas, vegetales, carnes);

// 1. concat(): Combina múltiples arrays y devuelve un nuevo array.
const comidaCompleta = frutas.concat(vegetales, carnes);
console.log("\nDespués de concat() (Comida Completa):", comidaCompleta);
// Resultado: ["Manzana", "Pera", "Zanahoria", "Lechuga", "Pollo", "Res"]

// 2. slice(): Crea una COPIA superficial del array.
// slice() sin argumentos copia todo el array.
const copiaFrutas = frutas.slice(); 
console.log("\nCopia de Frutas con slice():", copiaFrutas);

// 3. slice() para extraer una sub-sección.
// slice(indiceInicial, indiceFinal-Exclusivo)
// Extraer "Zanahoria" y "Lechuga" (índices 2 y 3).
const soloVegetales = comidaCompleta.slice(2, 4);
console.log("Sub-sección (slice(2, 4)):", soloVegetales);
// Resultado: ["Zanahoria", "Lechuga"]

// Nota: La copia con slice() es superficial, no afecta al array original si se modifica la copia.
copiaFrutas.push("Uva");
console.log("Frutas Original:", frutas); 
console.log("Frutas Copia (modificada):", copiaFrutas);