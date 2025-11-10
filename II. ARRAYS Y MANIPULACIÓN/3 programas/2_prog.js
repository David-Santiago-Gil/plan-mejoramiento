// arrays_ejercicio16.js
// Propósito: Usar el método .filter() para crear un nuevo array con elementos que cumplan una condición.

const estudiantes = [
    { nombre: "Laura", nota: 4.8, curso: "JS" },
    { nombre: "Pedro", nota: 2.5, curso: "JS" },
    { nombre: "Ana", nota: 3.0, curso: "Python" },
    { nombre: "David", nota: 4.1, curso: "JS" },
    { nombre: "Sofía", nota: 1.9, curso: "Python" }
];
const NOTA_APROBACION = 3.5;

console.log("Lista de Estudiantes:", estudiantes);

// 1. .filter() para obtener solo los estudiantes APROBADOS.
// La función de callback debe retornar true para incluir el elemento, o false para excluirlo.
const aprobadosJS = estudiantes.filter(estudiante => {
    // Condición: nota mayor o igual a 3.5 Y curso es "JS"
    return estudiante.nota >= NOTA_APROBACION && estudiante.curso === "JS";
});

console.log(`\nEstudiantes Aprobados en JS (Nota >= ${NOTA_APROBACION}):`);
console.log(aprobadosJS);
/*
Resultado: [
  { nombre: "Laura", nota: 4.8, curso: "JS" },
  { nombre: "David", nota: 4.1, curso: "JS" }
]
*/

// 2. .filter() para obtener estudiantes con notas bajas (menores a 3.0)
const reprobados = estudiantes.filter(estudiante => estudiante.nota < 3.0);
console.log("\nEstudiantes Reprobados (Nota < 3.0):");
console.log(reprobados);