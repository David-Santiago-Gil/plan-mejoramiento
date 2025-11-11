// fs_ejercicio6.js
// Este ejercicio debe ejecutarse con Node.js (node fs_ejercicio6.js)

const fs = require('fs');

fs.readFile('producto.json', 'utf8', (err, data) => {
  if (err) throw err;

  const producto = JSON.parse(data);

  console.log('Información del producto:');
  console.log(`- Nombre: ${producto.nombre}`);
  console.log(`- Precio: $${producto.precio}`);
  console.log(`- Disponible: ${producto.disponible ? 'Sí' : 'No'}`);
});
