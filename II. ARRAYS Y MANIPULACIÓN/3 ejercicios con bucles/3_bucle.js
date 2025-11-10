// arrays_ejercicio20.js
// Propósito: Usar bucles 'for' anidados para recorrer y sumar valores en un array bidimensional (matriz).

// Matriz de calificaciones: Filas = Estudiantes, Columnas = Notas (Parcial 1, Parcial 2, Final).
const matrizCalificaciones = [
    [4.5, 3.8, 5.0], // Estudiante 1
    [3.0, 2.5, 3.5], // Estudiante 2
    [4.0, 4.0, 4.0]  // Estudiante 3
];

let sumaTotalNotas = 0;
let numNotas = 0;

console.log("Matriz de Calificaciones:");
console.log(matrizCalificaciones);

// Bucle exterior: Itera sobre las FILAS (Estudiantes)
for (let i = 0; i < matrizCalificaciones.length; i++) {
    const estudianteNotas = matrizCalificaciones[i];
    let sumaEstudiante = 0;

    // Bucle interior: Itera sobre las COLUMNAS (Notas)
    for (let j = 0; j < estudianteNotas.length; j++) {
        const nota = estudianteNotas[j];
        
        sumaEstudiante += nota;
        sumaTotalNotas += nota;
        numNotas++;
    }

    // Cálculo del promedio individual (una vez que se han sumado todas sus notas)
    const promedioEstudiante = sumaEstudiante / estudianteNotas.length;
    console.log(`\nEstudiante ${i + 1}: Promedio = ${promedioEstudiante.toFixed(2)}`);
}

// Cálculo del promedio general.
const promedioGeneral = sumaTotalNotas / numNotas;
console.log("\n---------------------------");
console.log(`Promedio general del grupo: ${promedioGeneral.toFixed(2)}`);