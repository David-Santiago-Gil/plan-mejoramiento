// fs_ejercicio9.js
// Este ejercicio debe ejecutarse con Node.js (node fs_ejercicio9.js)

const fs = require('fs');

const nombreArchivo = 'mi_primer_archivo.txt';

// Verificamos si el archivo existe
if (fs.existsSync(nombreArchivo)) {
  // Si existe, lo eliminamos
  fs.unlinkSync(nombreArchivo);
  console.log(`El archivo '${nombreArchivo}' ha sido eliminado.`);
} else {
  console.log(`El archivo '${nombreArchivo}' no existe.`);
}
