// modulo_utilidades.js
// Este módulo exporta funciones de utilidad.

export function capitalizar(cadena) {
  return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

export function esVocal(letra) {
  return "aeiou".includes(letra.toLowerCase());
}
