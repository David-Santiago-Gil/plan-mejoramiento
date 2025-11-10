// arrays_ejercicio19.js
// Propósito: Recorrer un array de objetos con el método forEach().

const usuarios = [
    { nombre: "Elsa", rol: "Administrador" },
    { nombre: "Mario", rol: "Editor" },
    { nombre: "Luisa", rol: "Invitado" }
];

console.log("Listado de Usuarios:");

// forEach(): Ideal para iterar sobre cada elemento sin necesidad de índice, 
// cuando solo se necesita ejecutar una acción (efecto secundario).
usuarios.forEach((usuario, indice) => {
    // Se utiliza el índice (opcional) para numerar la lista.
    console.log(`[${indice + 1}] Nombre: ${usuario.nombre} | Rol: ${usuario.rol}`);
    
    // Ejemplo de manipulación (solo lectura de forEach):
    if (usuario.rol === "Administrador") {
        console.log(`  -> ¡ALERTA! Este usuario tiene permisos de ${usuario.rol}.`);
    }
});

// Nota: forEach no retorna un nuevo array; para eso se usaría map().