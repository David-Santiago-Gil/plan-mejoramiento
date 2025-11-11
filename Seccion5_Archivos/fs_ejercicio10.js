// fs_ejercicio10.js
// Este ejercicio debe ejecutarse con Node.js (node fs_ejercicio10.js)

const fs = require('fs');

const archivoTemporal = 'temporal.txt';

// 1. Creamos un archivo temporal
fs.writeFileSync(archivoTemporal, 'Este es un archivo temporal.');
console.log(`Se ha creado el archivo '${archivoTemporal}'.`);

// 2. Verificamos que existe
if (fs.existsSync(archivoTemporal)) {
  console.log(`El archivo '${archivoTemporal}' existe.`);

  // 3. Lo eliminamos
  fs.unlinkSync(archivoTemporal);
  console.log(`El archivo '${archivoTemporal}' ha sido eliminado.`);
} else {
  console.log(`El archivo '${archivoTemporal}' no se encontró.`);
}
