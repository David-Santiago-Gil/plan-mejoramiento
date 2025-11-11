// fs_ejercicio1.js
// Este ejercicio debe ejecutarse con Node.js (node fs_ejercicio1.js)

const fs = require('fs');

const contenido = "Este es el contenido de mi primer archivo.";

fs.writeFile('mi_primer_archivo.txt', contenido, (err) => {
  if (err) throw err;
  console.log('¡El archivo ha sido creado y guardado!');
});
