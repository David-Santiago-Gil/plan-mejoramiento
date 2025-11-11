// modulos_ejercicio10.js
// Archivo principal del sistema de gestión de usuarios.

import { usuarios } from './gestion_usuarios_datos.js';

function mostrarUsuarios() {
  console.log("Lista de usuarios:");
  usuarios.forEach(usuario => {
    console.log(`- ${usuario.nombre} (ID: ${usuario.id})`);
  });
}

mostrarUsuarios();

alert("Se ha creado un sistema de gestión de usuarios modular. Revisa la consola.");
