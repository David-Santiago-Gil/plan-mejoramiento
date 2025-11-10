// funciones_ejercicio29.js
// Propósito: Usar el operador ternario para asignar un valor por defecto si un parámetro es nulo (o vacío/cero).

/**
 * Asigna un nombre de usuario y un nivel de acceso (Admin o Invitado).
 * @param {string} nombre - Nombre del usuario (puede ser null/undefined).
 * @param {number} nivel - Nivel de acceso (ej: 50).
 * @returns {string} - Mensaje de bienvenida.
 */
const asignarAcceso = (nombre, nivel) => {
    // Operador ternario para asignar 'Invitado Anónimo' si 'nombre' es falsy (null, "", undefined, 0).
    const nombreUsuario = nombre ? nombre : "Invitado Anónimo";
    
    // Operador ternario para asignar rol.
    const rol = (nivel > 90) ? "Administrador" : "Usuario Estándar";

    return `Bienvenido, ${nombreUsuario}. Tu rol asignado es: ${rol}.`;
};

// Pruebas
console.log(asignarAcceso("Diana", 100)); // Diana, Administrador
console.log(asignarAcceso(null, 50)); // Invitado Anónimo, Usuario Estándar
console.log(asignarAcceso("", 95)); // Invitado Anónimo, Administrador