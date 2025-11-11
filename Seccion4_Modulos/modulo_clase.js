// modulo_clase.js
// Este módulo exporta una clase por defecto.

export default class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(this.nombre + " hace un ruido.");
  }
}
