// modulos_ejercicio33_persona.js
// Propósito: Exportar una clase por defecto.

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

export default Persona;

